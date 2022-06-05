---
layout: doc
---

# cli reference

## global usage

```
NAME:
   grab - download a binary from various cdn provisions

USAGE:
   grab [global options] command [command options] [arguments...]

VERSION:
   v0.0.1-beta.1

COMMANDS:
   providers, p  Grab's supported providers
   help, h       Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --env FILE                  will use the env from the specified FILE (default: ".env")
   --filename value, -f value  the filename to grab, if files are similarly named
   --help, -h                  show help (default: false)
   --print-version, -V         print only the version (default: false)
   --provider value, -p value  the provider to use, to see supported providers run 'grab providers' (default: "github")
   --version value, -v value   the version of the asset to grab (accepts vX.X.X and X.X.X)
```

### examples

to grab the latest tarball for hugo for your specific system

```bash
grab -p github gohugoio/hugo
```

to grab a specific tarball for hugo

```bash
grab -p github --filename 'hugo_0.100.1_Linux-ARM.deb' gohugoio/hugo
```

`github` is the default provider so it can be omitted, so getting something like `hugo` could be
as simple as

```bash
grab gohugoio/hugo
```

it works with other programs as well, let's try a few of mine

```bash
grab barelyhuman/commitlog # go runtime tarball
grab barelyhuman/commitlog -v 0.0.10 # get version 0.0.10 specifically,
# will get the latest version if it doesn't find the tag for this specifically
grab barelyhuman/mudkip # nim lang tarball
grab barelyhuman/statico # go runtime tarball
```

## commands

### providers

used to list the currently supported providers and their keys to be used with `grab`'s `-p` flag.

```
NAME:
   grab providers - Grab's supported providers

USAGE:
   grab providers [command options] [arguments...]

OPTIONS:
   --help, -h  show help (default: false)
```
