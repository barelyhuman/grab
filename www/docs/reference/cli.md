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
   v0.0.0

COMMANDS:
   providers, p  Grab's supported providers
   help, h       Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --env FILE                  will use the env from the specified FILE (default: ".env")
   --filename value, -f value  the filename to grab, if files are similarly named
   --help, -h                  show help (default: false)
   --print-version, -V         print only the version (default: false)
   --provider value, -p value  the provider to use, to see supported providers run 'grab providers' (default: "github")
```

### examples

to grab the latest tarball for hugo for your specific system

```sh
grab -p github gohugoio/hugo
```

to grab a specific tarball for hugo

```sh
grab -p github --filename 'hugo_0.100.1_Linux-ARM.deb' gohugoio/hugo
```

`github` is the default provider so it can be omitted, so getting something like `hugo` could be
as simple as

```sh
grab gohugoio/hugo
```

it works with other programs as well, let's try a few of mine

```sh
grab barelyhuman/commitlog # go runtime tarball
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
