import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseFormComponent } from './base-form/base-form.component';
import { DeactiveCheckGuard } from './services/deactive-check.guard';

const routes: Routes = [
  {
    path: "", component: BaseFormComponent, canDeactivate: [DeactiveCheckGuard]
  },
  {
    path: "form", component: BaseFormComponent, canDeactivate: [DeactiveCheckGuard]
  },
  {
    path: "check", loadChildren: './check/check.module#CheckModule'
  },
  {
    path: "**", redirectTo: "form", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
