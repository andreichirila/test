import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsBoxNewFileComponent } from './options-box-new-file.component';

describe('OptionsBoxNewFileComponent', () => {
  let component: OptionsBoxNewFileComponent;
  let fixture: ComponentFixture<OptionsBoxNewFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsBoxNewFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsBoxNewFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
