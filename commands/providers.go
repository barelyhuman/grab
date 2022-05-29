package commands

import (
	"fmt"

	"github.com/jedib0t/go-pretty/v6/table"
	"github.com/urfave/cli/v2"
)

type Provider struct {
	provider string
	key      string
}

var providers []Provider = []Provider{
	{
		provider: "Github",
		key:      "github",
	},
}

func ListProviders(c *cli.Context) (err error) {
	tw := table.NewWriter()

	tw.AppendHeader(table.Row{"#", "provider", "command key"})

	for i, v := range providers {
		tw.AppendRow(table.Row{i + 1, v.provider, v.key})
	}

	fmt.Println()
	fmt.Println(tw.Render())
	fmt.Println()

	return
}
