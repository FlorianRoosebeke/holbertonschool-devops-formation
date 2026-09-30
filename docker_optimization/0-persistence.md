# Task 0: Persisting PostgreSQL Data

## Objective

Demonstrate that data stored in a Docker named volume survives the removal and recreation of a PostgreSQL container.

## Commands executed

### Create the volume and first container

```bash
docker volume create task0_pgdata

docker run -d \
  --name task0-postgres \
  -e POSTGRES_PASSWORD=demo_password \
  -v task0_pgdata:/var/lib/postgresql \
  postgres:18

docker exec task0-postgres pg_isready -U postgres
```

### Create and populate a table

```bash
docker exec task0-postgres \
  psql -U postgres -c "CREATE TABLE preuve_persistance (message TEXT);"

docker exec task0-postgres \
  psql -U postgres -c "INSERT INTO preuve_persistance VALUES ('La donnee persiste');"

docker exec task0-postgres \
  psql -U postgres -c "SELECT * FROM preuve_persistance;"
```

**Actual output before removing the container:**

```text
PASTE YOUR ACTUAL SELECT OUTPUT HERE
```

### Remove and recreate the container

```bash
docker rm -f task0-postgres

docker run -d \
  --name task0-postgres-recree \
  -e POSTGRES_PASSWORD=demo_password \
  -v task0_pgdata:/var/lib/postgresql \
  postgres:18

docker exec task0-postgres-recree pg_isready -U postgres

docker exec task0-postgres-recree \
  psql -U postgres -c "SELECT * FROM preuve_persistance;"
```

**Actual output after recreating the container:**

```text
PASTE YOUR ACTUAL SELECT OUTPUT HERE
```

## Observations

Replace this paragraph with what you observed. State whether the row created in the first container was still present in the new container. The first container was removed, while the named volume `task0_pgdata` was attached to both containers. This test uses a Docker named volume, not a bind mount.
