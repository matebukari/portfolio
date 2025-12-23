import { webkit } from "playwright";

const url = "http://localhost:5173/";

const browser = await webkit.launch({
  headless: false,
});

const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
});

await page.goto(url, { waitUntil: "networkidle" });

console.log("Opened in WebKit:", url);

