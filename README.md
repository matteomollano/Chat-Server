# Chat-Server
This project is a Chat Server created in JavaScript and Node.js

src/client.js:
- Allows the user to establish a connection to the server
- Upon establishing a connection, the user will be prompted to enter a username
- The client can send an unlimited number of messages, which are sent to the server as UTF-8-encoded strings

src/server.js:
- This is the host server for the various chat clients
- Displays a welcome message whenever a new client connects to the server
- Forwards clients' messages to all clients in the server

The server.js file is hosted using Microsoft Azure
