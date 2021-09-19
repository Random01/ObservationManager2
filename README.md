# OM

## Install Database

1. Run "docker run --name mongodb -d -p 27017:27017 mongo"

## Run Backend

1. Run "cd api && npm install"

1. Run "cd api && npm run build:watch"

1. Run "cd api && CONNECTION_STRING='mongodb://localhost:27017/' npm run start:watch"

## Run Frontend

1. Run "npm install"

1. Run "npm run start_app"

1. Run "chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security"

1. Open "http://localhost:4200"

## Docker

1. "docker build . -t falserandom/om"
   
1. "docker run -d -p 48900:3001 falserandom/om" OR "docker run -d -p 48900:3001 -e SECRET='...' -e CONNECTION_STRING='...' falserandom/om"