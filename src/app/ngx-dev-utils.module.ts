import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrettyObjectComponent } from './components/pretty-object.component';

import { LogService } from './services/log.service';
import { TestService } from './services/test.service';

@NgModule({
  declarations: [
    PrettyObjectComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PrettyObjectComponent
  ],
  providers: [LogService, TestService],
  bootstrap: []
})
export class NgxDevUtilsModule { }
