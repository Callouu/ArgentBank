# # Utiliser une image officielle de Node.js comme base
# FROM node:12.13.0

# # Définir le répertoire de travail dans le conteneur
# WORKDIR /app

# # Copier les fichiers package.json et package-lock.json
# COPY package*.json ./

# # Installer les dépendances
# RUN npm install

# # Copier le reste de l'application
# COPY . .

# # Exposer le port utilisé par l'API
# EXPOSE 3001

# # Lancer l'application
# CMD ["npm", "run", "dev:server"]

# Utiliser une image officielle de Node.js comme base
FROM node:12.13.0

# Dockerize is required to wait for the MongoDB container to be ready.ENV DOCKERIZE_VERSION v0.6.1
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app
# Copier les fichiers package.json et package-lock.json
COPY package*.json ./
# Installer les dépendances
RUN npm install
# Copier le reste de l'application
COPY . .

# This script starts 'npm run dev:server' and, once the app is running,
# it executes the script to populate the database.
COPY populate.sh .
RUN chmod +x populate.sh

CMD dockerize -wait tcp://mongo_db:27017 -timeout 30s ./populate.sh