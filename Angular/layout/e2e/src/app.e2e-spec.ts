
importimport  {{ LayoutPage  LayoutPage } from './app.po';

describe('layout App', () => {
  let page: LayoutPage;

  beforeEach(() => {
    page = new LayoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});