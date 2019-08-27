import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckRoutingModule } from './check-routing.module';
import { LazyLoadComponent } from './lazy-load/lazy-load.component';

@NgModule({
  declarations: [LazyLoadComponent],
  imports: [
    CommonModule,
    CheckRoutingModule
  ]
})
export class CheckModule { }
