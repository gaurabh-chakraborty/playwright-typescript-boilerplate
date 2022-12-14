export class GettingStartedPageObjects {
  protected static GettingStartedTitle = `//div[@id='page-title']`;
  protected static InstallationGuide = `//div[contains(text(),'Installation Guide')]`;
  protected static InstallationTitle = `(//div[contains(text(),'Installation')])[1]`;
  protected static Playground = `//div[contains(text(),'Playground')]`;
  protected static Theming = `//div[contains(text(),'Theming')]`;
  protected static DefaultThemeTitle = `(//div[contains(text(),'Default Theme')])[1]`;

  protected static Recipes = `//div[contains(text(),'Popular Recipes for Apps')]`;
  protected static LoginSignUpFormsTitle = `(//div[contains(text(),'Login/Signup Forms')])[1]`;
  protected static NextButton = `(//a[@href='/installation'])[3]`;
}
