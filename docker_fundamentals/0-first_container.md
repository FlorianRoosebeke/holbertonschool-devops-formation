# Mes commandes 

## 1 - Télécharger et lancer Nginx

docker run -d --name my-nginx -p 8080:80 nginx
bed03b09d6746fef38e53f4e66d66ca947dec5029dc5d78e34eb71f37c233c19

## 2 - Tester le serveur

 [~/holbertonschool-devops-formation/docker_fundamentals]
 acra   main  curl http://localhost:8080               
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
html { color-scheme: light dark; }
body { width: 35em; margin: 0 auto;
font-family: Tahoma, Verdana, Arial, sans-serif; }
</style>
</head>
<body>
<h1>Welcome to nginx!</h1>
<p>If you see this page, nginx is successfully installed and working.
Further configuration is required for the web server, reverse proxy, 
API gateway, load balancer, content cache, or other features.</p>

<p>For online documentation and support please refer to
<a href="https://nginx.org/">nginx.org</a>.<br/>
To engage with the community please visit
<a href="https://community.nginx.org/">community.nginx.org</a>.<br/>
For enterprise grade support, professional services, additional 
security features and capabilities please refer to
<a href="https://f5.com/nginx">f5.com/nginx</a>.</p>

<p><em>Thank you for using nginx.</em></p>
</body>
</html>

## 3 - Vérifier le conteneur

 [~/holbertonschool-devops-formation/docker_fundamentals]
 acra   main  docker ps                                     
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                                     NAMES
bed03b09d674   nginx     "/docker-entrypoint.…"   25 seconds ago   Up 24 seconds   0.0.0.0:8080->80/tcp, [::]:8080->80/tcp   my-nginx

## 4 - Lire les logs

 [~/holbertonschool-devops-formation/docker_fundamentals]
 acra   main  docker logs my-nginx                                                                                          
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
2026/09/18 08:59:29 [notice] 1#1: using the "epoll" event method
2026/09/18 08:59:29 [notice] 1#1: nginx/1.31.5
2026/09/18 08:59:29 [notice] 1#1: built by gcc 14.2.0 (Debian 14.2.0-19) 
2026/09/18 08:59:29 [notice] 1#1: OS: Linux 6.6.87.2-microsoft-standard-WSL2
2026/09/18 08:59:29 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1024:1048576
2026/09/18 08:59:29 [notice] 1#1: start worker processes
2026/09/18 08:59:29 [notice] 1#1: start worker process 29
2026/09/18 08:59:29 [notice] 1#1: start worker process 30
2026/09/18 08:59:29 [notice] 1#1: start worker process 31
2026/09/18 08:59:29 [notice] 1#1: start worker process 32
2026/09/18 08:59:29 [notice] 1#1: start worker process 33
2026/09/18 08:59:29 [notice] 1#1: start worker process 34
2026/09/18 08:59:29 [notice] 1#1: start worker process 35
2026/09/18 08:59:29 [notice] 1#1: start worker process 36
2026/09/18 08:59:29 [notice] 1#1: start worker process 37
2026/09/18 08:59:29 [notice] 1#1: start worker process 38
2026/09/18 08:59:29 [notice] 1#1: start worker process 39
2026/09/18 08:59:29 [notice] 1#1: start worker process 40
172.17.0.1 - - [18/Sep/2026:08:59:49 +0000] "GET / HTTP/1.1" 200 896 "-" "curl/8.5.0" "-"


## 5 - Entrer dans le conteneur

 [~/holbertonschool-devops-formation/docker_fundamentals]
 acra   main  docker exec -it my-nginx sh                      
# ls -la
total 72
drwxr-xr-x   1 root root 4096 Sep 18 08:59 .
drwxr-xr-x   1 root root 4096 Sep 18 08:59 ..
-rwxr-xr-x   1 root root    0 Sep 18 08:59 .dockerenv
lrwxrwxrwx   1 root root    7 Jul  4 09:05 bin -> usr/bin
drwxr-xr-x   2 root root 4096 Jul  4 09:05 boot
drwxr-xr-x   5 root root  340 Sep 18 08:59 dev
drwxr-xr-x   1 root root 4096 Sep  2 21:04 docker-entrypoint.d
-rwxr-xr-x   1 root root 1620 Sep  2 21:04 docker-entrypoint.sh
drwxr-xr-x   1 root root 4096 Sep 18 08:59 etc
drwxr-xr-x   2 root root 4096 Jul  4 09:05 home
lrwxrwxrwx   1 root root    7 Jul  4 09:05 lib -> usr/lib
lrwxrwxrwx   1 root root    9 Jul  4 09:05 lib64 -> usr/lib64
drwxr-xr-x   2 root root 4096 Aug 24 00:00 media
drwxr-xr-x   2 root root 4096 Aug 24 00:00 mnt
drwxr-xr-x   2 root root 4096 Aug 24 00:00 opt
dr-xr-xr-x 310 root root    0 Sep 18 08:59 proc
drwx------   2 root root 4096 Aug 24 00:00 root
drwxr-xr-x   1 root root 4096 Sep 18 08:59 run
lrwxrwxrwx   1 root root    8 Jul  4 09:05 sbin -> usr/sbin
drwxr-xr-x   2 root root 4096 Aug 24 00:00 srv
dr-xr-xr-x  13 root root    0 Sep 18 08:59 sys
drwxrwxrwt   2 root root 4096 Aug 24 00:00 tmp
drwxr-xr-x   1 root root 4096 Aug 24 00:00 usr
drwxr-xr-x   1 root root 4096 Aug 24 00:00 var
# pwd
/
# ls -la /usr/share/nginx/html
total 16
drwxr-xr-x 2 root root 4096 Sep  2 21:04 .
drwxr-xr-x 3 root root 4096 Sep  2 21:04 ..
-rw-r--r-- 1 root root  497 Sep  2 11:17 50x.html
-rw-r--r-- 1 root root  896 Sep  2 11:17 index.html
# exit

## 6 - Nettoyer

 [~/holbertonschool-devops-formation/docker_fundamentals]
 acra   main  docker stop my-nginx
docker rm my-nginx
my-nginx
my-nginx

# Observations personnelles : 

- Une image est le modèle immuable téléchargé (nginx) ; le conteneur est une instance en cours d’exécution de cette image.

- -p 8080:80 relie le port 8080 de ma machine au port 80 du conteneur.

- Les logs sont consultables avec docker logs, sans entrer dans le conteneur ; docker exec permet d’y lancer un shell.               
