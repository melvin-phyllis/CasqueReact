# SITE

https://casquereact.netlify.app/

# Fiche Produit React

Ce mini-projet met en scène une fiche produit de casque audio construite avec React et Vite, en s’appuyant sur react-bootstrap pour la présentation. L’objectif est de démontrer comment composer une interface à partir de composants unitaires reliés à un même jeu de données.

- **Donnée centralisée** : un objet JSON (`src/controllers/product.js`) décrit le casque avec son nom, son prix, sa description et le chemin de l’illustration.
- **Composants spécialisés** : `Name`, `Price`, `Description` et `IMage` récupèrent chacun l’information qui les concerne et l’affichent dans la carte.
- **Carte produit** : `Productdetail` assemble ces composants dans une carte Bootstrap compacte et responsive.
- **Expérience utilisateur** : la page principale (`App.jsx`) accueille l’utilisateur, propose d’enregistrer son prénom et salue dynamiquement la personne dès que l’information est disponible. L’image du casque est également affichée pour illustrer le produit.
- **Style rapide** : Bootstrap assure la base visuelle, complétée par un léger style personnalisé pour positionner la carte.

Ce projet illustre une utilisation simple de React pour organiser la logique métier et la présentation
