# package installés dans le back:
    0. initialiser le projet avec npm init -y
    1. express
    2. nodemon
    3. mongoose
    4. cors
    5. jsonwebtoken
    6. cookie-parser
    7. bcryptjs
    8. dotenv
    9. body-parser
    10. morgan

# package installés dans le front:
    0. creer le projet avec npm create vite
    1. initialiser le projet avec : npm install
    2. axios
    3. react-router-dom

# Backend
pour lancer le serveur tapez: `npm run start`
mettre les informations de variables d'environnements, 
# Base des données MongoDB atlas
installer le package mongoose : npm i mongoose

# Fonctionnement de l'API: 
    1.dans App.js jai les routes qui recoivent premierement la requete venant du front: "/api/sujet/",sujetRoute
    2.on importe les routes vers se trouvant dans le dossier routes ou on va trouver les POST, GET, PUT, DEL
    3. ne peut effectuer ces requetes est celui  qui est authentifier car les routes sont proteger 
        une fois authentifier ça mene vers le controller qui va traiter la requette
    4. dans le controlleur il y a des fonction qui traitent les POST, GET etc pour interagir avec la BDD

# Les Routes Backend :

## route POST pour creer un compte 
http://localhost:3000/api/authentification/signup

## route POST pour se connecter
http://localhost:3000/api/authentification/login


## route POST pour envoyer les sujets par un etudiants
http://localhost:3000/api/sujet/

## route GET pour afficher les sujets 
http://localhost:3000/api/sujet/

## route GET pour afficher un sujet par ID
http://localhost:3000/api/sujet/:id

## route PUT pour modifier un sujet par ID
http://localhost:3000/api/sujet/:id

## route DELETE pour supprimer un sujet par ID
http://localhost:3000/api/sujet/:id