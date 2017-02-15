import { Injectable } from '@angular/core';


@Injectable()
export class LogService {

  constructor(){}

  log(key: string, msg: string){
    console.log(key, msg);
  }
}