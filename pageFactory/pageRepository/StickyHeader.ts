import { WebActions } from "@lib/WebActions";
import { StickeyHeaderObjects } from "@objects/StickyHeaderNBObjects";
import { Page } from "@playwright/test";

let webActions: WebActions;

export class StickyHeader extends StickeyHeaderObjects{
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async NavigateToURL():Promise<void>{
        await webActions.navigateToURL(`https://docs.nativebase.io`);
        await webActions.verifyElementText(StickeyHeaderObjects.title,`Getting Started`);
    }
    
    async NativeBaseLogo():Promise<void>{
        await webActions.clickElement(StickeyHeaderObjects.NativeBase);
     
    }
}