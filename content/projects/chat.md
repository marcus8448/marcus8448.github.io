---
title: Chat
subtitle: An encrypted, ephemeral instant messaging app.
date: 2023-06-12T12:00:00-00:00
timeframe: 2023
icon: /image/chat.png
description: |
  An encrypted, ephemeral instant messaging app.
repository: https://github.com/marcus8448/Chat
tools:
  - Java
  - Gradle
---

This was a project that I made in approximately 2 weeks to gain more experience with networking and JavaFX.
It uses a multi-project Gradle build to enable code sharing between the client and server applications,
while keeping them as separate binaries.

I found it interesting to compare the strengths and weaknesses of different cryptographic ciphers for this project.
RSA keys are used for client/server identities,
while AES keys are used to encrypt the session after the initial handshake.

## Features
* Channel support
* System tray notification support
* Support for sending both text and images
* Messages are encrypted over the network (however, they are **not** end-to-end encrypted)
* The server saves no user information
  * User accounts are based on RSA keys
  * Server just acts as a router
* Messages are not stored
  * Only those watching a channel will see messages that are sent
  * Upon closing the client, all history is forgotten
* User account data stored on the client is encrypted with a password using PBKDF2

## Security
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
While I hope the application is secure, I cannot guarantee the security of messages sent.
Use at your own risk!
