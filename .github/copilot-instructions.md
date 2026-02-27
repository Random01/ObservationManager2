# Copilot Instructions for ObservationManager

## Project Overview
ObservationManager is a full-stack application for managing astronomical observations. It consists of:
- **Frontend**: Angular (src/app), using NgRx for state management and Angular Material for UI.
- **Backend**: Node.js/Express (api/), with MongoDB via Mongoose, modular routers, and Passport for authentication.

## Key Architecture & Patterns
- **API Structure**: Each domain (e.g., constellations, eyepieces, filters) has its own router, model, schema, and store under `api/routers/` and `api/common/models/`.
- **Router Registration**: All API endpoints are registered in `api/routers/router-provider.ts` and mounted under `/api/<resource>`.
- **Frontend Routing**: Angular lazy-loads feature modules/components via `app-routing.module.ts`.
- **State Management**: Uses NgRx reducers/effects in `src/app/store/` for auth, navigation, registration, etc.
- **Authentication**: Passport.js (local strategy) on backend, session-based, with guards on Angular routes.
- **Data Flow**: Frontend communicates with backend via REST endpoints under `/api/`.

## Developer Workflows
- **Start MongoDB**: `docker run --name mongodb -d -p 27017:27017 mongo`
- **Backend**:
  - Install: `cd api && npm install`
  - Build (watch): `cd api && npm run build:watch`
  - Start (dev): `cd api && CONNECTION_STRING='mongodb://localhost:27017/' npm run start:watch`
- **Frontend**:
  - Install: `npm install`
  - Start: `npm run start_app`
  - Open: `http://localhost:4200`
- **Docker**:
  - Build: `docker build . -t falserandom/om`
  - Run: `docker run -d -p 48900:3001 falserandom/om`

## Project Conventions
- **API**: All endpoints are under `/api/`. Add new resources by creating a router, model, schema, and registering in `router-provider.ts`.
- **Frontend**: Use Angular feature modules and NgRx for new stateful features. Prefer lazy loading for large sections.
- **Testing**: Use `ng test` for frontend. No explicit backend test scripts found—add as needed.
- **Environment**: Node 20.x, Angular 21.x, MongoDB. See `package.json` for details.

## Integration Points
- **Session/Passport**: See `api/config/passport.ts` and session setup in `api/index.ts`.
- **NgRx Effects**: See `src/app/store/auth` and `src/app/store/register` for async flows.
- **CSV Data**: Data importers/readers in `api/common/services/csv-reader.ts`.

## Examples
- Add a new API resource: copy a folder in `api/routers/`, implement model/schema/router, register in `router-provider.ts`.
- Add a new Angular feature: create a folder in `src/app/`, add routing, NgRx state, and UI components.

---
For more, see [README.md](../README.md) and [api/README.md](../api/README.md). Update this file as the architecture evolves.
