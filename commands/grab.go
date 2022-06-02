package commands

import (
	"os/exec"
	"path"

	"github.com/barelyhuman/go/env"
	"github.com/barelyhuman/go/semver"
	"github.com/barelyhuman/grab/resolver"
	ghr "github.com/barelyhuman/grab/resolver/github"
	"github.com/barelyhuman/grab/utils"
	"github.com/urfave/cli/v2"
)

func Grab(c *cli.Context) (err error) {
	repo := c.Args().Get(0)
	provider := c.String("provider")
	filename := c.String("filename")
	var binResolver resolver.Resolver

	switch provider {
	case "github":
		{
			token := env.Get("GITHUB_TOKEN", c.String("token"))
			binResolver = ghr.NewResolver(
				ghr.WithToken(token),
			)
			break
		}
	}

	versions, err := binResolver.GetVersions(repo)
	if err != nil {
		return err
	}

	latest := semver.LatestVersion(versions)

	assets, err := binResolver.GetReleaseAssets(repo, latest)

	if err != nil {
		return
	}

	var matcher *resolver.Matcher

	if len(filename) > 0 {
		matcher = resolver.NewMatcher(assets,
			resolver.WithNameMatcher(filename))
	} else {
		matcher = resolver.NewMatcher(assets,
			resolver.WithDefaultMatcher())
	}

	selectedAsset := matcher.Selected

	downloadPath := path.Join(".")
	outPath := path.Join(downloadPath, selectedAsset.Name)
	cmd := exec.Command("curl", "-sfL", "-o", outPath, selectedAsset.URL)
	cmd.Dir = downloadPath

	err = utils.Command(cmd)

	return
}
