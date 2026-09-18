# 1 — Premier Dockerfile

Test application web Flask conteneurisée sur le port **8000**.

## Contenu

| Fichier | Rôle |
|---|---|
| `app.py` | Application Flask (2 routes) |
| `requirements.txt` | Dépendances installées dans l'image |
| `Dockerfile` | Recette de construction de l'image |
| `.dockerignore` | Exclut `venv/` et les caches du contexte de build |

## Construire l'image

Depuis ce dossier (`1-first_image/`) :

```bash
docker build -t first-image:v1 .
```

Vérifier que l'image existe :

```bash
docker images first-image
```

## Lancer le conteneur

```bash
docker run -d --name web -p 8000:8000 first-image:v1
```

- `-d` : en arrière-plan
- `--name web` : nom du conteneur
- `-p 8000:8000` : publie le port `8000` de l'hôte vers le port `8000` du conteneur

Vérifier qu'il tourne :

```bash
docker ps
```

## Vérifier la réponse

```bash
curl http://localhost:8000/
# -> Bonjour depuis un container !

curl http://localhost:8000/hello/Florian
# -> Salut Florian !
```

## Arrêter et nettoyer

```bash
docker stop web
docker rm web
```

## Dépannage

```bash
docker logs web    # sortie de l'application
docker ps -a       # état du conteneur (tourne-t-il encore ?)
```
