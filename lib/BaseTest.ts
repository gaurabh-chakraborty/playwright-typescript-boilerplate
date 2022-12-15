<<<<<<< HEAD
import { test as baseTest } from "@playwright/test";
import { LoginPage } from "@pages/LoginPage";
import { MyAccountPage } from "@pages/MyAccountPage";
import { MyAddressesPage } from "@pages/MyAddressesPage";
import { MyPersonalInformationPage } from "@pages/MyPersonalInformationPage";
import { GettingstartedPage } from "@pages/GettingStartedPage";
import { InstallationPage } from "@pages/InstallationPage";

const test = baseTest.extend<{
  loginPage: LoginPage;
  myAccountPage: MyAccountPage;
  myAddressesPage: MyAddressesPage;
  myPersonalInformationPage: MyPersonalInformationPage;
  gettingStartedPage: GettingstartedPage;
  installationPage: InstallationPage;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  myAccountPage: async ({ page }, use) => {
    await use(new MyAccountPage(page));
  },
  myAddressesPage: async ({ page }, use) => {
    await use(new MyAddressesPage(page));
  },
  myPersonalInformationPage: async ({ page }, use) => {
    await use(new MyPersonalInformationPage(page));
  },
  gettingStartedPage: async ({ page }, use) => {
    await use(new GettingstartedPage(page));
  },
  installationPage: async ({ page }, use) => {
    await use(new InstallationPage(page));
  },


=======
import { test as baseTest } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { MyAccountPage } from '@pages/MyAccountPage';
import { MyAddressesPage } from '@pages/MyAddressesPage'
import { MyPersonalInformationPage } from '@pages/MyPersonalInformationPage';
import { StickyHeader } from '@pages/StickyHeader';

const test = baseTest.extend<{
    loginPage: LoginPage;
    myAccountPage: MyAccountPage;
    myAddressesPage: MyAddressesPage;
    myPersonalInformationPage: MyPersonalInformationPage;
    stickyHeader: StickyHeader


}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    myAccountPage: async ({ page }, use) => {
        await use(new MyAccountPage(page));
    },
    myAddressesPage: async ({ page }, use) => {
        await use(new MyAddressesPage(page));
    },
    myPersonalInformationPage: async ({ page }, use) => {
        await use(new MyPersonalInformationPage(page));
    },
    stickyHeader: async({page},use)=>{
        await use(new StickyHeader(page));
    }
>>>>>>> e180b4f1c165114bd023405dac3c8d577f6e9a05
});

export default test;
