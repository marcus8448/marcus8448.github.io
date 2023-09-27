---
title: "v5_cli"
date: 2022-12-12T22:17:00-08:00
Icon: /image/v5_cli.png
heroType: is-light
Description: |
  A re-implementation of [pros-cli](https://github.com/purduesigbots/pros-cli) in Rust, adding true wireless (bluetooth) upload support.
repository: https://github.com/marcus8448/v5_cli
languages:
  - rust
---

After getting frustrated with [pros-cli](https://github.com/purduesigbots/pros-cli)
freezing my terminal every time an error occurred, I decided to create my own implementation.
I chose two (re)write it in Rust mainly to gain experience with the language,
but also because I knew it had good tooling,
and I was already familiar with one of its CLI frameworks, [clap](https://clap.rs/).

Once I had made an app with about the same features as the original,
I left the project alone for a while...
Until I discovered that [direct bluetooth connection](https://gist.github.com/wireboy5/e41444a135d7643c92fc3b83aa69058b)
to the VEX V5 brain was possible.
This led me to try and enable wireless code upload over bluetooth LE.
Utilizing bluetooth was more difficult than I originally anticipated as bluetooth APIs tend to be asynchronous
and bluetooth connections are significantly less reliable than wired ones.
This required me to rearchitect the project to use asynchronous Rust,
and account for packet loss and/or corruption in-transit.


# Features

* Connect to V5 robot via usb or wirelessly via bluetooth
* Upload binaries
  * Supports PROS style hot/cold linking
* Manage robot filesystem
  * Installed programs, metadata
* Update robot name, team number
* Connect to running program's standard input/output for debugging

# Links
[GitHub](https://github.com/marcus8448/v5_cli)
