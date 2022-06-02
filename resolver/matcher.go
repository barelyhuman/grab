package resolver

import (
	"runtime"
	"strings"
)

type Matcher struct {
	Selected AssetItem
	assets   []AssetItem
}

type matcherOptions func(*Matcher)

func NewMatcher(assets []AssetItem, opts ...matcherOptions) *Matcher {
	m := &Matcher{
		assets: assets,
	}

	for _, opt := range opts {
		opt(m)
	}

	return m
}

func WithDefaultMatcher() matcherOptions {
	return func(m *Matcher) {
		alternateOS := map[string]string{
			"darwin": "macos",
		}

		for _, asset := range m.assets {
			assetName := strings.ToLower(asset.Name)
			osMatch := strings.Contains(assetName, runtime.GOOS)

			if !osMatch {
				osMatch = strings.Contains(assetName, alternateOS[runtime.GOOS])
			}

			if !(asset.IsArchive && osMatch && strings.Contains(assetName, runtime.GOARCH)) {
				continue
			}

			m.Selected = asset
		}
	}
}

func WithNameMatcher(name string) matcherOptions {
	return func(m *Matcher) {
		for _, asset := range m.assets {
			assetName := asset.Name
			if !(strings.Contains(assetName, name)) {
				continue
			}
			m.Selected = asset
		}
	}
}
