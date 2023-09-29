import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private logger:LoggerService) { 
    logger.log("HTTP called");
  }

  addTwoNumbers(a:number,b:number){
    this.logger.log(`Adding Two Numbers ${a} & ${b}`);
    // this.logger.log(`Adding Two Numbers ${a} & ${b}`);
    return a + b;
  }

  subtractTwoNumbers(a:number,b:number){
    this.logger.log(`Subtracting Two Numbers ${a} & ${b}`);
    // this.logger.log(`Adding Two Numbers ${a} & ${b}`);
    return a - b;
  }

  multiplyTwoNumbers(a:number,b:number){
    this.logger.log(`Multiplying Two Numbers ${a} & ${b}`);
    // this.logger.log(`Adding Two Numbers ${a} & ${b}`);
    return a * b;
  }
}
