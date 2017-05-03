# TeaCuP Helpers

The purpose of this library is to provide the most basic TCP server and client that can be used to test TCP implementations.

## TCP Server

The TCP server runs on port 3000 and logs any messages sent to the console and writing to the socket to acknowledge receipt and allow testing of bi-directional TCP support.

How to run the server:

```
$ node tcp_server.js
[LOG] Listening at port 3000
```

Once the server is running, you should see any messages sent to the server at port 3000 logged in the console.

## TCP Client

The TCP client sends a message to port 3000, waits for data from the server which is logs, and then closes the connection.

To run the client:

```
$ node tcp_client.js
[LOG] Connected
[LOG] Recieved: Got it
[LOG] Connection closed
```
