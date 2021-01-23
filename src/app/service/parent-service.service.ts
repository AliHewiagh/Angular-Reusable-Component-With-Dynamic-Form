import { Dropdown } from "./../factory/element/dropdown";
import { ElementBase } from "./../model/element-base";

import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Textbox } from "../factory/element/textbox";

@Injectable()
export class ParentServiceService {
  // TODO: get from a remote source of question metadata
  getForm1Elements() {
    const questions: ElementBase<string>[] = [
      new Dropdown({
        key: "brave",
        label: "Bravery Rating",
        options: [
          { key: "solid", value: "Solid" },
          { key: "great", value: "Great" },
          { key: "good", value: "Good" },
          { key: "unproven", value: "Unproven" },
        ],
        order: 3,
      }),
      new Textbox({
        key: "firstName",
        label: "First name",
        value: "Bombasto",
        required: true,
        order: 1,
      }),
      new Textbox({
        key: "emailAddress",
        label: "Email",
        type: "email",
        order: 2,
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }

  getForm2Elements() {
    const elements: ElementBase<string>[] = [
      new Textbox({
        key: "username",
        label: "Username",
        value: "",
        required: true,
        order: 1,
      }),
      new Dropdown({
        key: "brave",
        label: "Bravery Rating",
        options: [
          { key: "solid", value: "Solid" },
          { key: "great", value: "Great" },
          { key: "good", value: "Good" },
          { key: "unproven", value: "Unproven" },
        ],
        order: 3,
      }),
      new Dropdown({
        key: "countries",
        label: "Choose Country",
        options: [
          { key: "libya", value: "Libya" },
          { key: "iraq", value: "Iraq" },
          { key: "malaysia", value: "Malaysia" },
          { key: "singapore", value: "Singapore" },
        ],
        order: 3,
      }),
    ];

    return of(elements.sort((a, b) => a.order - b.order));
  }
}
