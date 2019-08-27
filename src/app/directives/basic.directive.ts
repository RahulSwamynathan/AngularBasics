import { Directive, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasic]'
})
export class BasicDirective implements OnInit {
  constructor() { }

  private _basic: any;

  @Input("appBasic")
  get basic(): any {
    return this._basic;
  }
  set basic(value) {
    this._basic = value;
    this.basicChange.emit(this._basic);
  }

  @Output("appBasic") basicChange: EventEmitter<any> = new EventEmitter<any>(null);

  ngOnInit() {
    console.log(this.basic);
    this.basic = false;
    console.log(this.basic);
    
  }
}
