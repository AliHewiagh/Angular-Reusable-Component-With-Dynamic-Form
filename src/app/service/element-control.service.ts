import { ElementBase } from "./../model/element-base";
import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class ElementControlService {
  constructor() {}

  toFormGroup(elements: ElementBase<string>[]) {
    const group: any = {};

    elements.forEach((element) => {
      group[element.key] = element.required
        ? new FormControl(element.value || "", Validators.required)
        : new FormControl(element.value || "");
    });
    return new FormGroup(group);
  }
}
