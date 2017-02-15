import { Injectable } from '@angular/core';

import { LogService } from './log.service';

@Injectable()
export class TestService {

  constructor(private log: LogService){}

  test(key: string, msg: string){
    this.log.log(key, msg);
  }
}