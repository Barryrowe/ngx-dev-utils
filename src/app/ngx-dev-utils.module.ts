import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrettyObjectComponent } from './components/pretty-object.component';

@NgModule({
  declarations: [
    PrettyObjectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrettyObjectComponent
  ],
  providers: [],
  bootstrap: []
})
export class NgxDevUtilsModule { }
