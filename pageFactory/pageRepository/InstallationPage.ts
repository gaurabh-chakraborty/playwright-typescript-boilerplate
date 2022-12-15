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
  async ExpoLink(): Promise<void> {
    await webActions.clickElement(InstallationPageObjects.ExpoLink);
    await expect(this.page).toHaveURL(
      "https://docs.expo.dev/get-started/installation/"
    );
  }

  async ReactNativeWebLink(): Promise<void> {
    await webActions.clickElement(InstallationPageObjects.ReactNativeWebLink);
    await expect(this.page).toHaveURL(
      "https://necolas.github.io/react-native-web/"
    );
  }

  async NativeBaseVSCodeExtensionsLink(): Promise<void> {
    await webActions.clickElement(
      InstallationPageObjects.NativeBaseVSCodeExtensionsLink
    );
    await expect(this.page).toHaveURL(
      "https://marketplace.visualstudio.com/items?itemName=NativeBase.nativebase-v3-vscode-extension"
    );
  }

  async InstallInExpoProjectButton(): Promise<void> {
    await webActions.clickElement(
      InstallationPageObjects.InstallInExpoProjectButton
    );
    await expect(this.page).toHaveURL(
      "https://docs.nativebase.io/install-expo"
    );
  }

  //previous Button
  async PreviousButton(): Promise<void> {
    await webActions.clickElement(InstallationPageObjects.PreviousButton);
    await expect(this.page).toHaveURL(
      "https://docs.nativebase.io/getting-started"
    );
  }

  //Next Button
  async NextButton(): Promise<void> {
    await webActions.clickElement(InstallationPageObjects.NextButton);
    await expect(this.page).toHaveURL(
      "https://docs.nativebase.io/setup-provider"
    );
  }

  //    async VerifyInstallationTitle(): Promise<void> {
  //       await webActions.verifyElementText(
  //          GettingStartedPageObjects.InstallationTitle,
  //          "Installation"
  //       );
  //     }
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
