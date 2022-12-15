import test from "@lib/BaseTest";
import { InstallationPage } from "@pages/InstallationPage";
test(`Installation`, async ({ installationPage }) => {
  await installationPage.NavigateToURL();
  await installationPage.VerifyTitle();
});
