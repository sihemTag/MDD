# MDD
Ce projet est une applciation web conçue avec Java/Springboot et Angular, qui vise à créer un réseau social dédié aux développeurs, centré sur le partage d’articles et les interactions communautaires autour de thématiques techniques.

## Technologies utilisées
  - Angular 18
  - JDK 17
  - Postgresql
  - Spring Boot 3.4.2

## Préparation de la base de données
Lancer le script pour créer les tables en base de données (le script se trouve dans le dossier \front\ressources\script.sql)
Modifier les informations d'authentification à la bdd dans le `application.properties`
- username
- password
- db url

## Guide d'installation
- Cloner ce projet
- Lancer la backend avec `mvn springboot:run`
- Installer les modules necéssaires avec la commande `npm install` pour le front
- Lancer le front avec `ng serve`
- Aller sur localhost:4200

## Swagger
Aller sur l'url : http://localhost:8080/swagger-ui/index.html#/
