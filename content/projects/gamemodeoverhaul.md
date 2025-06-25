---
title: Gamemode<wbr />Overhaul
subtitle: Minecraft mod with over 500,000 downloads
date: 2019-02-16T00:00:00-00:00
timeframe: 2019-present
icon: /image/gamemodeoverhaul.png
description: |
  A mod for Minecraft that restores command options removed in the 1.13 update.
  Also adds some shorthand commands for convenience.
repository: https://github.com/marcus8448/MinecraftMods
modrinth: gamemodeoverhaul
curseforge: gamemodeoverhaul
tools:
  - Java
  - Gradle
---

## About

This was my first published Minecraft modification, originally released in February 2019.
Created in the span of two weeks, the original goal of this mod was to simply restore the integer `/gamemode` arguments
(which were removed in the 1.13 update), but has since expanded to include other commands and aliases.

GamemodeOverhaul supports over eight versions of Minecraft and two different mod loaders.
Since its initial release, GamemodeOverhaul has seen over 500,000 downloads.

## Features

* Supports both Fabric and NeoForge
  * Install to your mod loader of choice!
* Fully configurable
  * Enable or disable commands (and aliases) as needed
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
