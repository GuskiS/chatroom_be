# Chatoom Backend

## Task

1. Sends received messages to all connected clients (no rooms).
2. If a client is silent for more than a certain (configurable) amount of time, it is
   disconnected; a message about the event (e.g. "John was disconnected due to
   inactivity") is sent to all connected clients.
3. If a client is disconnected, but not due to inactivity, a different message is sent (e.g.
   "John left the chat, connection lost" instead.)
4. Doesn't allow multiple active users with the same nickname.
5. Validates data received over the network.
6. Terminates gracefully upon receiving SIGINT or SIGTERM signals.
7. Provide readable logging solution

## Installation

```bash
# Install node dependencies
$ yarn install
```

```bash
# Create .env file based on .env.example
cp .env.example .env
```

## Running the app

```bash
$ yarn run dev
# or
$ yarn run start
```
