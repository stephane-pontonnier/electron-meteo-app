# Electron Météo App
Une application de météo construite avec **Electron**. Cette application permet de récupérer et afficher les informations météorologiques en temps réel d'une ville donnée en utilisant l'API **WeatherAPI**.
## Prérequis
Avant de commencer, assurez-vous d'avoir installé [Node.js](https://nodejs.org/) sur votre machine.
## Installation

### 1. Cloner le dépôt

Clonez ce projet sur votre machine locale en utilisant Git :
```bash
git clone https://github.com/stephane-pontonnier/electron-meteo-app.git
cd electron-meteo-app
````
### 2. Installer les dépendances

Installez les dépendances nécessaires via npm (le gestionnaire de paquets de Node.js) :
```bash
npm install
````
## 3. Ajouter votre clé API

Le projet utilise l'API WeatherAPI pour récupérer les données météo. Si vous avez créé un compte sur WeatherAPI et récupéré une clé API gratuite.

Remplacez la valeur de la variable API_KEY dans le fichier script.js. Par exemple :

```javascript
const API_KEY = "votre_clé_api";
````

## 4. Lancer l'application

Une fois les dépendances installées et la clé API configurée, vous pouvez démarrer l'application avec :

```bash
npm start
````
Cela ouvrira une fenêtre d'application Electron où vous pourrez entrer le nom d'une ville et voir les informations météorologiques en temps réel.
