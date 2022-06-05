package utils

import (
	"strings"

	bhsemver "github.com/barelyhuman/go/semver"
	"golang.org/x/mod/semver"
)

func MatchOrLatestVersion(versions []string, toMatch string) (result string) {
	for _, v := range versions {
		cncV := semver.Canonical(v)
		cncMatch := semver.Canonical(toMatch)

		if !strings.HasPrefix(toMatch, "v") {
			cncMatch = semver.Canonical("v" + toMatch)
		}

		if semver.Compare(cncV, cncMatch) == 0 {
			result = v
			break
		}
	}

	if len(result) == 0 {
		result = bhsemver.LatestVersion(versions)
	}

	return
}
