CRÉER UN SERVEUR NODE.JS

| | Etapes | Commandes |
|---|---|-----|
| 1 | Créer un dossier projet | mkdir NomDuDossier |
| 2 | Créer un fichier backend | mkdir backend |
| 3 | Se déplacer dans le fichier backend | cd backend |
| 4 | Installer express | npm install express-generator |
| 5 | Initialiser express | npx express-generator |
| 6 | Installer les dépendances | npm install nodemon sequelize cors pg pg-hstore dotenv jsonwebtoken bcryptjs cookie-parser morgan? http-errors? |
| 7 | Modifier les routes | res.json({message: "Vous êtes sur la route de ... !"}); |
| 8 | Allumer le serveur | npm run start |
| 9 | Créer un fichier .gitignore et ajouter node_modules | Valeur de la cellule 6 |
| 10 | Vérifier les requêtes sur postman | Directement sur Postman |
