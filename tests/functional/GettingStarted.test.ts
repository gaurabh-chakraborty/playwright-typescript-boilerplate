import test from "@lib/BaseTest";
test(`Getting started`, async ({ gettingStartedpage }) => {
  await gettingStartedpage.NavigateToURL();
  await gettingStartedpage.VerifyTitle();
  await gettingStartedpage.InstallationGuideWidget();
  await gettingStartedpage.VerifyInstallationTitle();
  await gettingStartedpage.NavigateToURL();
  await gettingStartedpage.PlaygroundWidget();
  await gettingStartedpage.NavigateToURL();

  await gettingStartedpage.ThemingWidget();
  await gettingStartedpage.VerifyDefaultThemeTitle();
  await gettingStartedpage.NavigateToURL();
  await gettingStartedpage.RecipesWidget();
  await gettingStartedpage.VerifyLoginSignupFormsTitle();
  await gettingStartedpage.NavigateToURL();
  await gettingStartedpage.NextButton();
  await gettingStartedpage.VerifyNextButtonTitle();
});
