import { DaocApiPage } from './app.po';

describe('daoc-api App', () => {
  let page: DaocApiPage;

  beforeEach(() => {
    page = new DaocApiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
