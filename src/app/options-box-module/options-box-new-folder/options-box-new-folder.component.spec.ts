import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsBoxNewFolderComponent } from './options-box-new-folder.component';

describe('OptionsBoxNewFolderComponent', () => {
  let component: OptionsBoxNewFolderComponent;
  let fixture: ComponentFixture<OptionsBoxNewFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsBoxNewFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsBoxNewFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
