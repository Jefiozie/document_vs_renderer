import { importProvidersFrom, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { provideRoutes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
const routes = [
  {
    path: "document",
    loadComponent: () =>
      import("./document.component").then((mod) => mod.DocumentComponent),
  },
  {
    path: "renderer",
    loadComponent: () =>
      import("./render.component").then((mod) => mod.RendererComponent),
  },
  {
    path: "elementRef",
    loadComponent: () =>
      import("./elementRef.component").then((mod) => mod.ElementRefComponent),
  },
];
const providerRouters = provideRoutes(routes);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
