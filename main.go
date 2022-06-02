package main

import (
	_ "embed"
	"fmt"
	"log"
	"os"

	"github.com/barelyhuman/grab/commands"
	"github.com/joho/godotenv"
	"github.com/urfave/cli/v2"
)

//go:embed .commitlog.release
var version string

func main() {
	app := &cli.App{
		Name:  "grab",
		Usage: "download a binary from various cdn provisions",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "env",
				Usage: "will use the env from the specified `FILE`",
				Value: ".env",
			},
			&cli.StringFlag{
				Name:    "provider",
				Aliases: []string{"p"},
				Usage:   "the provider to use, to see supported providers run 'grab providers'",
				Value:   "github",
			},
			&cli.StringFlag{
				Name:    "filename",
				Aliases: []string{"f"},
				Usage:   "the filename to grab, if files are similarly named",
			}
		},
		Commands: []*cli.Command{
			{
				Name:    "providers",
				Usage:   "Grab's supported providers",
				Aliases: []string{"p"},
				Action: func(ctx *cli.Context) (err error) {
					return commands.ListProviders(ctx)
				},
			},
		},
		Action: func(c *cli.Context) error {
			godotenv.Load(c.String("env"))
			err := commands.Grab(c)
			if err != nil {
				fmt.Fprintf(os.Stderr, "Error: %v", err)
			}
			return nil
		},
	}

	cli.VersionFlag = &cli.BoolFlag{
		Name:    "print-version",
		Aliases: []string{"V"},
		Usage:   "print only the version",
	}

	app.Version = version

	err := app.Run(os.Args)
	if err != nil {
		log.Fatal(err)
	}
}
