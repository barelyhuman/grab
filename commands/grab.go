package commands

import (
	"log"
	"os/exec"
	"path"
	"runtime"
	"strings"

	"github.com/barelyhuman/go/env"
	"github.com/barelyhuman/go/semver"
	"github.com/barelyhuman/grab/resolver"
	ghr "github.com/barelyhuman/grab/resolver/github"
	"github.com/urfave/cli/v2"
)

func Grab(c *cli.Context) (err error) {
	repo := c.Args().Get(0)
	provider := c.String("provider")
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

	if runtime.GOOS == "windows" {
		log.Println("windows")
	}

	latest := semver.LatestVersion(versions)

	assets, err := binResolver.GetReleaseAssets(repo, latest)

	if err != nil {
		return
	}

	selectedAsset := resolver.AssetItem{}

	alternateOS := map[string]string{
		"darwin": "macos",
	}

	for _, asset := range assets {
		assetName := strings.ToLower(asset.Name)
		osMatch := strings.Contains(assetName, runtime.GOOS)

		if !osMatch {
			osMatch = strings.Contains(assetName, alternateOS[runtime.GOOS])
		}

		if !(asset.IsTarball && osMatch && strings.Contains(assetName, runtime.GOARCH)) {
			continue
		}

		selectedAsset = asset
	}

	downloadPath := path.Join(".")
	outPath := path.Join(downloadPath, selectedAsset.Name)
	cmd := exec.Command("curl", "-sfL", "-o", outPath, selectedAsset.URL)
	cmd.Dir = downloadPath

	err = command(cmd)

	return
}

func command(cmd *exec.Cmd) error {
	var w strings.Builder
	cmd.Stderr = &w
	err := cmd.Run()
	if err != nil {
		log.Println(strings.TrimSpace(w.String()))
		return err
	}
	return nil
}
