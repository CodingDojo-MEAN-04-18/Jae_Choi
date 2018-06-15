import { TimeZonePage } from './app.po';

describe('time-zone App', () => {
  let page: TimeZonePage;

  beforeEach(() => {
    page = new TimeZonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});