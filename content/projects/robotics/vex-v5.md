+++
title = "VEX V5"
date = "2021-11-16T18:07:43-07:00"
icon = "/image/vex-v5.png"
timeframe = "2021-2024"
subtitle = "Robotics competition"
description = """
<a href="https://www.vexrobotics.com/v5/competition" rel="nofollow">Vex Robotics Competition</a> team captain and programmer.
"""
repository = "https://github.com/marcus8448/VexV5"
tools = [ "C++", "CMake" ]
+++

From 2021-2024, I competed in the VEX robotics competition.
Being an embedded C/C++ project, I learned lots about cross compilation and build systems.
On the robotics side, I learned some basic control theory to help the robot move smoothly to where we wanted it.
It was a fun challenge to work with robots with measurement error, physical restraints, and hardware issues on top of the usual software bugs. 

To improve IDE integration and remove platform-specific build code,
I converted the default project Makefile into a CMake project.

## Features
* Runtime sensor diagnostic information and debug tools on the screen (LVGL)
  * Runtime PID control testing and tuning
  * Real-time graphing of sensor information
  * Select autonomous run via the screen
* Uses a CMake project instead of Makefiles (compared to a typical [PROS](https://pros.cs.purdue.edu/) project)
  * Improved IDE support (can generate a Visual Studio project)
  * Simplified dependency management
  * Better support across operating systems
