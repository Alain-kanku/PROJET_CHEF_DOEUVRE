//importer le package HTTP pour l'utilisation de verbe
const http = require('http');

//importer app.js
const app = require('./app');

//installation du package qui permet dutiliser les variables denvironnement dans le fichier .env
const dotenv = require('dotenv').config()
//paramettra du port avec methode app.set de express
app.set("port",process.env.PORT);

/*la methode createServer() prend en parametre la fonction qui sera appelé a chaque requete recue
par le serveur, ici les fonction seront dans app.js */
const server = http.createServer(app);

//le server ecoute les requete sur le port 3000
server.listen(process.env.PORT)