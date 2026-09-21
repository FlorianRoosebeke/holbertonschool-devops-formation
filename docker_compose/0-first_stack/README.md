# 0-first_stack

Un seul `compose.yaml` décrit trois services lancés ensemble :

| Service | Image | Rôle |
|---------|-------|------|
| `web` | `nginx:alpine` | sert la page et relaie `/api` vers `api` — publié sur le port **8080** |
| `api` | `node:22-alpine` (build `./api`) | serveur HTTP Node qui interroge la base |
| `db` | `postgres:16-alpine` | base de données PostgreSQL |

## Démarrer

```bash
docker compose up -d --build
docker compose ps
```

L'application répond sur <http://localhost:8080> : le bouton de la page appelle
l'API, qui interroge la base et renvoie son heure.

Test en ligne de commande :

```bash
curl localhost:8080          # la page web
curl localhost:8080/api      # API ok, la base repond : ...
```

## Arrêter

```bash
docker compose down
```
