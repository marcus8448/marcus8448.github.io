---
title: v5_cli
date: 2022-12-12T22:17:00-08:00
icon: /image/v5_cli.png
timeframe: 2022-2024
description: A re-implementation of <a href="https://github.com/purduesigbots/pros-cli" rel="nofollow">pros-cli</a> in Rust, adding bluetooth upload support.
repository: https://github.com/marcus8448/v5_cli
tools:
  - Rust
---

A rewrite of [pros-cli](https://github.com/purduesigbots/pros-cli) in Rust.
Has largely the same features as the original, with the added feature of direct wireless robot communication and code upload over Bluetooth.

## Features
* Connect to V5 robot via usb or wirelessly via Bluetooth
  * Significantly better throughput compared to VEXnet controller connections. 
* Upload binaries
  * Supports PROS style hot/cold linking
* Manage robot filesystem
  * Installed programs, metadata
* Update robot name, team number
* Connect to running program's standard input/output for debugging
* List connected V5 devices
* Keep robot connection alive with a daemon
  * Automatically reconnects if connection is lost
  * Allows for simultaneous communication with user/program and the system
