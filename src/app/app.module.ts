import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicDirective } from './directives/basic.directive';
import { BaseFormComponent } from './base-form/base-form.component';
import { TestPipe } from './pipes/test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BasicDirective,
    BaseFormComponent,
    TestPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
