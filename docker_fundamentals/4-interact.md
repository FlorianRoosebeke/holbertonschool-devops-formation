# Task 4 — Talk to your container

The Flask application reads the `NAME` and `GREETING` environment variables. I passed new values when starting the container to change its message.

## Commands and observations

I built the image and started the container with `-e`:

```bash
docker build -t greeting-app .
docker run -d --name greeting-test -p 8000:8000 \
  -e NAME=Florian -e GREETING=Salut greeting-app
```

The image built successfully, and the container started.

I checked the variables from inside the running container:

```bash
docker exec greeting-test printenv NAME
# Florian

docker exec greeting-test printenv GREETING
# Salut
```

I checked the application's response:

```bash
curl http://localhost:8000/
# Salut Florian, depuis un container !
```

Finally, I inspected the container:

```bash
docker inspect greeting-test
```

The inspection showed `"Status": "running"` and `"Running": true`. Its `Config.Env` included `NAME=Florian` and `GREETING=Salut`.

The values passed with `-e` replaced the Dockerfile defaults, and the application's message used those values.
