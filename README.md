CRÉER UN SERVEUR NODE.JS

1) Créer un dossier projet
2) Créer un fichier backend
mkdir backend


3) Se déplacer dans le fichier backend
cd backend

5) Ajouter express et son initialisation
npm install express-generator
npx express-generator

6) Ajouter les dépendances
npm install nodemon sequelize cors pg pg-hstore dotenv jsonwebtoken bcryptjs cookie-parser

morgan? http-errors?

7) Modifier les routes
res.json
8)  Allumer le serveur et vérifier la requête sur postman
 npm run start
