import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsBoxDeleteComponent } from './options-box-delete.component';

describe('OptionsBoxDeleteComponent', () => {
  let component: OptionsBoxDeleteComponent;
  let fixture: ComponentFixture<OptionsBoxDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsBoxDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsBoxDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
