import { ParentServiceService } from "./service/parent-service.service";
import { ElementBase } from "./model/element-base";
import { Component } from "@angular/core";
import { Observable } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [ParentServiceService],
})
export class AppComponent {
  form1Elements$: Observable<ElementBase<any>[]>;
  form2Elements$: Observable<ElementBase<any>[]>;

  constructor(service: ParentServiceService) {
    this.form1Elements$ = service.getForm1Elements();
    this.form2Elements$ = service.getForm2Elements();
  }
}
