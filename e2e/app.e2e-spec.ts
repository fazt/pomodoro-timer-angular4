import { TimerExamplePage } from './app.po';

describe('timer-example App', () => {
  let page: TimerExamplePage;

  beforeEach(() => {
    page = new TimerExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
