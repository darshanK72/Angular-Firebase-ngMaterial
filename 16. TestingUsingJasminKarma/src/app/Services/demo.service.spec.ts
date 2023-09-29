import { TestBed } from '@angular/core/testing';
import { DemoService } from './demo.service';
import { LoggerService } from './logger.service';

// describe('DemoService', () => {
//   let service: DemoService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(DemoService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });


describe('DemoService',()=>{
  
  let logger:LoggerService;
  let demoService:DemoService;

  beforeEach(()=>{
    logger = jasmine.createSpyObj('LoggerService',['log']);

    TestBed.configureTestingModule({
      providers:[{
        provide:LoggerService,useValue:logger
      },
      DemoService]
    });
    demoService = TestBed.inject(DemoService);

    // logger = jasmine.createSpyObj('LoggerService',['log']);
    // demoService = new DemoService(logger);
  })

  it('Should add two numbers',() =>{
    // spyOn(logger,'log').and.callThrough();
    let result = demoService.addTwoNumbers(25,52);
    expect(result).toBe(77);
  });

  it('Should subtract two numbers',()=>{
    let result = demoService.subtractTwoNumbers(20,2);
    expect(result).toBe(18);
  });

  it('Should multiply two numbers',()=>{
    let result = demoService.multiplyTwoNumbers(5,2);
    expect(result).toBe(10);
  });

  afterEach(()=>{
    expect(logger.log).toHaveBeenCalled();
    expect(logger.log).toHaveBeenCalledTimes(2);
  });


})