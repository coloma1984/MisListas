import { AppTranslateModule } from './app-translate.module';

describe('TranslateModule', () => {
  let translateModule: AppTranslateModule;

  beforeEach(() => {
    translateModule = new AppTranslateModule();
  });

  it('should create an instance', () => {
    expect(translateModule).toBeTruthy();
  });
});
