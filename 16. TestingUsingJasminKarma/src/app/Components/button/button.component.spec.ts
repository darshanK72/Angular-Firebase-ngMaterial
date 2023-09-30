import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  flush,
  flushMicrotasks,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { delay, of } from 'rxjs';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let ele: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    });
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    ele = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render subscribe button', () => {
    component.isDisabled = false;
    let btn = ele.queryAll(By.css('button'))[0];
    // component.btnText = 'Subscribe';
    fixture.detectChanges();

    expect(btn.nativeElement.textContent).toBe('Subscribe');
    expect(btn.nativeElement.disabled).toBeFalse();
  });

  it('should render disabled button with done', (done: DoneFn) => {
    component.isDisabled = false;
    fixture.detectChanges();
    let btn = ele.queryAll(By.css('button'));
    console.log(btn);
    // component.btnText = 'Subscribed';
    btn[0].nativeElement.click();
    setTimeout(() => {
      fixture.detectChanges();
      btn = ele.queryAll(By.css('button'));
      console.log(btn);
      expect(btn[0].nativeElement.textContent).toBe('Subscribed');
      expect(btn[0].nativeElement.disabled).toBeTrue();
      done();
    }, 3000);
  });

  it('should render disabled button with fake async', fakeAsync(() => {
    component.isDisabled = false;
    fixture.detectChanges();
    let btn = ele.queryAll(By.css('button'));
    console.log(btn);
    // component.btnText = 'Subscribed';
    btn[0].nativeElement.click();
    setTimeout(() => {
      fixture.detectChanges();
      btn = ele.queryAll(By.css('button'));
      console.log(btn);
    }, 3000);
    // tick(3000);
    flush();
    expect(btn[0].nativeElement.textContent).toBe('Subscribed');
    expect(btn[0].nativeElement.disabled).toBeTrue();
  }));

  it('should render disabled button with fake async on promise', fakeAsync(() => {
    component.isDisabled = false;
    fixture.detectChanges();
    let btn = ele.queryAll(By.css('button'));
    console.log(btn);
    // component.btnText = 'Subscribed';
    // btn[0].nativeElement.click();
    component.isDisabled = true;
    component.ifSubscribed = true;

    Promise.resolve().then(() => {
      fixture.detectChanges();
      btn = ele.queryAll(By.css('button'));
      console.log(btn);
    })
    flushMicrotasks();

    expect(btn[0].nativeElement.textContent).toBe('Subscribed');
    expect(btn[0].nativeElement.disabled).toBeTrue();
  }));

  it('should render disabled button with fake async with observables', fakeAsync(() => {
    let test = false;

    console.log("before observable");

    let obs$ = of(true).pipe(delay(1000));

    obs$.subscribe(() => {
      test = true;
    });

    tick(1000);

    console.log("running test assertions");
    expect(test).toBeTrue();
  }));

  it('should render disabled button with waitForAsync on promise', waitForAsync(() => {
    component.isDisabled = false;
    fixture.detectChanges();
    let btn = ele.queryAll(By.css('button'));
    console.log(btn);
    // component.btnText = 'Subscribed';
    // btn[0].nativeElement.click();
    component.isDisabled = true;
    component.ifSubscribed = true;

    Promise.resolve().then(() => {
      fixture.detectChanges();
      btn = ele.queryAll(By.css('button'));
      console.log(btn);
    })
 
    fixture.whenStable().then(() => {
      expect(btn[0].nativeElement.textContent).toBe('Subscribed');
      expect(btn[0].nativeElement.disabled).toBeTrue();
    })
  }));

});
