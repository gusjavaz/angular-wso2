import { EmpleadosPage } from './app.po';

describe('empleados App', function() {
  let page: EmpleadosPage;

  beforeEach(() => {
    page = new EmpleadosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
