import test from "@lib/BaseTest";
import { InstallationPage } from "@pages/InstallationPage";
test(`Installation`, async ({ installationPage }) => {
  await installationPage.NavigateToURL();
  await installationPage.VerifyTitle();
  await installationPage.ExpoLink();
  await installationPage.NavigateToURL();
  await installationPage.ReactNativeWebLink();
  await installationPage.NavigateToURL();
  await installationPage.NativeBaseVSCodeExtensionsLink();
  await installationPage.NavigateToURL();
  await installationPage.InstallInExpoProjectButton();
  await installationPage.PreviousButton();
  await installationPage.NavigateToURL();
  await installationPage.NextButton();
  await installationPage.NavigateToURL();
});
