import { HomeModule } from './home.module';

describe('ShopModule', () => {
  let shopModule: HomeModule;

  beforeEach(() => {
    shopModule = new HomeModule();
  });

  it('should create an instance', () => {
    expect(shopModule).toBeTruthy();
  });
});
