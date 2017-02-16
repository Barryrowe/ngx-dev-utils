import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrettyObjectComponent } from './components/pretty-object.component';

import { LogService } from './services/log.service';
import { TestService } from './services/test.service';

export function testServiceFactory(logService: LogService): TestService{
  return new TestService(logService);
}

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
  providers: [
    LogService,
    {provide: TestService, useFactory: testServiceFactory, deps:[LogService] }
  ],
  bootstrap: []
})
export class NgxDevUtilsModule { }
