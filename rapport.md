# Rapport d'analyse SonarQube — TP Qualité, Sécurité et Maintenabilité du Code

## Contexte

Ce projet simule une application Node.js héritée, contenant des problèmes de qualité logicielle :
- Bugs potentiels
- Failles de sécurité (SQL injection, mot de passe en clair)
- Mauvaises pratiques de codage (code dupliqué, fonctions longues)

L’objectif était d’identifier, corriger et analyser ces anomalies à l’aide de **SonarQube**, puis d’automatiser l’analyse via **GitHub Actions** et **SonarCloud**.

---

## Tableau des anomalies détectées

| Fichier              | Type             | Gravité | Description                                                                 | Correction apportée                                  |
|----------------------|------------------|---------|-----------------------------------------------------------------------------|-------------------------------------------------------|
| userController.js    | Bug              | Majeure | `if (a = b)` au lieu de `==` ou `===`                                       | Utilisation correcte de l'opérateur `===`            |
| userController.js    | Sécurité         | Critique| Construction de requête SQL concaténée → risque de **SQL Injection**       | Remplacée par une requête préparée (paramétrée)      |
| userController.js    | Code Smell       | Moyenne | Code dupliqué pour des opérations arithmétiques simples                     | Suppression et factorisation dans une fonction        |
| auth.js              | Sécurité         | Critique| Mot de passe stocké en clair                                                | Externalisé dans une variable d’environnement + hash |
| auth.js              | Sécurité         | Majeure | Filtrage XSS naïf via `replace()`                                           | Utilisation d'une vraie bibliothèque de sanitization |
| utils.js             | Sécurité         | Critique| Configuration MySQL avec mot de passe en clair                             | Variables sensibles déplacées dans `.env`            |

---

## Actions de correction

- Refactorisation des longues fonctions (`updateUser`) en fonctions plus petites et compréhensibles
- Sécurisation des inputs utilisateur avec des **requêtes SQL préparées** (MySQL)
- Suppression des **mots de passe en dur**
- Nettoyage du code dupliqué
- Ajout d’un fichier `.env` pour les informations sensibles
- Ajout d’un `.gitignore` pour ne pas versionner `.env`

---

## Bonnes pratiques retenues

- Ne jamais faire confiance aux inputs utilisateur : toujours les valider ou les assainir.
- Éviter la duplication de code → privilégier l’extraction de fonctions réutilisables.
- Externaliser les secrets dans un fichier `.env` (avec `dotenv`)
- Utiliser SonarQube comme outil de revue automatique pour repérer des problèmes subtils
- Intégrer SonarCloud dans le pipeline CI/CD pour maintenir la qualité continue

---

## Conclusion

Le projet initial présentait des failles critiques. Après l’analyse SonarQube et refactoring, nous avons réduit :
- les bugs à **0**,
- les failles de sécurité à **0**,
- les code smells à **moins de 5**, avec une **maintenabilité A** sur SonarCloud.

Ce processus met en évidence la **valeur pédagogique et industrielle** de SonarQube dans le développement logiciel.
