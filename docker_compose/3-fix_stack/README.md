## Logs

docker compose up
[+] Running 15/15
 ✔ db Pulled                                                                                                                                        28.1s 
   ✔ f7c7d4dd80ba Pull complete                                                                                                                      0.3s 
   ✔ ba0e979d0818 Pull complete                                                                                                                     12.4s 
   ✔ 483fb6941c15 Pull complete                                                                                                                      0.4s 
   ✔ b1fdda8975a0 Pull complete                                                                                                                      0.5s 
   ✔ 6ad4758748c1 Pull complete                                                                                                                      0.3s 
   ✔ 359ae0fc975d Pull complete                                                                                                                      0.6s 
   ✔ 6b37362b3da7 Pull complete                                                                                                                     11.3s 
   ✔ ad29720ebbb9 Pull complete                                                                                                                     13.5s 
   ✔ 3a749597affc Pull complete                                                                                                                     13.8s 
   ✔ 4d848243a73e Pull complete                                                                                                                      0.6s 
   ✔ 106e7e3cf19a Pull complete                                                                                                                     12.2s 
   ✔ 749acf6dc637 Pull complete                                                                                                                      0.6s 
   ✔ 56d4d190ef07 Pull complete                                                                                                                     25.8s 
   ✔ 74156cf9f063 Pull complete                                                                                                                      0.8s 
[+] Running 5/5
 ✔ Network docker_compose_default    Created                                                                                                         0.5s 
 ✔ Container docker_compose-db-1     Created                                                                                                         1.2s 
 ✔ Container docker_compose-web-1    Created                                                                                                         1.2s 
 ✔ Container docker_compose-cache-1  Created                                                                                                         1.2s 
 ✔ Container docker_compose-api-1    Created                                                                                                         0.4s 
Attaching to api-1, cache-1, db-1, web-1
cache-1  | 1:C 23 Sep 2026 12:47:01.034 * oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
cache-1  | 1:C 23 Sep 2026 12:47:01.034 * Redis version=7.4.11, bits=64, commit=00000000, modified=0, pid=1, just started
cache-1  | 1:C 23 Sep 2026 12:47:01.034 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server/path/to/redis.conf
cache-1  | 1:M 23 Sep 2026 12:47:01.035 * monotonic clock: POSIX clock_gettime
cache-1  | 1:M 23 Sep 2026 12:47:01.039 * Running mode=standalone, port=6379.
db-1     | The files belonging to this database system will be owned by user "postgres".
db-1     | This user must also own the server process.
db-1     | 
db-1     | The database cluster will be initialized with locale "en_US.utf8".
db-1     | The default database encoding has accordingly been set to "UTF8".
db-1     | The default text search configuration will be set to "english".
db-1     | 
db-1     | Data page checksums are disabled.
cache-1  | 1:M 23 Sep 2026 12:47:01.060 * Server initialized


db-1     | 
cache-1  | 1:M 23 Sep 2026 12:47:01.065 * Ready to accept connections tcp
db-1     | fixing permissions on existing directory /var/lib/postgresql/data ... ok
db-1     | creating subdirectories ... ok
db-1     | selecting dynamic shared memory implementation ... posix
db-1     | selecting default max_connections ... 100
db-1     | selecting default shared_buffers ... 128MB
db-1     | selecting default time zone ... Etc/UTC
db-1     | creating configuration files ... ok
db-1     | running bootstrap script ... ok
api-1    | /docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
api-1    | /docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
api-1    | /docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
api-1    | 10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
Error response from daemon: failed to set up container networking: driver failed programming external connectivity on endpoint docker_compose-web-1 (afee9028182870ac7395157975cb4ef2b575d4d79444b756164c1367f6c3ae5a): Bind for 0.0.0.0:8080 failed: port is already allocated
admin@VPC-INFO-DEV:~/docker_compose$ fig   w Enable Watch