import test from "@lib/BaseTest";
test(`Getting started`, async ({ gettingStartedPage }) => {
  await gettingStartedPage.NavigateToURL();
  await gettingStartedPage.VerifyTitle();
  await gettingStartedPage.InstallationGuideWidget();
  await gettingStartedPage.VerifyInstallationTitle();
  await gettingStartedPage.NavigateToURL();
  await gettingStartedPage.PlaygroundWidget();
  await gettingStartedPage.NavigateToURL();

  await gettingStartedPage.ThemingWidget();
  await gettingStartedPage.VerifyDefaultThemeTitle();
  await gettingStartedPage.NavigateToURL();
  await gettingStartedPage.RecipesWidget();
  await gettingStartedPage.VerifyLoginSignupFormsTitle();
  await gettingStartedPage.NavigateToURL();
  await gettingStartedPage.NextButton();
  await gettingStartedPage.VerifyNextButtonTitle();
});
