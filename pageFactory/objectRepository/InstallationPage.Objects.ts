export class InstallationPageObjects {
  protected static InstallationTitle = `//div[@id='page-title']`;
  protected static ExpoLink = `(//*[contains(text(),'Expo')])[1]`;
  protected static ReactNativeWebLink = `//span[contains(text(),'react-native-web')]`;
  protected static NativeBaseVSCodeExtensionsLink = `//span[contains(text(),'NativeBase VS Code Extensions')]`;

  protected static InstallInExpoProjectButton = `//div[contains(text(),'Follow this guide to install NativeBase in your existing or new Expo project')]`;

  protected static InstallInReactNativeProjectButton = `//div[contains(text(),'Install in React Native project')]`;

  protected static InstallInNextjsProjectButton = `//div[contains(text(),'Install in Next.js project')]`;

  protected static InstallInCreateReactAppProjectButton = `//div[contains(text(),'Install in Create React App project')]`;

  protected static PreviousButton = `//div[contains(text(),'Previous')]`;
  protected static NextButton = `(//div[contains(text(),'Setup NativeBase Provider')])[2]`;
}
