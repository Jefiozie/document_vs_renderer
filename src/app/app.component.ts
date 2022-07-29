import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <ul>
      <li routerLink="renderer">renderer</li>
      <li routerLink="document">document</li>
      <li routerLink="elementRef">elementRef</li>
    </ul>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}
