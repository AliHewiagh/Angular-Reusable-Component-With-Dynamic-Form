import { ElementBase } from "./../model/element-base";
import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class ElementControlService {
  constructor() {}

  toFormGroup(questions: ElementBase<string>[]) {
    const group: any = {};

    questions.forEach((question) => {
      group[question.key] = question.required
        ? new FormControl(question.value || "", Validators.required)
        : new FormControl(question.value || "");
    });
    return new FormGroup(group);
  }
}
