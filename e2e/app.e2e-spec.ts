import { RecipeNewPage } from './app.po';

describe('recipe-new App', () => {
  let page: RecipeNewPage;

  beforeEach(() => {
    page = new RecipeNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
