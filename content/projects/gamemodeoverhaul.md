---
title: GamemodeOverhaul
subtitle: Minecraft mod with over 500,000 downloads
date: 2019-02-16T00:00:00-00:00
icon: /image/gamemodeoverhaul.png
Description: |
  A mod for Minecraft that restores command options removed in the 1.13 update.
  Also adds some shorthand commands for convenience.
repository: https://github.com/marcus8448/MinecraftMods
modrinth: gamemodeoverhaul
curseforge: gamemodeoverhaul
heroType: has-background-light-soft
languages:
  - java
  - gradle
---

# About

This was my first proper Minecraft modification, originally released in February 2019.
Created in about two weeks, the original goal of this mod was just restore the removed integer `/gamemode` arguments,
but its scope steadily expanded to other commands and aliases.

Now GamemodeOverhaul is a fully configurable mod
that supports over eight versions of Minecraft on two different mod loaders (in a shared codebase utilizing java SPI!).
Since its initial release, GamemodeOverhaul has seen over 500,000 downloads.

# Features

* Restores command arguments removed in 1.13
  * `/gamemode 0/1/2/3,s/c/a/sp`
  * `/defaultgamemode 0/1/2/3,s/c/a/sp`
  * `/difficulty 0/1/2/3`
* Restores commands removed in 1.13
  * `/toggledownfall`
* Adds shorthand command aliases
  * `/gm` -> `/gamemode`
  * `/gm[s/c/a/sp]` -> `/gamemode [s/c/a/sp]`
  * `/dgm` -> `/defaultgamemode`
