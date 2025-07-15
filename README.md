# ArgentBank

ArgentBank est une application bancaire moderne permettant aux utilisateurs de consulter leur profil, gérer leurs comptes et (bientôt) suivre leurs transactions. Ce projet inclut une interface frontend en React ainsi qu’un backend Express connecté à une base de données MongoDB.

---

## Stack Technique 

Frontend

- React
- Redux (RTK)
- React Router
- SCSS
- Swagger

Backend
- Node.js
- Express
- Docker
- MongoDB
- JWT Authentication
- Swagger

---

## Installation

### Prérequis

- Node.js (v14 ou + recommandé / v12 pour le backend)
- npm ou yarn
- MongoDB local ou distant
- Redux
- Docker (optionel)

### Cloner le dépôt

```bash
git clone https://github.com/Callouu/ArgentBank.git
cd ArgentBank
```
## Démarrage du projet

### Backend
```bash
cd api
npm install
npm run dev:server
```
L’API tourne sur le port 3001 : http://localhost:3001

Pour insérer des utilisateurs de test :
```bash
npm run populate-db
```
Utilisateurs disponibles :
| Email                                       | Mot de passe |
| ------------------------------------------- | ------------ |
| [tony@stark.com](mailto:tony@stark.com)     | password123  |
| [steve@rogers.com](mailto:steve@rogers.com) | password456  |

### Frontend
```bash
cd .
npm install
npm run dev
```

## Structure du projet

```c#
ArgentBank/
├── api/                 # API simulée avec Node.js, Express et Mongo
├── src/                 # Code source React
│   ├── assets/          # images et SVG
│   ├── components/      # Composants UI (Header, Sidebar, etc.)
│   ├── data/            # Données mockées de l'API
│   ├── pages/           # Pages (Home, Profil)
│   ├── scss/            # Fichier SCSS 
│   └── store/           # Appels API et configs Redux
├── docs/                # Documentation JSDoc
└── README.md            # Ce fichier
```

## Fonctionnalités

- Authentification sécurisée
- Récupération des informations utilisateur
- Modification du nom d’utilisateur
- Affichage des comptes bancaires
- (À venir) : gestion des transactions

## Documentation API

La documentation Swagger est disponible ici :

http://localhost:3001/api-docs

## Maquettes & Wireframes

Toutes les maquettes sont situées dans le dossier /designs.

Pages statiques en HTML/CSS

Wireframes pour :

- Edition du profil
- (Futur) module de transactions

