---
title: v5_cli
date: 2022-12-12T22:17:00-08:00
icon: /image/v5_cli.png
description: A re-implementation of [pros-cli](https://github.com/purduesigbots/pros-cli) in Rust, adding bluetooth upload support.
repository: https://github.com/marcus8448/v5_cli
languages:
  - rust
---

## About
After getting frustrated with [pros-cli](https://github.com/purduesigbots/pros-cli)
freezing my terminal (to submit a bug report) every time an error occurred, I decided to create my own implementation.
I chose to (re)write it in Rust mainly to gain experience with the language,
but also because I was already familiar with one of its CLI frameworks, [clap](https://clap.rs/).

Once I had made an app with about the same features as the original,
I left the project alone until I discovered that direct bluetooth connection to the VEX V5 brain was possible
(thanks to this [gist](https://gist.github.com/wireboy5/e41444a135d7643c92fc3b83aa69058b)) 
This led me to try and enable wireless code upload over bluetooth LE.
The project had to be re-architectured to have more robust error handling (due to packet loss) and to support multiple backends.

## Features
* Connect to V5 robot via usb or wirelessly via bluetooth
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
  * Allows for simultaneous interaction with standard i/o and the system i/o
