import { OptionsBoxModule } from './options-box-module';

describe('OptionsBoxModuleModule', () => {
  let optionsBoxModuleModule: OptionsBoxModule;

  beforeEach(() => {
    optionsBoxModuleModule = new OptionsBoxModule();
  });

  it('should create an instance', () => {
    expect(optionsBoxModuleModule).toBeTruthy();
  });
});
