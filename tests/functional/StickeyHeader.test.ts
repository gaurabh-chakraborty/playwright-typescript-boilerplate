import test from '@lib/BaseTest';

test(`Stickey Header`,async({ stickyHeader})=>{
   await  stickyHeader.NavigateToURL();
   await stickyHeader.NativeBaseLogo();
})