import { Component, OnInit } from "@angular/core";
import { provideRoutes } from "@angular/router";

@Component({
  selector: "app-document",
  template: `document`,
  standalone: true,
  providers: [provideRoutes([{ path: "", component: DocumentComponent }])],
})
export class DocumentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
