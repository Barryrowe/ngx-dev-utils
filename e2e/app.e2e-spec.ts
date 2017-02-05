import { NgxDevUtilsPage } from './app.po';

describe('ngx-dev-utils App', function() {
  let page: NgxDevUtilsPage;

  beforeEach(() => {
    page = new NgxDevUtilsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
