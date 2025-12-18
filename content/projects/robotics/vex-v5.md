---
title: VEX V5
date: 2021-11-16T18:07:43-07:00
icon: /image/vex-v5.png
timeframe: 2021-2024
description: |
  I participated in the [Vex Robotics Competition](https://www.vexrobotics.com/v5/competition/)
  from 2021-2024.
repository: https://github.com/marcus8448/VexV5
tools:
  - C++
  - CMake
---

From 2021-2024, I started competed in the VEX robotics competition.
Being an embedded C/C++ project, I learned lots about cross compilation and build systems.
On the robotics side, I learned some basic control theory to make the robot run as smooth as possible.

To improve IDE integration and remove platform-specific build code,
I translated the program's makefile into a CMake project.

## Features
* Runtime sensor diagnostic information and debug tools on the screen (LVGL)
  * Runtime PID tuning
  * Real-time graphing of sensor information
  * Select autonomous run via the screen
* Uses a CMake project instead of Makefiles (compared to a typical [PROS](https://pros.cs.purdue.edu/) project)
  * Improved IDE support (can generate a Visual Studio project)
  * Run `clang-tidy` or `clang-format` over the project's sources
  * Simplified dependency management
  * Better support across operating systems
  * Simplified build process
