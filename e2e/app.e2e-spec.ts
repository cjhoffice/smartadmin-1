import { NewCliTestPage } from './app.po';

describe('new-cli-test App', function() {
  let page: NewCliTestPage;

  beforeEach(() => {
    page = new NewCliTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
