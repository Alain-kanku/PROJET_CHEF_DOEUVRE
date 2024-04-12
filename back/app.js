//importer express
const express = require('express');

//importer morgan le journal(afficheur) de requetes HTTP
const morgan = require('morgan')

// importation du fichier db pour se connecter a la BDD mongo
//const mongoose = require("./db/db.js");

//importation des routes
//const userRoute= require("./routes/routeUser.js")
//const sujetRoute= require("./routes/routeSujets.js")

//récuperation de methode pour la creation de server
const app = express();

// //importation du package body-parser
const bodyParser = require('body-parser');


// //middleware pour journaliser les requetes (req et res)
app.use(morgan("dev"))

//debuguer (afficher) les actions que mongoDB fait lors de Requette par exemple insérer, mettre à jour, supprimer, rechercher) d'une manière colorée et très lisible.
//mongoose.set('debug', true)

// //middleware qui recoit et envoi les requetes vers la destination en ajoutant l'entete pour la securité
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader('Access-Control-Allow-Headers',
             'Origin, X-Requested-With, Content,Accept,Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods',
    "GET, POST, PUT, DELETE, PATH, OPTIONS"
    );
 next();
})

//transformer le body de JSON en un objet utilisable en javascript
app.use(bodyParser.json());


// //route1 pour le signUp et l'authentification pointe sur la variable userRoute ou on a importer nos routes de Users
//app.use("/api/authentification",userRoute)

//route pour les sujets des etudiants
//app.use("/api/sujet/",sujetRoute)
// //exportation de module app
module.exports = app;