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

  //widget 1
  await installationPage.InstallInExpoProjectButton();
  await installationPage.CustomizeNativebaseProvider();
  await installationPage.navigateToInstallExpo();
  await installationPage.Theme();
  await installationPage.navigateToInstallExpo();
  await installationPage.UtilityProps();
  await installationPage.navigateToInstallExpo();
  await installationPage.PreviousButtonOfInstallinPages();

  //widget 2
  await installationPage.InstallInReactNativeProjectButton();
  await installationPage.CustomizeNativebaseProvider();
  // await installationPage.navigateToInstallinReactNative;
  await installationPage.Theme();
  //await installationPage.navigateToInstallinReactNative;
  await installationPage.UtilityProps();
  // await installationPage.navigateToInstallinReactNative;
  await installationPage.PreviousButtonOfInstallinPages();

  //widget 3

  //widget 4

  await installationPage.PreviousButton();
  await installationPage.NavigateToURL();
  await installationPage.NextButton();
  await installationPage.NavigateToURL();
});
