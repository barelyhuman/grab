package github

import (
	"context"
	"errors"
	"fmt"
	"strings"
	"time"

	"github.com/barelyhuman/grab/resolver"
	"github.com/barelyhuman/grab/utils"
	"github.com/google/go-github/v28/github"
	"golang.org/x/oauth2"
)

type Resolver struct {
	client *github.Client
}

type Options func(*Resolver)

func repoToParts(repoPath string) (owner, repo string, err error) {
	repoParts := strings.Split(repoPath, "/")

	if len(repoParts) < 2 {
		err = fmt.Errorf("invalid repo path, please make sure to pass a path in the following pattern `owner/repo`")
		return
	}

	owner = repoParts[0]
	repo = repoParts[1]

	return
}

func (gr Resolver) GetVersions(input string) (versions []string, err error) {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*10)
	defer cancel()

	owner, repo, err := repoToParts(input)
	if err != nil {
		return
	}

	page := 1

	for {
		options := &github.ListOptions{
			Page:    page,
			PerPage: 100,
		}

		tags, _, err := gr.client.Repositories.ListTags(ctx, owner, repo, options)
		if err != nil {
			return nil, fmt.Errorf("error listing tags: %w", err)
		}

		if len(tags) == 0 {
			break
		}

		for _, t := range tags {
			versions = append(versions, t.GetName())
		}

		page++
	}

	if len(versions) == 0 {
		return nil, errors.New("no versions defined")
	}

	return

}

func (gr *Resolver) GetReleaseAssets(repoPath string, releaseVersion string) (assets []resolver.AssetItem, err error) {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*10)
	defer cancel()

	owner, repo, err := repoToParts(repoPath)

	if err != nil {
		return
	}

	release, _, err := gr.client.Repositories.GetReleaseByTag(ctx, owner, repo, releaseVersion)
	if err != nil {
		return
	}

	for _, ra := range release.Assets {
		name := ra.GetName()

		// FIXME: add more suffixes for tar balls
		assets = append(assets, resolver.AssetItem{
			Name:      name,
			URL:       ra.GetBrowserDownloadURL(),
			IsArchive: utils.IsArchive(name),
			IsMD5:     strings.HasSuffix(name, ".md5"),
		})
	}

	return
}

func NewResolver(options ...Options) resolver.Resolver {
	gResolver := &Resolver{}

	for _, opt := range options {
		opt(gResolver)
	}

	return gResolver
}

func WithToken(token string) Options {
	return func(gr *Resolver) {
		ctx := context.Background()

		oauthClient := oauth2.StaticTokenSource(
			&oauth2.Token{
				AccessToken: token,
			},
		)

		gr.client = github.NewClient(oauth2.NewClient(ctx, oauthClient))
	}
}
