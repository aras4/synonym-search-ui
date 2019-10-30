import { SynonymSearchUiPage } from './app.po';

describe('synonym-search-ui App', () => {
  let page: SynonymSearchUiPage;

  beforeEach(() => {
    page = new SynonymSearchUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
