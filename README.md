# Lab 3: Angular | Component

## Les objectifs pédagogiques
Après cette leçon, vous pourrez:

- Créer une application angulaire statique avec Angular CLI.
- créer une application angulaire avec un composant.
- Créer une application angulaire avec deux composants imbriqués.
- Créer une application angulaire à l'aide d'itérateurs imbriqués.

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
$ git push origin lab3-component-1
```
Accédez à votre repo et créez un pull request  de votre branche `lab3-component-1`  vers la branche `lab3-component-1`  du repository d'origine.

In the pull request name, add your name and last names separated by a dash "-"


Dans le nom de pull request, ajoutez votre nom et votre prénom séparés par un tiret "-"

## Introduction
Dans ce lab, nous allons travailler avec Angular pour la première fois. Le but ici est de travailler sur un petit projet où vous pouvez mettre en pratique les concepts que nous avons appris jusqu'à présent. Il s'agit de créer un article de blog avec des commentaires. Nous allons créer deux composants différents:

- Le composant `AppComponent`  contiendra l'article, composé d'un` title`, d'une `image` et d'une` description`.
- Le composant `CommentsComponent`, qui contiendra plusieurs commentaires .

### Starter Code
Ce lab est composé de trois itérations. À chaque itération, nous ajoutant une fonctionalité ou un composant à notre projet. Nous vous fournissons des 
des mockup version desktop. Votre résultat final devrait être très proche de cette maquette (Vous pouvez ajouter d'autres options améliorants le rendu de vos pages).

# Itération n°1:  Le composant `MainComponent` (Voir `Mockup 1`)
1) Créer le projet angularnommé `blog`.
2) Créer le composant `MainComponent` qui contiendra l'article, composé d'un` title`, d'une `image` et d'une` description`.

> La première chose que vous devrez faire est de générer le projet avec «Angular CLI».

# Itération n°2
1) Créer Le composant `CommentsComponent`, qui contiendra plusieurs commentaires (n'hésitez pas à ajouter autant de commentaires que vous le souhaitez).
2) Ajouter ce component au composant  `MainComponent`.
3) Au bas des commentaires, nous ajouterons un formulaire de commentaire pour ajouter de la réalité à notre article. Nous ne pouvons pas avoir de commentaires sans formulaire! (Ne vous inquiétez pas, cela n'a pas besoin de fonctionner. Nous y reviendrons plus tard).

# Itération n°3
Ajoutez des styles à la page pour donner un peu de style à votre blog!
> Ajouter[Bootstrap] (https://www.ganatan.com/tutorials/bootstrap-avec-angular)  (optionel à ce niveau).  
