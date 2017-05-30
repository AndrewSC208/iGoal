import { IGoalPage } from './app.po';

describe('i-goal App', () => {
  let page: IGoalPage;

  beforeEach(() => {
    page = new IGoalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
