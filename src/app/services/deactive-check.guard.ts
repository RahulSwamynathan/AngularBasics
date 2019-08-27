import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { BaseFormComponent } from '../base-form/base-form.component';

@Injectable({
  providedIn: 'root'
})
export class DeactiveCheckGuard implements CanDeactivate<BaseFormComponent> {
  canDeactivate(component: BaseFormComponent): boolean  {
    if(component.basicFormGroup.dirty){
      if(confirm("Are you sure do you want to navigate")){
        return true;
      }
      return false;
    }
    else{
      return true;
    }
  }
  
}
