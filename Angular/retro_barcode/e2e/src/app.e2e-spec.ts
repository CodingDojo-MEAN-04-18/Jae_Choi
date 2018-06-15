import { RetroImageGeneratorPage } from './app.po';

describe('retro-image-generator App', () => {
  let page: RetroImageGeneratorPage;

  beforeEach(() => {
    page = new RetroImageGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});