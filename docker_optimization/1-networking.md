# Task 1: Container Networking

## Objective

Demonstrate that two containers on a user-defined Docker bridge network can communicate using a container name instead of a hard-coded IP address.

## Commands

Create a user-defined bridge network:

```bash
docker network create --driver bridge task1-network
```

Start a web server on that network:

```bash
docker run -d --name task1-web --network task1-network nginx:alpine
```

Start a client container on the same network:

```bash
docker run -d --name task1-client --network task1-network alpine:3.20 sleep infinity
```

Send an HTTP request from the client to the web server **by container name**:

```bash
docker exec task1-client wget -qO- http://task1-web
```

Inspect the network and its connected containers:

```bash
docker network inspect task1-network
```

## Observed output

Paste the actual output of the `wget` command here (a few representative HTML lines are enough):

```text
PASTE YOUR ACTUAL WGET OUTPUT HERE
```

If you used `docker network inspect`, optionally record the container names shown in its output:

```text
PASTE THE RELEVANT LINES FROM YOUR ACTUAL INSPECT OUTPUT HERE
```

## Explanation

Both containers are attached to the user-defined `task1-network` bridge network. In the URL `http://task1-web`, `task1-web` refers to the web container by name, not by an IP address. Docker resolves this name on the shared network, allowing the client to reach the nginx server without a hard-coded IP address.

After replacing the placeholders, record whether the HTTP request succeeded and what you observed. Do not submit invented terminal output.
