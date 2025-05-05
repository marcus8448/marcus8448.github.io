---
title: "Machine<wbr />Lib"
subtitle: Library mod for Galacticraft
date: 2022-03-05T09:46:52-08:00
icon: /image/machinelib.png
description: |
  A library for Minecraft mods that simplifies the implementation of complex blocks that process resources.
repository: https://github.com/TeamGalacticraft/MachineLib
languages:
  - java
  - gradle
---

## About
MachineLib aims to reduce the amount of boilerplate code required to implement complicated "machine" blocks
that interact with items, fluids and energy.

Before MachineLib existed, Galacticraft used [UniversalComponents](https://github.com/CottonMC/UniversalComponents)
to handle inventories, before transitioning to [LibBlockAttributes](https://github.com/AlexIIL/LibBlockAttributes).
I decided to try and make my own implementation using the newly standardized
[transfer api](https://github.com/FabricMC/fabric/pull/1553),
and created this project.
MachineLib is attempts to take a "batteries-included" approach,
with tight integration between the storage and block implementations with a focus on developer ergonomics.


## Features
* Simplified builder-style resource storage (inventory) creation
  * Define storage formats and limits in one place
    * DRY - prevents repetition in the `BlockEntity`, `Menu`, and `Screen`
  * Context-aware slot resource filtering
    * Easily treat players and automated/external slot changes separately 
  * Define acceptable external block interactions and player interactions at the slot level
* Machine blocks have extra features out of the box
  * Player-configurable resource I/O interactions with adjacent blocks
    * Dynamic model generation reflects port changes in-world
    * Comes with a built-in GUI to manage the configuration
    * Push/pull transfer automatically handed based on selected ports
  * Automatic (de)activation with Minecraft redstone signals
  * Extended menu sychronization system
    * No longer constrained to pure `int` synchronization
* Comes with an extensible `GameTest` framework 
  * Allows for full in-world testing of complicated machine setups
