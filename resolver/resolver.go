package resolver

type AssetItem struct {
	Name      string
	IsTarball bool
	IsMD5     bool
	URL       string
}

type Resolver interface {
	GetVersions(string) ([]string, error)
	GetReleaseAssets(string, string) ([]AssetItem, error)
}
