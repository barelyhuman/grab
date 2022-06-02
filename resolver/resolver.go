package resolver

type AssetItem struct {
	Name      string
	IsArchive bool
	IsMD5     bool
	URL       string
}

type Resolver interface {
	GetVersions(string) ([]string, error)
	GetReleaseAssets(string, string) ([]AssetItem, error)
}
