import { GeocachesPage } from './app.po';

describe('geo-caches App', () => {
  let page: GeocachesPage;

  beforeEach(() => {
    page = new GeocachesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
