import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";

import { environment } from "../environments/environment";
import { AdminGuard, AuthGuard } from "./auth/shared";

const routes: Routes = [
  {
    path: "login",
    loadComponent: () =>
      import("./auth/login/login.component").then((c) => c.LoginComponent),
  },
  {
    path: "register",
    loadComponent: () =>
      import("./auth/register/register.component").then(
        (c) => c.RegisterComponent
      ),
  },
  {
    path: "equipment",
    loadComponent: () =>
      import("./equipment/equipment.component").then(
        (c) => c.EquipmentComponent
      ),
  },
  {
    path: "observing-programs",
    loadChildren: () => import("./observing-programs/observing-programs.routing").then(m => m.routes),
    canActivate: [AdminGuard],
  },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then((m) => m.AdminModule),
    canActivate: [AdminGuard],
  },
  {
    path: "sites",
    loadChildren: () => import("./sites/sites.routing").then((m) => m.sitesRoutes),
    canActivate: [AuthGuard],
  },
  {
    path: "scopes",
    loadChildren: () => import("./scopes/scopes.routes").then((m) => m.scopesRoutes),
    canActivate: [AuthGuard],
  },
  {
    path: "eyepieces",
    loadChildren: () => import("./eyepieces/eyepieces.routing").then((m) => m.routes),
    canActivate: [AuthGuard],
  },
  {
    path: "filters",
    loadChildren: () => import("./filters/filters.routing").then((m) => m.routes),
    canActivate: [AuthGuard],
  },
  {
    path: "lenses",
    loadChildren: () => import("./lenses/lenses.routing").then((r) => r.routes),
    canActivate: [AuthGuard],
  },
  {
    path: "objects",
    loadChildren: () => import("./target/targets.routing").then((m) => m.targetsRoutes),
    canActivate: [AuthGuard],
  },
  {
    path: "sessions",
    loadChildren: () => import("./sessions/sessions.routing").then((m) => m.routes),
    canActivate: [AuthGuard],
  },
  {
    path: "users",
    loadChildren: () => import("./users/users.module").then((m) => m.UsersModule),
    canActivate: [AuthGuard],
  },
  {
    path: "observations",
    loadChildren: () => import("./observations/observations.routing").then(r => r.routes),
    canActivate: [AuthGuard],
  },
  {
    path: "",
    redirectTo: "observations",
    pathMatch: "full",
  },
  {
    path: "**",
    loadComponent: () =>
      import("./page-not-found/page-not-found.component").then(
        (c) => c.PageNotFoundComponent
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: !environment.production }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
