import { ElementControlService } from "./../../service/element-control.service";
import { ElementBase } from "./../../model/element-base";
import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-child2-component",
  templateUrl: "./child2-component.component.html",
  styleUrls: ["./child2-component.component.css"],
  providers: [ElementControlService],
})
export class Child2ComponentComponent implements OnInit {
  @Input() elements: ElementBase<string>[] = [];
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
