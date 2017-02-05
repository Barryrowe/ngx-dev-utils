import { Component, Input } from "@angular/core";

@Component({
  selector:"adu-pretty-object",
  template: `
    <div *ngFor="let key of keys" [class.indent]="hasParent">
      <label><strong>{{key}}:</strong></label>
      <span [ngSwitch]="type(key)">        
        <adu-pretty-object *ngSwitchCase="'object'" [hasParent]="true" [obj]="obj[key]"></adu-pretty-object>        
        <span *ngSwitchDefault>{{obj[key]}}</span>        
      </span>
    </div>
  `,
  styles:[`
    .indent{
      margin-left: 2em;
    }
  `]

})
export class PrettyObjectComponent{
  @Input() obj:any = {};
  @Input() hasParent:boolean = false;

  public keys:Array<string> = [];

  constructor(){
  }

  ngOnInit(){    
    this.keys = this.obj !== undefined ? Object.keys(this.obj) : [];
  }

  type(key:string):string{
    return typeof(this.obj[key]);        
  }
}