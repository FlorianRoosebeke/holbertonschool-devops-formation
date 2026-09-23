# 1-healthchecks

This stack contains:
- a web front served by Nginx
- a Node.js API
- a PostgreSQL database

## Start

```bash
docker compose up --build
```

## Stop

```bash
docker compose down
```

## Startup order

The database service defines a healthcheck with `pg_isready`.

The API service depends on the database with `condition: service_healthy`.

This ensures that the API waits for the database to become healthy before starting.

When the stack starts, the logs show that PostgreSQL becomes ready before the API starts.

## Logs

admin@VPC-INFO-DEV:~/docker_compose/1-healthchecks$ docker compose up --build
[+] Building 1.8s (12/12) FINISHED                                                                                                                                              
 => [internal] load local bake definitions                                                                                                                                 0.0s
 => => reading from stdin 545B                                                                                                                                             0.0s
 => [internal] load build definition from Dockerfile                                                                                                                       0.0s
 => => transferring dockerfile: 149B                                                                                                                                       0.0s
 => [internal] load metadata for docker.io/library/node:22-alpine                                                                                                          0.6s
 => [internal] load .dockerignore                                                                                                                                          0.0s
 => => transferring context: 2B                                                                                                                                            0.0s
 => [1/5] FROM docker.io/library/node:22-alpine@sha256:b6f26b36c8ff49624cfdac716b8ea1138d606df02586a77d364bb5536a634f85                                                    0.1s
 => => resolve docker.io/library/node:22-alpine@sha256:b6f26b36c8ff49624cfdac716b8ea1138d606df02586a77d364bb5536a634f85                                                    0.1s
 => [internal] load build context                                                                                                                                          0.0s
 => => transferring context: 62B                                                                                                                                           0.0s
 => CACHED [2/5] WORKDIR /app                                                                                                                                              0.0s
 => CACHED [3/5] COPY package.json .                                                                                                                                       0.0s
 => CACHED [4/5] RUN npm install                                                                                                                                           0.0s
 => CACHED [5/5] COPY server.js .                                                                                                                                          0.0s
 => exporting to image                                                                                                                                                     0.4s
 => => exporting layers                                                                                                                                                    0.0s
 => => exporting manifest sha256:efeb306a17be23d7a954ff931866d32474b9c866e2230d90d7e6160c52d6bf27                                                                          0.0s
 => => exporting config sha256:245f6634cdc4b0008f80c97098499a9b9ffd7e8fa340f81ffcf8bd823272d4e7                                                                            0.0s
 => => exporting attestation manifest sha256:895791c76bd106eb079dc7fa0c7c7a37b5513169e0a92478ea6bb36b1ca568e4                                                              0.1s
 => => exporting manifest list sha256:06df259bb840122f6d1a87f1d887356e90bd9b51eedbc024e03d45554b646444                                                                     0.0s
 => => naming to docker.io/library/1-healthchecks-api:latest                                                                                                               0.0s
 => => unpacking to docker.io/library/1-healthchecks-api:latest                                                                                                            0.0s
 => resolving provenance for metadata file                                                                                                                                 0.0s
[+] Running 2/2
 ✔ 1-healthchecks-api              Built                                                                                                                                   0.0s 
 ✔ Container 1-healthchecks-api-1  Recreated                                                                                                                               0.7s 
Attaching to api-1, db-1, web-1
db-1  | 
db-1  | PostgreSQL Database directory appears to contain a database; Skipping initialization
db-1  | 
db-1  | 2026-09-22 12:44:37.881 UTC [1] LOG:  starting PostgreSQL 16.15 on x86_64-pc-linux-musl, compiled by gcc (Alpine 15.2.0) 15.2.0, 64-bit
db-1  | 2026-09-22 12:44:37.885 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
db-1  | 2026-09-22 12:44:37.896 UTC [1] LOG:  listening on IPv6 address "::", port 5432
db-1  | 2026-09-22 12:44:37.912 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
db-1  | 2026-09-22 12:44:37.930 UTC [30] LOG:  database system was shut down at 2026-09-22 12:44:09 UTC
db-1  | 2026-09-22 12:44:37.946 UTC [1] LOG:  database system is ready to accept connections
api-1  | API sur le port 3000
web-1  | /docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
web-1  | /docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
web-1  | /docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
web-1  | 10-listen-on-ipv6-by-default.sh: info: can not modify /etc/nginx/conf.d/default.conf (read-only file system?)
web-1  | /docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
web-1  | /docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
web-1  | /docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
web-1  | /docker-entrypoint.sh: Configuration complete; ready for start up
web-1  | 2026/09/22 12:44:44 [notice] 1#1: using the "epoll" event method
web-1  | 2026/09/22 12:44:44 [notice] 1#1: nginx/1.31.6
web-1  | 2026/09/22 12:44:44 [notice] 1#1: built by gcc 15.2.0 (Alpine 15.2.0) 
web-1  | 2026/09/22 12:44:44 [notice] 1#1: OS: Linux 6.6.87.2-microsoft-standard-WSL2
web-1  | 2026/09/22 12:44:44 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1048576:1048576
web-1  | 2026/09/22 12:44:44 [notice] 1#1: start worker processes
web-1  | 2026/09/22 12:44:44 [notice] 1#1: start worker process 21
web-1  | 2026/09/22 12:44:44 [notice] 1#1: start worker process 22
web-1  | 2026/09/22 12:44:44 [notice] 1#1: start worker process 23
web-1  | 2026/09/22 12:44:44 [notice] 1#1: start worker process 24
web-1  | 2026/09/22 12:44:44 [notice] 1#1: start worker process 25
web-1  | 2026/09/22 12:44:44 [notice] 1#1: start worker process 26
web-1  | 2026/09/22 12:44:44 [notice] 1#1: start worker process 27
web-1  | 2026/09/22 12:44:44 [notice] 1#1: start worker process 28
db-1   | 2026-09-22 12:49:37.988 UTC [28] LOG:  checkpoint starting: time
db-1   | 2026-09-22 12:49:40.964 UTC [28] LOG:  checkpoint complete: wrote 32 buffers (0.2%); 0 WAL file(s) added, 0 removed, 0 recycled; write=2.931 s, sync=0.015 s, total=2.976 s; sync files=7, longest=0.007 s, average=0.003 s; distance=136 kB, estimate=136 kB; lsn=0/1981068, redo lsn=0/1981030