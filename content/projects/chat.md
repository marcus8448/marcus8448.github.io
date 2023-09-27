---
title: "Chat"
date: 2023-06-12T00:00:00-00:00
icon: /image/chat.png
Description: |
  An encrypted, ephemeral instant messaging app.
repository: https://github.com/marcus8448/Chat
heroType: is-light
languages:
  - java
  - gradle
---

# About

This was a fun project that I made in approximately 2 weeks to gain more experience using JavaFX.
This time I avoided FXML and defined the GUI in pure Java.
It uses a multi-project Gradle build to enable code sharing between the client and server applications,
while keeping them as separate binaries.

I found it interesting to compare the strengths and weaknesses of different cryptographic ciphers for this project.
Originally, everything was based on RSA keys,
until I realized the max block size was too small (and thereby moved to use AES session keys).

# Features

* Channel support
* Notification support
* Support for both text and image messages
* Messages are encrypted over the network
  * After an initial handshake with RSA keys, a session AES key is generated and by the server
* The server saves no user information
  * User accounts are based on RSA keys
  * Server just acts as a router
* Messages are not stored
  * Only those watching a channel will see messages that are sent
  * Upon closing the client, all history is forgotten
* User account data stored on the client is encrypted with a password
  * Uses PBKDF2

### Disclaimer

I cannot guarantee the security or privacy of messages sent using this application/protocol. Use at your own risk!
