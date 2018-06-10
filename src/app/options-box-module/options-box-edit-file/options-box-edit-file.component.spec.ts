import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsBoxEditFileComponent } from './options-box-edit-file.component';

describe('OptionsBoxEditFileComponent', () => {
  let component: OptionsBoxEditFileComponent;
  let fixture: ComponentFixture<OptionsBoxEditFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsBoxEditFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsBoxEditFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
