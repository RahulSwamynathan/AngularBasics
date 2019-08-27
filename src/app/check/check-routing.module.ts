import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadComponent } from './lazy-load/lazy-load.component';

const routes: Routes = [
  {
    path: "",
    component: LazyLoadComponent,
    
    children: [
      {
        path: "", component: LazyLoadComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckRoutingModule { }
