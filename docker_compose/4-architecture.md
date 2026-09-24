# Docker Compose Architecture

## Overview

This Docker Compose stack contains three services:

- `proxy`: Nginx reverse proxy exposed to the outside world.
- `api`: Application/API service that processes client requests.
- `db`: PostgreSQL database that stores persistent application data.

## Architecture diagram

```text
                 Internet / Client
                         |
                         | HTTP request
                         v
                 +---------------+
                 |     proxy     |
                 |     Nginx     |
                 +---------------+
                         |
                         | Internal Docker network
                         v
                 +---------------+
                 |      api      |
                 | Application   |
                 +---------------+
                         |
                         | PostgreSQL connection
                         v
                 +---------------+
                 |      db       |
                 |  PostgreSQL   |
                 +---------------+
                         |
                         v
              PostgreSQL named volume
                 (persistent data)
```

## Services

### proxy

The `proxy` service is the entry point of the application.

It exposes a port on the host machine and receives HTTP requests from users. It forwards these requests to the `api` service through the internal Docker network.

### api

The `api` service contains the application logic.

It receives requests from the proxy, processes them, communicates with the database when needed, and sends the response back to the proxy.

### db

The `db` service runs PostgreSQL.

It stores application data permanently. It is not exposed directly to the host machine because only the API needs to access it.

## Networks

The services communicate through Docker networks.

- The `frontend` network connects `proxy` and `api`. It allows the proxy to send requests to the application.
- The `backend` network connects `api` and `db`. It allows the API to access PostgreSQL.
- The database is isolated from the public network because it should not be directly accessible from outside the stack.

Docker Compose provides internal DNS. Therefore, services can connect to each other using their service names, such as `api` or `db`.

## Volumes

The PostgreSQL service uses a named Docker volume to persist its data.

Without this volume, all database data would be deleted when the database container is removed. With a named volume, the data remains available after containers are stopped or recreated.

Example:

```text
postgres_data -> /var/lib/postgresql/data
```

## Request flow

1. A client sends an HTTP request to the exposed port of the `proxy` service.
2. Nginx receives the request and forwards it to the `api` service through the `frontend` network.
3. The API processes the request.
4. If data is required, the API connects to the `db` service through the `backend` network.
5. PostgreSQL reads or writes data in its persistent volume.
6. The database sends its result back to the API.
7. The API creates an HTTP response and returns it to Nginx.
8. Nginx sends the final response to the client.
