+++
title = "Machine<wbr />Lib"
subtitle = "Library mod for built for Galacticraft 5"
date = "2022-03-05T09:46:52-08:00"
timeframe = "2022-present"
icon = "/image/machinelib.png"
description = """
A library for Minecraft mods that simplifies the implementation of complex blocks that process resources.
"""
repository = "https://github.com/TeamGalacticraft/MachineLib"
tools = [ "Java", "Gradle" ]
+++

MachineLib aims to reduce the amount of boilerplate code required to implement complex &ldquo;machine&rdquo; blocks
that interact with items, fluids and energy.

Before MachineLib existed, Galacticraft used [UniversalComponents](https://github.com/CottonMC/UniversalComponents)
to handle inventories, before transitioning to [LibBlockAttributes](https://github.com/AlexIIL/LibBlockAttributes).
I decided to try and make my own implementation using the newly standardized
[transfer api](https://github.com/FabricMC/fabric/pull/1553),
and created this project.
MachineLib is attempts to take a &ldquo;batteries-included&rdquo; approach,
with tight integration between the storage and block implementations with a focus on developer ergonomics.


## Features
* Simplified builder-style resource storage (inventory) creation
  * Define storage formats and limits in one place
  * Context-aware slot resource filtering
    * Easily treat players and automated/external slot access separately 
  * Define acceptable external block interactions and player interactions at the slot level
  * Unifies handling of item and fluid storage capabilities
* Machine blocks have extra features out of the box
  * Player-configurable resource I/O interactions with adjacent blocks
    * Dynamic model generation reflects port changes in-world
    * Comes with a built-in GUI to manage the configuration
    * Push/pull transfer automatically handed based on selected ports
  * Automatic (de)activation with Minecraft redstone signals
  * Extended menu synchronization system
* Comes with an extensible testing framework integrated with Minecraft's `GameTest` 
  * Allows for full in-world unit and integration testing of complicated machine setups
