package utils

import "strings"

func IsArchive(name string) bool {
	return strings.HasSuffix(name, ".tar.gz") || strings.HasSuffix(name, ".tgz") || strings.HasSuffix(name, ".tar") || strings.HasSuffix(name, ".zip")
}
