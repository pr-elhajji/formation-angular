# Lab 2: Typescript | Exercices

## Les objectifs pédagogiques

Après cette leçon, vous pourrez:

- Développer quelques fonctions de base de TypeScript.
- Créez des interfaces TypeScript et utilisez-les à partir des classes.
- Enraciner l’Orienté Objet avec Type Script 

## Requirements

- [Fork ce repo] (https://guides.github.com/activities/forking/).
- Clonez ce dépôt dans votre dossier de travail `~/code/labs` foler.
- Installez TypeScript sur votre ordinateur
  ```
  $ npm install -g typescript
  ```

## submission

Une fois terminé, exécutez les commandes suivantes:

```bash
$ git add .
$ git commit -m "done"
$ git push origin lab2-Typescript
```
Accédez à votre repo et créez un pull request  de votre branche lab2-Typescript  vers la branche lab2-Typescript  du repository d'origine.

In the pull request name, add your name and last names separated by a dash "-"

Dans le nom de pull request, ajoutez votre nom et votre prénom séparés par un tiret "-"

## Instructions

Il s'agit de créer une application typescript pour la gestion des cours en ligne.

Considérons une interfance `Personne`  ayant les attributs suivants :
- `Id` : un attribut privée de type nombre.
- `nom` : un attribut privée de type chaîne de caractères

0- définir cette interfance

Considérons une classe `Etudiant` implémentant l'interface Personne et qui a en plus les attributs suivants :
- notes : un attribut privée de type tableau de nombres

1)	Créez la classe `Etudiant` et définissez un constructeur avec deux paramètres.
2)	Définissez les `getters` et `setters` des deux attributs.
3)	Ecrivez la méthode `calculerMoyenne()` qui permet de retourner la moyenne de notes d'un étudiant.
4)	Ecrivez les méthodes `getMax()` et `getMin()` qui permettent de retourner respectivement les notes max et min d'un étudiant.

Considérons maintenant une classe appelée `Cours` ayant les attributs suivants :
- `Id` : un attribut privé de type number.
- `title` : un attribut privé de type string.
- `nbrJours` : un attribut privé de type number.
- `etudiants` : un tableau d'objets de type Etudiant.

5)	Créez la classe `Cours`, Définissez les getters et setters de ses attributs, et définissez-le
`constructeur Cours (id : number, title: string, nbrJours: number , etudiant: Etudiants[] optionnel ).`
6)	Ecrivez une méthode `calculerMoyenneCours()` qui retourne la moyenne d'un objet de type cours (la moyenne des moyennes des étudiants).
7)	Ecrivez une méthode `getIndexMax()` qui retourne l'indice de l’étudiant dans le tableau etudiants ayant la meilleure moyenne de le cours.
8)	Ecrivez une méthode `getNomMax()` qui affiche le nom du premier étudiant ayant la meilleure moyenne dans le cours.
9)	Ecrivez une méthode `getMoyenneParNom(nom: string)` qui affiche la moyenne du premier Etudiant dont le nom est passé en paramètre.

Considérons maintenant une classe appelée `activite` ayant les attributs suivants :
-	`Id` : un attribut privé de type number.
-	`title` : un attribut privé de type string.
-	`Description` : un attribut privé de type string.
-	`urlYoutube` : un attribut privé de type string.
-	`type` : un attribut préivé de type enum ( explorer, pratiquer, etendre}

10)	Créez la classe Activité, Définissez les getters et setters de ses attributs, et définissez-le
constructeur.

11)	Dans un fichier `main.ts`, testez toutes les méthodes réalisées dans les questions précédentes (créez par example trois objets étudiants et affectez les au même cours et faites appel aux quatre dernières méthodes que vous avez implémentées).

<!-- :::info -->
**Note**:
rappelez-vous que les fichiers `*.js` sont générés à chaque fois que nous enregistrons les fichiers TypeScript dans notre solution
<!-- ::: -->


Happy coding!

## Ressources supplémentaires

[Typescript Documentation](https://www.typescriptlang.org/docs/tutorial.html)
