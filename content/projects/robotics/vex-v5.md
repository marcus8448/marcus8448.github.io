---
title: "VEX V5"
date: 2021-11-16T18:07:43-07:00
icon: /image/vex-v5.png
Description: |
  I participated in the [Vex Robotics Competition](https://www.vexrobotics.com/v5/competition/)
  from 2021-2024.
repository: https://github.com/marcus8448/VexV5
heroType: has-background-light-soft
languages:
  - c
  - cplusplus
  - cmake
---

# About

In 2021, I started competing in the VEX robotics competition.
This was my first real application using C++ (ignoring Arduino).
On the tooling side, I learned about makefiles and managing dependencies in the C/C++ ecosystem.

To improve IDE integration and remove platform-specific build code,
I rewrote the program's makefile as a CMake project in my second year of robotics.
Compared to Makefiles, I found CMake to be much simpler to use and quickly iterate on.
It handled cross-compilation surprisingly well and made building with different compilers significantly easier.

# Features

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
