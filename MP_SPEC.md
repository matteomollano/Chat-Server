# An MP-compliant client app:

1. MUST connect to an MP server over TCP (usual port # is 8888)
2. MUST send messages to the MP server over TCP as UTF-8-encoded strings
3. MAY receive messages over TCP as UTF-8-encoded strings
4. SHOULD include the username of its current user as the beginning of each message string

A common example of a client is an interactive chat app that sends messages typed by its user and displays messages as soon as they are received.

# AN MP-compliant server app:

1. MUST accept connections from MP clients over TCP (usual port # is 8888)
2. MUST forward messages from each connected client to none, some, or all connected clients