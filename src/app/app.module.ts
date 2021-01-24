import { FormComponentComponent } from "./factory/form/form-component/form-component.component";
import { MaterialModule } from "./themes/material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { LayoutModule } from "@angular/cdk/layout";
import { ReactiveFormsModule } from "@angular/forms";
import { ElementComponent } from "./factory/shared/element/element.component";

@NgModule({
  declarations: [AppComponent, ElementComponent, FormComponentComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
