# OM

## Install Database

For a fresh local database, run `docker run --name mongodb -d -p 127.0.0.1:27017:27017 mongo:9.0.8`.

For an existing self-managed deployment, back up the data and follow the guide for upgrading from [MongoDB 8.0](https://www.mongodb.com/docs/manual/release-notes/9.0-upgrade-from-8.0/) or [MongoDB 8.3](https://www.mongodb.com/docs/manual/release-notes/9.0-upgrade/). If you run a version earlier than 8.0, follow the [supported upgrade path](https://www.mongodb.com/docs/mongodb-versions/) to 8.0 first.

## Run Backend

Follow the [API setup](api/README.md) to configure MongoDB and the JWT signing secret, then start the API.

## Run Frontend

1. Run "npm install"

1. Run "npm run start_app"

1. Run "chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security"

1. Open "http://localhost:4200"

## Frontend unit tests

Run `npm test` to develop with the Angular Jasmine suite. Run `npm run test:coverage` with Node `22.22.3` and Chrome installed to measure app-wide coverage. The single-run report is written to `coverage/app/index.html`.

App-wide coverage counts executable frontend modules that the tests never load as zero, including lazy-loaded components. The browser bootstrap in `src/main.ts` is outside the unit-test scope. Type-only files and files that only re-export other modules have no coverage counters.

## Docker

1. "docker build . -t falserandom/om"

1. Set `SECRET` and `CONNECTION_STRING` in the environment of the shell running Docker. Use a MongoDB address reachable from the container.
1. Run `docker run -d -p 48900:3002 -e SECRET -e CONNECTION_STRING falserandom/om`.
