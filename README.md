# Projet sur la virtualisation en utilisant Docker (INFO0803)
## Auteurs
- **DIALLO Abdoulaye Djibril**
- **LECKOMBA Jude Luther**

## Introduction
Ce projet a pour but de mettre en place un environnement de virtualisation en utilisant Docker. Docker est un outil qui permet de créer, de déployer et de gérer des applications en utilisant des conteneurs. Un conteneur est une unité logicielle qui contient une application et toutes ses dépendances. Docker permet de créer des conteneurs légers et portables qui fonctionnent de la même manière sur n'importe quel environnement.

## Objectifs
Les objectifs de ce projet sont les suivants :
- Créer un conteneur Docker à partir d'une image existante mongo pour la base de données.
- Créer un conteneur Docker à partir d'une image existante node pour le serveur (API). Pour cela, il faut créer un fichier Dockerfile contenant les instructions nécessaires pour la créeation de ce conteneur.
- Créer un conteneur Docker à partir des images existantent nginx et node pour le serveur web. Pour cela, il faut créer un fichier Dockerfile contenant les instructions nécessaires pour la créeation de ce conteneur.

## Installation
Pour installer Docker, il suffit de suivre les instructions disponibles sur le site officiel de Docker : [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

## Utilisation
Pour utiliser ce projet, il suffit de suivre les instructions suivantes :
1. Cloner le projet en utilisant la commande suivante :
```bash
git clone https://github.com/djibrilIbnSaid/virtualisation-avec-docker
```
2. Se placer dans le répertoire du projet en utilisant la commande suivante :
```bash
cd virtualisation-avec-docker
```
3. Construire les images des conteneurs en utilisant la commande suivante :
```bash
docker-compose build
```
4. Lancer les conteneurs en utilisant la commande suivante :
```bash
docker-compose up
```
5. Accéder à l'application en utilisant l'URL suivante : [http://localhost:4200](http://localhost:4200)

## Conclusion
Ce projet a permis de mettre en place un environnement de virtualisation en utilisant Docker. Docker est un outil très puissant qui permet de créer, de déployer et de gérer des applications en utilisant des conteneurs. Il permet de créer des conteneurs légers et portables qui fonctionnent de la même manière sur n'importe quel environnement.

## Références
- [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)
- [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)
- [https://hub.docker.com/_/mongo](https://hub.docker.com/_/mongo)
- [https://hub.docker.com/_/node](https://hub.docker.com/_/node)
- [https://hub.docker.com/_/nginx](https://hub.docker.com/_/nginx)
- [https://angular.io/docs](https://angular.io/docs)
- [https://expressjs.com/en/guide/routing.html](https://expressjs.com/en/guide/routing.html)

## Sujet:
On souhaite mettre en place une solution WEB de gestion de protocole. La gestion de protocole
consiste à gérer une liste de contacts (personnes), avec leurs informations (nom, prénom,
adresse …), en leur associant des propriétés (entreprise, administration, poste occupé …). Le but
est dans le cadre d’organisation d’évènements, d’être capable d’extraire une sous liste de ces
contacts, à partir de critères définis.

Pour cela vous devez développer une architecture Docker constituée de:
- Un serveur WEB qui assurera la visualisation;
- Un serveur WEB qui assurera la mise en place d’une API WEB assurant des requêtes aux données et la mise en forme des résultats;
- Une base de données stockant l’ensemble des personnes.

Vous êtes libre des technologies / langages utilisés.

Les fonctionnalités à développer sont les suivantes :
- Ajout d’un contact;
- Suppression d’un contact;
- Affichage de tous les contacts;
- Sélection d’un contact à partir de critères;