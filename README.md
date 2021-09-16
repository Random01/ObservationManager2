# OM

## Installation

1. "npm install"

1. "npm run start"

1. Run "chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security"

1. Open "http://localhost:4200"

## Docker

1. "docker build . -t falserandom/om"
   
1. "docker run -d -p 48900:3001 falserandom/om" OR "docker run -d -p 48900:3001 -e SECRET='...' -e CONNECTION_STRING='...' falserandom/om"