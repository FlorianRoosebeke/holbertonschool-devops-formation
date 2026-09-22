# Full Stack

This Docker Compose stack includes:

- Nginx reverse proxy
- Node.js API
- PostgreSQL database
- Redis cache

## Run

```bash
docker compose up --build
```

Open: http://localhost:8080

The proxy routes external traffic to the API.

The API connects to Redis using the service name `redis`.

## Stop

```bash
docker compose down
```