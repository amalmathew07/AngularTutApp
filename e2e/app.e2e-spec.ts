import { PremierLeaguePage } from './app.po';

describe('premier-league App', () => {
  let page: PremierLeaguePage;

  beforeEach(() => {
    page = new PremierLeaguePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
