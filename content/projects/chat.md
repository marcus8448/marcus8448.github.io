---
title: "Chat"
date: 2023-06-12T00:00:00-00:00
icon: /image/chat.png
Description: |
  An encrypted, ephemeral instant messaging app.
repository: https://github.com/marcus8448/Chat
heroType: has-background-light-soft
languages:
  - java
  - gradle
---

# About

This was a project that I made in approximately 2 weeks to gain more experience using JavaFX.
This time I avoided FXML and defined the GUI in pure Java.
It uses a multi-project Gradle build to enable code sharing between the client and server applications,
while keeping them as separate binaries.

I found it interesting to compare the strengths and weaknesses of different cryptographic ciphers for this project.
Originally, everything was based on RSA keys,
until I realized the max block size could not support large messages (and thereby moved to use AES session keys).

# Features

* Channel support
* System tray notification support
* Support for sending both text and images
* Messages are encrypted over the network (however, they are not end-to-end encrypted)
* The server saves no user information
  * User accounts are based on RSA keys
  * Server just acts as a router
* Messages are not stored
  * Only those watching a channel will see messages that are sent
  * Upon closing the client, all history is forgotten
* User account data stored on the client is encrypted with a password using PBKDF2

# Security

### Initial Handshake

Upon connecting to a server, the client and server exchange public RSA keys.
If the server's RSA key has changed,
or the client has never connected to the server before,
the client will ask the user if they trust the server's key.

The server then sends a session AES key, encrypted with the client's public key.
This key is used to encrypt all future messages sent between the client and server.

### Message Signatures

All messages are signed with the sender's RSA private key.
Keys can be marked as 'trusted' in the client, and given nicknames.
If a message is signed by a key that is not trusted, the client will display a warning.

### Client-side Security

The client stores user account data in a file encrypted with a PBKDF2 key derived from the user's password.
This prevents the user's account data from being used if the file is stolen.
However, this also means that if the user forgets their password, they will lose all their account data.

### Disclaimer

I cannot guarantee the security or privacy of messages sent using this application/protocol. Use at your own risk!
