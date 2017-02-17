import { Component, Input } from '@angular/core';

@Component({
  selector:"ndu-pretty-object",
  template: `
    <div *ngIf="typeOfObj() === 'string'" [class.indent]="hasParent">
      <span>{{obj}}</span>
    </div>
    <div *ngIf="typeOfObj() !== 'string'"> 
      <div *ngFor="let key of getKeys()" [class.indent]="hasParent">
        <label><strong>{{key}}:</strong></label>        
        <span [ngSwitch]="typeOfProp(key)">        
          <ndu-pretty-object *ngSwitchCase="'object'" [hasParent]="true" [obj]="obj[key]"></ndu-pretty-object>                
          <span *ngSwitchDefault>{{obj[key]}}</span>        
        </span>
      </div>
    </div>
  `,
  styles: [`
    .indent{
      margin-left: 2em;
    }
  `]

})
export class PrettyObjectComponent {
  @Input() obj: any = {};
  @Input() hasParent = false;

  constructor() {
  }

  typeOfObj(): string {
    return typeof(this.obj);
  }

  typeOfProp(key: string): string {
    return typeof(this.obj) !== 'string' ? typeof(this.obj[key]) : 'string';
  }

  getKeys(): Array<string> {
    return this.obj !== undefined && this.obj !== null ? Object.keys(this.obj) : [];
  }
}
