import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <ul>
      <li>renderer</li>
      <li>document</li>
      <li>elementRef</li>
    </ul>

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = "document_vs_renderer";
}
