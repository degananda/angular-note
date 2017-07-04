import { AngularNotePage } from './app.po';

describe('angular-note App', () => {
  let page: AngularNotePage;

  beforeEach(() => {
    page = new AngularNotePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
