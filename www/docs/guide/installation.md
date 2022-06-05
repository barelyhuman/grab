---
layout: doc
---

# installation

## using installation script

coming soon...

## using github releases

if this is being setup for a non-ci / interactive systems, you can download the binaries from the [github releases](https://github.com/barelyhuman/grab/releases)

## using `go get`

if you are on a ci that already has golang installed and configured, you can use the `go get` to build it for your system

```bash
go get -u github.com/barelyhuman/grab
```

## using goblin

:::warning warning
though i wouldn't recommend this method since, `grab` was an idea that came up when goblin was down, and i wasn't able to generate my changelogs and had to wait for the domains and everything to be reconfigured
before i could move ahead with rest of my work. even though i own the service, i have no control over my luck and cannot guarantee what dr. murphy will plan for me next, so use this with caution
:::

```bash
curl -sf https://goblin.barelyhuman.xyz/github.com/barelyhuman/grab | sh
```
