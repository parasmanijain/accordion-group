import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By} from '@angular/platform-browser';

import { AccordionGroupComponent } from './accordion-group.component';

describe('AccordionGroupComponent', () => {
  let component: AccordionGroupComponent;
  let fixture: ComponentFixture<AccordionGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checking the intial value of open, close and icon when no font library is being provided and opened is false', () => {
    expect(component.open).toBe('open');
    expect(component.close).toBe('close');
    expect(component.icon).toBe('icon');
    const iconClass = fixture.debugElement.query(By.css('#iconclass'));
    expect(iconClass.classes['icon']).toBeTruthy();
    expect(iconClass.attributes['ng-reflect-ng-class']).toBe('icon');

  });

  it('checking the class on the container and opened variable upon initialization ', () => {
    expect(component.opened).toBeFalsy();
    const expandcollpaseclass = fixture.debugElement.query(By.css('#expandcollpaseclass'));
    expect(expandcollpaseclass.classes['open']).toBeTruthy();
    expect(expandcollpaseclass.attributes['ng-reflect-ng-class']).toBe('open');
  });

  it('changing the value of opened to true and checkign the class applied to expandcollpaseclass', () => {
    component.opened  = true;
    fixture.detectChanges();
    expect(component.opened).toBeTruthy();
    const expandcollpaseclass = fixture.debugElement.query(By.css('#expandcollpaseclass'));
    expect(expandcollpaseclass.classes['close']).toBeTruthy();
    expect(expandcollpaseclass.attributes['ng-reflect-ng-class']).toBe('close');
  });

  it('assigning the open, close and icon values to font-awesome values and checking the intial value of open, close and icon when font-awesome library is being provided', () => {
    component.open = 'fa fa-open';
    component.close = 'fa fa-close';
    component.icon = 'fa fa-folder';
    fixture.detectChanges();
    expect(component.open).toBe('fa fa-open');
    expect(component.close).toBe('fa fa-close');
    expect(component.icon).toBe('fa fa-folder');
  });
});
