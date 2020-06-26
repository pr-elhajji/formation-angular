# Lab 3: Angular | Component

## Les objectifs pédagogiques
Après cette leçon, vous pourrez:

- Ajouter un service 
- récupération de data par un service

## Requirements

- [Fork ce repo] (https://guides.github.com/activities/forking/).
- Clonez ce dépôt dans votre dossier de travail `~/code/labs` foler.

## Livrables
Tous les fichiers avec le code nécessaire pour répondre aux exigences décrites ci-dessous.

## submission

Une fois terminé, exécutez les commandes suivantes:

```bash
$ git add .
$ git commit -m "done"
$ git push origin `Lab-4-services`
```
Accédez à votre repo et créez un pull request  de votre branche `Lab-4-services`  vers la branche `lab4-component-1`  du repository d'origine.

In the pull request name, add your name and last names separated by a dash "-"


Dans le nom de pull request, ajoutez votre nom et votre prénom séparés par un tiret "-"

## Introduction
Dans ce lab, nous allons travailler avec Angular pour la première fois. Le but ici est de travailler sur un petit projet où vous pouvez mettre en pratique les concepts que nous avons appris jusqu'à présent. Il s'agit de créer un article de blog avec des commentaires. Nous allons créer deux composants différents:

- Le composant `AppComponent`  contiendra l'article, composé d'un` title`, d'une `image` et d'une` description`.
- Le composant `CommentsComponent`, qui contiendra plusieurs commentaires .

### Starter Code
Ce lab est composé de trois itérations. À chaque itération, nous ajoutant une fonctionalité ou un composant à notre projet. Nous vous fournissons des 
des mockup version desktop. Votre résultat final devrait être très proche de cette maquette (Vous pouvez ajouter d'autres options améliorants le rendu de vos pages).

# Itération n°1:  Le service
1) récupérer le  le projet angular
2) Réaliser les tâche TODO pour que le service soit utiliser par tous les composants