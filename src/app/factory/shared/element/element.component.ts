import { ElementBase } from "./../../../model/element-base";
import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-element",
  templateUrl: "./element.component.html",
  styleUrls: ["./element.component.css"],
})
export class ElementComponent {
  @Input() element: ElementBase<string>;
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.element.key].valid;
  }
}
