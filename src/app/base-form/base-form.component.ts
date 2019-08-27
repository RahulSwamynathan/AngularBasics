import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.css']
})
export class BaseFormComponent implements OnInit {

  constructor() { }

  basicFormGroup: FormGroup = null;
  output: boolean = false;

  ngOnInit() {
    this.basicFormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [])
    });
    this.bindEvent();
  }

  bindEvent() {
    this.basicFormGroup.controls["firstName"].valueChanges.subscribe((res) => {
      console.log(res);
    })

    this.basicFormGroup.controls["firstName"].statusChanges.subscribe((res) => {
      console.log(res);
    })
  }

  bindForm() {
    this.output = this.basicFormGroup.valid;
    this.basicFormGroup.controls["firstName"].disable();
    this.basicFormGroup.value;
    this.basicFormGroup.getRawValue();

  }

}
