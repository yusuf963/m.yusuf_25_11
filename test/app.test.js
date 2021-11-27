const puppeteer = require('puppeteer');
let browser, page;
beforeEach(async () => {
  browser = await puppeteer.launch({
    // dumpio: true,
    headless: false,
    slowMo: 10,
    args: ['--window-size=1920,1080'],
  });
  page = await browser.newPage();
  await page.goto('http://localhost:3000/');
});
afterEach(async () => {
  await browser.close();
});

//Test that page has Home page and it has contents
test('Check home page its contains header', async () => {
  // await page.waitForSelector('h3');
  const paragraph = await page.$eval('p', (e) => e.innerHTML);
  expect(paragraph).toEqual('Lead tech-co in Fashion Industery');
});

// Test that WebApp has a Navigation bar
test('Check WebApp its contains header/nav', async () => {
  const nav = await page.$eval('.navbar', (div) => div.innerHTML);
  const navComponent =
    '<div class="container-fluid"><a class="navbar-brand" href="/">Home</a><ul class="list navbar-nav me-auto mb-2 mb-lg-0">' +
    '<li class="nav-item"><a class="nav-link active" aria-current="page" href="/garments">Collections</a></li><li class="nav-item">' +
    '<a class="nav-link" href="http://www.intelistyle.com/" target="_blank" rel="noopener noreferrer">InteliStyle Official</a></li></ul>' +
    '<ul class="sign-in navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link active" aria-current="page" href="/garments">Sign In</a></li></ul></div>';
  expect(nav).toEqual(navComponent);
});
// Test that WebApp has a Footer and it has contents and functionality
test('check if web App its contains footer', async () => {
  const footer = await page.$eval('.d-flex', (div) => div.innerHTML);
  const footerComponent =
    '<footer class="w-100 py-4 flex-shrink-0"><div class="container py-4"><div class="row gy-4 gx-5"><div class="col-lg-4 col-md-6"><h5 class="h1 text-white">Intelistyle.</h5><p class="small text-muted">Personalize customer experience with the leading A.I. styling platform.</p><p class="small text-muted mb-0">© Copyrights. All rights reserved.<a class="text-primary" href="http://www.intelistyle.com/" target="_blank" rel="noopener noreferrer">www.intelistyle.com</a></p></div><div class="col-lg-2 col-md-6"><h5 class="text-white mb-3">Quick links</h5><ul class="list-unstyled text-muted"><li><a href="/">Home</a></li><li><a href="/garments">Collections</a></li><li><a href="/">Get started</a></li><li><a href="/">FAQ</a></li></ul></div><div class="col-lg-4 col-md-6"><h5 class="text-white mb-3">Newsletter</h5><p class="small text-muted">Increase retention and repeat purchases by suggesting outfits and clothes that complement past purchases.</p><form action="/"><div class="input-group mb-3"><input class="form-control" type="text" placeholder="Recipient\'s username" aria-label="Recipient\'s username" aria-describedby="button-addon2"><button class="btn btn-primary" id="button-addon2" type="button">&gt;</button></div></form></div></div></div></footer>';
  expect(footer).toEqual(footerComponent);
});
//click on hyper link on image on the homepage screen & direct user to garments page
test('Home page has a clickable image to navigate user to the garments page', async () => {
  await page.click('.background-image');
  const url = await page.url();
  expect(url).toEqual('http://localhost:3000/garments');
});

// go to garments page and check if the page has a search bar and type a string to search and get a match return of the search result
test('garments opage has a serach input and check the value', async () => {
  await page.goto('http://localhost:3000/garments');
  await page.waitForSelector('.search');
  await page.type('input', 'H&M - Straw Hat - Beige');
  const input = await page.$eval('input', (e) => e.value);
  await expect(input).toEqual('H&M - Straw Hat - Beige');
  const collection = await page.$$('.collection-item');
  await expect(collection.length).toEqual(2);
});
