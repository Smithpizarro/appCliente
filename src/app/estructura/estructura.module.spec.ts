import { EstructuraModule } from './estructura.module';

describe('EstructuraModule', () => {
  let estructuraModule: EstructuraModule;

  beforeEach(() => {
    estructuraModule = new EstructuraModule();
  });

  it('should create an instance', () => {
    expect(estructuraModule).toBeTruthy();
  });
});
