import { Textarea } from "../factory/form/element/textarea";
import { Dropdown } from "../factory/form/element/dropdown";
import { ElementBase } from "./../model/element-base";

import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Textbox } from "../factory/form/element/textbox";

@Injectable()
export class ParentServiceService {
  getForm1Elements() {
    const elements: ElementBase<string>[] = [
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
      new Textarea({
        key: "comment",
        label: "Comment",
        type: "comment",
        order: 4,
      }),
    ];

    return of(elements.sort((a, b) => a.order - b.order));
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
        order: 2,
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
        order: 4,
      }),
      new Textarea({
        key: "comment",
        label: "Comment",
        type: "comment",
        order: 3,
        required: true,
      }),
    ];

    return of(elements.sort((a, b) => a.order - b.order));
  }
}
