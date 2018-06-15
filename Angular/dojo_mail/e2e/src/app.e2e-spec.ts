import { DojomailPage } from './app.po';

describe('dojomail App', () => {
  let page: DojomailPage;

  beforeEach(() => {
    page = new DojomailPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});