import { InstallationPageObjects } from "@objects/InstallationPage.Objects";
import { WebActions } from "@lib/WebActions";
import { expect, Page } from "@playwright/test";
import { testConfig } from "../../testConfig";
let webActions: WebActions;
export class InstallationPage extends InstallationPageObjects {
  readonly page: Page;

  constructor(page: Page) {
    super();
    this.page = page;
    webActions = new WebActions(this.page);
  }

  async NavigateToURL(): Promise<void> {
    await webActions.navigateToURL(`https://docs.nativebase.io/installation`);
  }
  async VerifyTitle(): Promise<void> {
    await webActions.verifyElementText(
      InstallationPageObjects.InstallationTitle,
      "Installation"
    );
  }
  //   async InstallationGuideWidget(): Promise<void> {
  //     await webActions.clickElement(GettingStartedPageObjects.InstallationGuide);
  //   }

  //   async VerifyInstallationTitle(): Promise<void> {
  //     await webActions.verifyElementText(
  //       GettingStartedPageObjects.InstallationTitle,
  //       "Installation"
  //     );
  //   }
  //   async PlaygroundWidget(): Promise<void> {
  //     await webActions.clickElement(GettingStartedPageObjects.Playground);
  //     await expect(this.page).toHaveURL(
  //       "https://snack.expo.dev/@native-base/nativebase-playground"
  //     );
  //     await this.page.bringToFront();
  //   }
  //   //   async VerifyPlaygroundURL(): Promise<void> {
  //   //     await this.page.bringToFront();

  //   async ThemingWidget(): Promise<void> {
  //     await webActions.clickElement(GettingStartedPageObjects.Theming);
  //   }
  //   async VerifyDefaultThemeTitle(): Promise<void> {
  //     await webActions.verifyElementText(
  //       GettingStartedPageObjects.DefaultThemeTitle,
  //       "Default Theme"
  //     );
  //   }

  //   async RecipesWidget(): Promise<void> {
  //     await webActions.clickElement(GettingStartedPageObjects.Recipes);
  //   }
  //   async VerifyLoginSignupFormsTitle(): Promise<void> {
  //     await webActions.verifyElementText(
  //       GettingStartedPageObjects.LoginSignUpFormsTitle,
  //       "Login/Signup Forms"
  //     );
  //   }
  //   async NextButton(): Promise<void> {
  //     await webActions.clickElement(GettingStartedPageObjects.NextButton);
  //   }
  //   async VerifyNextButtonTitle(): Promise<void> {
  //     await webActions.verifyElementText(
  //       GettingStartedPageObjects.InstallationTitle,
  //       "Installation"
  //     );
}
