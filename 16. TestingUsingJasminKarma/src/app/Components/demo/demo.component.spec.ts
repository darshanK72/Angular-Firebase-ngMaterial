import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { getTodo } from 'src/app/Utilities/getTodo';

import { DemoComponent } from './demo.component';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;
  let ele:DebugElement

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [DemoComponent]
    }).compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(DemoComponent);
      component = fixture.componentInstance;
      ele = fixture.debugElement;
      fixture.detectChanges();
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    console.log(ele.nativeElement);
  });

  it('should render all todos', () => {
    component.todos = getTodo();
    const cards = ele.queryAll(By.css('.todo'));
    expect(cards).toBeTruthy();
    expect(cards.length).toBe(4);
  });

  it('should render first todo',() =>{
    component.todos = getTodo();
    const card = ele.queryAll(By.css('.todo'))[0];
    expect(card).toBeTruthy();
    const title = card.query(By.css('.title'));
    expect(title.nativeElement.textContent).toBe("delectus aut autem");
    const id = card.query(By.css('.id'));
    expect(id.nativeElement.textContent).toBe("1")
  })

});
