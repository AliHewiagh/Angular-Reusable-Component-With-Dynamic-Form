import { MaterialModule } from "./themes/material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { LayoutModule } from "@angular/cdk/layout";
import { ReactiveFormsModule } from "@angular/forms";
import { Child1ComponentComponent } from "./factory/child1-component/child1-component.component";

@NgModule({
  declarations: [AppComponent, Child1ComponentComponent],
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
