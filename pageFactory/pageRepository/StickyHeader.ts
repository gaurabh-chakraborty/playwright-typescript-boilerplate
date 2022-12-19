import { WebActions } from "@lib/WebActions";
import { StickeyHeaderObjects } from "@objects/StickyHeaderNBObjects";
import { Page,Browser,BrowserContext } from "@playwright/test";

let webActions: WebActions;

export class StickyHeader extends StickeyHeaderObjects{
    browser :Browser;
    context: BrowserContext;
    page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        this.context=this.context;
        this.browser=this.browser;
        webActions = new WebActions(this.page);
    }

    async NavigateToURL():Promise<void>{
        await webActions.navigateToURL(`https://docs.nativebase.io`);
        await webActions.verifyElementText(StickeyHeaderObjects.title,`Getting Started`);
    }
    
    async NativeBaseLogo():Promise<void>{
        await webActions.clickElement(StickeyHeaderObjects.NativeBase);
        await this.page.goBack();
    }

    async Startup(): Promise <void>{
        const [newWindow] = await Promise.all([
            this.context.waitForEvent("page"),
            await webActions.clickElement(StickeyHeaderObjects.startup)
        ])
       //  await newWindow.waitForLoadState();
         await newWindow.close();
         await this.page.bringToFront();
    }
}