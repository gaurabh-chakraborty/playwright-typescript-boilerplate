export class InstallationPageObjects {
  protected static InstallationTitle = `//div[@id='page-title']`;
  protected static ExpoLink = `(//*[contains(text(),'Expo')])[1]`;
  protected static ReactNativeWebLink = `//span[contains(text(),'react-native-web')]`;
  protected static NativeBaseVSCodeExtensionsLink = `//span[contains(text(),'NativeBase VS Code Extensions')]`;

  //widget 1
  protected static InstallInExpoProjectButton = `//div[contains(text(),'Follow this guide to install NativeBase in your existing or new Expo project')]`;
  protected static NewProject = `//div[contains(text(),'New Project')]`;
  protected static PlainJavascript = `//div //div[contains(text(),'Plain Javascript')]/following-sibling::div/child::pre/child::div/child::pre/child::div`;
  protected static WithTypescript = `//div //div[contains(text(),'With Typescript')]/following-sibling::div/child::pre/child::div/child::pre/child::div`;
  protected static ExistingProject = `//div[contains(text(),'Existing Project')]`;
  protected static CreateNewExpoCodeSnippet = `//*[@id="scrollview-id"]/div/div[1]/div[3]/div[2]/div/div/div[4]/pre[1]/div/pre`;
  protected static ReferThisLink = `//span[contains(text(),'Refer this link')]`;
  protected static yarn = `//div[contains(text(),'yarn')]`;
  protected static yarnAddCommand = `//span[contains(text(),'yarn add native')]/parent::div`;
  protected static expoInstallSvgCommand = `(//span[contains(text(),'expo install react')])[1]/parent::div`;
  protected static expoInstallSafeAreaCommand = `(//span[contains(text(),'expo install react')])[2]/parent::div`;
  protected static npm = `//div[contains(text(),'npm')]`;
  protected static npmInstallCommand = `(//span[contains(text(),'npm install')])[2]/parent::div`;
  protected static CustomizeNativebaseProvider = `//div[contains(text(),'Customize NativeBaseProvider')]`;
  protected static Theme = `//div[contains(text(),'Read more about the default NativeBase theme and h')]`;
  protected static UtilityProps = `//div[contains(text(),'Utility props')]`;

  //widget 2
  protected static InstallInReactNativeProjectButton = `//div[contains(text(),'Install in React Native project')]`;
  protected static PlainJavascriptCommand =
    '//body/div[@id="__next"]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[3]/div[4]/pre[1]/div[1]/pre[1]';
  //`(//div//div[contains(text(),'Plain Javascript')]/following-sibling::div/child::pre/child::div/child::pre/child::div)[1]`;
  protected static TypescriptCommand = `//div //div[contains(text(),'With Typescript')]/following-sibling::div/child::pre/child::div/child::pre/child::div`;
  protected static CreateNewProjectIfNotExistCodeSnippet = `//span[contains(text(),'npx react')]/parent::div/parent::pre`;
  protected static yarnCommand = `//span[contains(text(),'yarn add native')]/parent::div`;
  protected static RunPodInstallCommand = `//span[contains(text(),'cd ios')]/parent::div/parent::pre`;
  protected static npmInstallCommand2 = `//span[contains(text(),'npm install native')]/parent::div`;

  //widget 3
  protected static InstallInNextjsProjectButton = `//div[contains(text(),'Install in Next.js project')]`;

  //widget 4
  protected static InstallInCreateReactAppProjectButton = `//div[contains(text(),'Install in Create React App project')]`;

  protected static PreviousButton = `//div[contains(text(),'Previous')]`;
  protected static NextButton = `(//div[contains(text(),'Setup NativeBase Provider')])[2]`;
}
