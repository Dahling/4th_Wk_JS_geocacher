import { PuzzlePiecesPage } from './app.po';

describe('puzzle-pieces App', () => {
  let page: PuzzlePiecesPage;

  beforeEach(() => {
    page = new PuzzlePiecesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
