import { PowerCounterPage } from './app.po';

describe('power-counter App', () => {
  let page: PowerCounterPage;

  beforeEach(() => {
    page = new PowerCounterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});