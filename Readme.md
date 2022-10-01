# Welcome to the Quarkus Super Heroes
## My Setup :
- Docker Desktop 4.4.4 and WSL Ubuntu 20.04,Maven 3.8.6 and Java 17, NodeJs 16.17.1, NPM 8.15.0

## Install
```cmd
cd infrastructure
docker-compose build
docker-compose up -d
```

```cmd
cd ../extension-version
mvn clean install
```

```cmd
cd ../super-heroes
mvn clean install
```

## Run microservices
```cmd
cd rest-heroes
mvn quarkus:dev
```
[http://localhost:8083/](http://localhost:8083/api/heroes)

```cmd
cd ../rest-villains &&
mvn quarkus:dev
```
[http://localhost:8084/](http://localhost:8084/api/villains)

```cmd
cd ../rest-fights
mvn quarkus:dev
```
[http://localhost:8082/](http://localhost:8082/api/fights)

```cmd
cd ../ui-super-heroes
mvn quarkus:dev
```
[http://localhost:8080/](http://localhost:8080/)

```cmd
cd ../event-statistics
mvn quarkus:dev
```
[http://localhost:8085/](http://localhost:8085/)
