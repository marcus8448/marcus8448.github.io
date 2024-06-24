---
title: "MachineLib"
date: 2022-03-05T09:46:52-08:00
icon: /image/machinelib.png
Description: |
  A library for Minecraft mods that simplifies the implementation of complex blocks that process resources.
repository: https://github.com/TeamGalacticraft/MachineLib
heroType: has-background-light-soft
languages:
  - java
  - gradle
---

This library/mod aims to reduce the amount of boilerplate code required to implement blocks with inventories and menus.

# About

Before MachineLib existed, Galacticraft used [UniversalComponents](https://github.com/CottonMC/UniversalComponents)
to handle inventories, then [LibBlockAttributes](https://github.com/AlexIIL/LibBlockAttributes).
When we were stuck waiting for these libraries to update,
I decided to try and make my own implementation using the newly standardized
[transfer api](https://github.com/FabricMC/fabric/pull/1553), and created MachineLib.

# Features

* Builder-style resource storage (inventory) creation
  * Slot resource filtering
  * Define slot locations in one place
  * Define acceptable external block interactions and player interactions by setting a slot's type
* Comes with a base `BlockEntity` implementation
  * Supports player-configurable resource I/O interactions with adjacent blocks
  * Minecraft redstone (de)activation
  * Supports storage of items, fluids and energy
  * Additional utilities for blocks dealing with Minecraft's recipe system
* Comes with extensible `GameTest`s
  * Can automatically verify machine functionality
