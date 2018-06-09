import { OptionsBoxModuleModule } from './options-box-module.module';

describe('OptionsBoxModuleModule', () => {
  let optionsBoxModuleModule: OptionsBoxModuleModule;

  beforeEach(() => {
    optionsBoxModuleModule = new OptionsBoxModuleModule();
  });

  it('should create an instance', () => {
    expect(optionsBoxModuleModule).toBeTruthy();
  });
});
