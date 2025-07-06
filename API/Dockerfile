# Utiliser une image officielle de Node.js comme base
FROM node:12.13.0

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application
COPY . .

# Exposer le port utilisé par l'API
EXPOSE 3001

# Lancer l'application
CMD ["npm", "run", "dev"]