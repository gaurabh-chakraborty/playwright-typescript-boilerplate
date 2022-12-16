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

  //---------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------widget 1--------------------------------------------------------

  async InstallInExpoProjectButton(): Promise<void> {
    await webActions.clickElement(
      InstallationPageObjects.InstallInExpoProjectButton
    );
    await expect(this.page).toHaveURL(
      "https://docs.nativebase.io/install-expo"
    );
    await webActions.clickElement(InstallationPageObjects.NewProject);
    await this.page.isVisible(InstallationPageObjects.PlainJavascript);
    await this.page.isVisible(InstallationPageObjects.WithTypescript);
    await webActions.clickElement(InstallationPageObjects.ExistingProject);
    await this.page.isVisible(InstallationPage.CreateNewExpoCodeSnippet);
    await webActions.clickElement(InstallationPageObjects.ReferThisLink);
    await expect(this.page).toHaveURL("https://docs.expo.dev/index.html");
    await webActions.navigateToURL(`https://docs.nativebase.io/install-expo`);
    await webActions.clickElement(InstallationPageObjects.ExistingProject);
    await webActions.clickElement(InstallationPageObjects.yarn);
    await this.page.isVisible(InstallationPage.yarnAddCommand);
    await this.page.isVisible(InstallationPage.expoInstallSvgCommand);
    await this.page.isVisible(InstallationPage.expoInstallSafeAreaCommand);
    await webActions.clickElement(InstallationPageObjects.npm);
    await this.page.isVisible(InstallationPage.npmInstallCommand);
  }
  async CustomizeNativebaseProvider(): Promise<void> {
    await webActions.clickElement(
      InstallationPageObjects.CustomizeNativebaseProvider
    );
    await expect(this.page).toHaveURL(
      "https://docs.nativebase.io/setup-provider"
    );
    await this.page.goBack();
  }
  async Theme(): Promise<void> {
    await webActions.clickElement(InstallationPageObjects.Theme);
    await expect(this.page).toHaveURL(
      "https://docs.nativebase.io/default-theme"
    );
    await this.page.goBack();
  }
  async UtilityProps(): Promise<void> {
    await webActions.clickElement(InstallationPageObjects.UtilityProps);
    await expect(this.page).toHaveURL(
      "https://docs.nativebase.io/utility-props"
    );
    await this.page.goBack();
  }

  async navigateToInstallExpo(): Promise<void> {
    await webActions.navigateToURL(`https://docs.nativebase.io/install-expo`);
  }
  //---------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------widget 2--------------------------------------------------------

  async InstallInReactNativeProjectButton(): Promise<void> {
    await webActions.clickElement(
      InstallationPageObjects.InstallInReactNativeProjectButton
    );
    await expect(this.page).toHaveURL("https://docs.nativebase.io/install-rn");
    await webActions.clickElement(InstallationPageObjects.NewProject);
    await webActions.clickElement(InstallationPageObjects.ReferThisLink);
    await expect(this.page).toHaveURL(
      "https://github.com/react-native-community/cli#about"
    );
    await webActions.navigateToURL(`https://docs.nativebase.io/install-rn`);
    await this.page.waitForSelector(
      InstallationPageObjects.PlainJavascriptCommand
    );
    await this.page.isVisible(InstallationPageObjects.PlainJavascriptCommand);
    await this.page.isVisible(InstallationPageObjects.TypescriptCommand);
    await webActions.clickElement(InstallationPageObjects.ExistingProject);
    await this.page.isVisible(
      InstallationPageObjects.CreateNewProjectIfNotExistCodeSnippet
    );
    await webActions.clickElement(InstallationPageObjects.yarn);
    await this.page.isVisible(InstallationPageObjects.yarnCommand);
    await this.page.isVisible(InstallationPageObjects.RunPodInstallCommand);
    await webActions.clickElement(InstallationPageObjects.npm);
    await this.page.isVisible(InstallationPageObjects.npmInstallCommand2);
  }
  async navigateToInstallinReactNative(): Promise<void> {
    await webActions.navigateToURL(`https://docs.nativebase.io/install-rn`);
    await this.page.waitForNavigation();
  }
  //---------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------widget 3 --------------------------------------------------------

  //previous button of installation sub pages
  async PreviousButtonOfInstallinPages(): Promise<void> {
    await webActions.clickElement(InstallationPageObjects.PreviousButton);
    await expect(this.page).toHaveURL(
      "https://docs.nativebase.io/installation"
    );
  }

  //previous Button of installation page
  async PreviousButton(): Promise<void> {
    await webActions.clickElement(InstallationPageObjects.PreviousButton);
    await expect(this.page).toHaveURL(
      "https://docs.nativebase.io/getting-started"
    );
  }

  //Next Button of installation page
  async NextButton(): Promise<void> {
    await webActions.clickElement(InstallationPageObjects.NextButton);
    await expect(this.page).toHaveURL(
      "https://docs.nativebase.io/setup-provider"
    );
  }
}
