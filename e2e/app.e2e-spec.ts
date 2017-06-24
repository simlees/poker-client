import { PokerClientPage } from './app.po';

describe('poker-client App', () => {
  let page: PokerClientPage;

  beforeEach(() => {
    page = new PokerClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
