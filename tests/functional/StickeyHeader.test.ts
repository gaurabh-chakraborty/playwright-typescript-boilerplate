import test from '@lib/BaseTest';
import { Browser, BrowserContext, chromium, Page } from '@playwright/test';


test.describe('Stickey',()=>{ 
   
   let browser :Browser;
   let context: BrowserContext;
   let page: Page;
   
   test.beforeAll(async()=>{
   await page.goto("https://docs.nativebase.io");
})
test(`Stickey Header`,async({ stickyHeader})=>{
  // await  stickyHeader.NavigateToURL();
   await stickyHeader.NativeBaseLogo();
   await stickyHeader.Startup();
})

})




