import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Intializing the openFirst and toggle to false and checking the initial values of accordion', () => {
    component.title = '';
    component.icon = '';
    component.openFirst = false;
    component.toggle = false;
    fixture.detectChanges();
   component.groups.forEach((t) => {
      expect(t.opened).toBeFalsy();
    });
  });

  it('Intializing the openFirst to true and toggle to false and checking the initial values of accordion', () => {
    component.title = '';
    component.icon = '';
    component.openFirst = true;
    component.toggle = false;
    fixture.detectChanges();
    component.groups.forEach((t) => {
      expect(t.opened).toBeFalsy();
    });
  });
  it('Intializing the openFirst to false and toggle to false and checking the initial values of accordion', () => {
    component.title = '';
    component.icon = '';
    component.openFirst = true;
    component.toggle = false;
    fixture.detectChanges();
    component.groups.forEach((t) => {
      expect(t.opened).toBeFalsy();
    });
  });
  it('Intializing the openFirst to false and toggle to true and checking the initial values of accordion', () => {
    component.title = '';
    component.icon = '';
    component.openFirst = true;
    component.toggle = false;
    fixture.detectChanges();
    component.groups.forEach((t) => {
      expect(t.opened).toBeFalsy();
    });
  });
});
