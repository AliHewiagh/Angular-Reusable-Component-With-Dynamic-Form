import { ElementControlService } from "../../../service/element-control.service";
import { ElementBase } from "../../../model/element-base";
import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
@Component({
  selector: "app-form-component",
  templateUrl: "./form-component.component.html",
  styleUrls: ["./form-component.component.css"],
  providers: [ElementControlService],
})
export class FormComponentComponent implements OnInit {
  @Input() elements: ElementBase<string>[] = [];
  @Input() inline: boolean;
  form: FormGroup;
  payLoad = "";

  constructor(private qcs: ElementControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.elements);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
