import { chromium } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const baseUrl = process.env.DESIGN_REVIEW_BASE_URL || "http://localhost:4173";
const outputDir = path.resolve("qa/design-review/current");

const routes = [
  { slug: "home", path: "/" },
  { slug: "mitgruenden", path: "/mitgruenden" },
  { slug: "hof-gesucht", path: "/hof-gesucht" },
  { slug: "kontakt", path: "/kontakt" }
];

const viewports = [
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1440, height: 900 },
  { width: 375, height: 812 },
  { width: 430, height: 932 },
  { width: 1280, height: 800 },
  { width: 1728, height: 1117 }
];

const mobileMenuViewports = viewports.filter((viewport) => viewport.width <= 430);
const desktopViewports = viewports.filter((viewport) => viewport.width >= 1024);

function sizeName({ width, height }) {
  return `${width}x${height}`;
}

async function preparePage(page, routePath) {
  const response = await page.goto(`${baseUrl}${routePath}`, { waitUntil: "networkidle" });

  if (!response || !response.ok()) {
    throw new Error(`Route ${routePath} returned ${response ? response.status() : "no response"}`);
  }

  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(200);
}

async function screenshot(page, filename, fullPage = false) {
  const filepath = path.join(outputDir, filename);
  await page.screenshot({ path: filepath, fullPage });
  return filepath;
}

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });

  const browser = await chromium.launch();
  const writtenFiles = [];
  const consoleErrors = [];

  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 1
    });
    const page = await context.newPage();

    page.on("console", (message) => {
      if (message.type() === "error") {
        consoleErrors.push(`${sizeName(viewport)} ${message.text()}`);
      }
    });

    page.on("pageerror", (error) => {
      consoleErrors.push(`${sizeName(viewport)} ${error.message}`);
    });

    for (const route of routes) {
      await preparePage(page, route.path);
      writtenFiles.push(await screenshot(page, `${route.slug}-${sizeName(viewport)}-above-fold.png`));

      await preparePage(page, route.path);
      writtenFiles.push(await screenshot(page, `${route.slug}-${sizeName(viewport)}-fullpage.png`, true));
    }

    await context.close();
  }

  for (const viewport of mobileMenuViewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 1
    });
    const page = await context.newPage();

    await preparePage(page, "/");
    await page.locator(".menu-button").click();
    await page.waitForTimeout(200);
    writtenFiles.push(await screenshot(page, `home-mobile-menu-open-${sizeName(viewport)}.png`));
    await context.close();
  }

  for (const viewport of desktopViewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 1
    });
    const page = await context.newPage();

    await preparePage(page, "/");
    writtenFiles.push(await screenshot(page, `home-desktop-hero-transparent-${sizeName(viewport)}.png`));

    await page.evaluate(() => window.scrollTo(0, 260));
    await page.waitForTimeout(300);
    writtenFiles.push(await screenshot(page, `home-desktop-header-scrolled-${sizeName(viewport)}.png`));
    await context.close();
  }

  await browser.close();

  if (consoleErrors.length > 0) {
    throw new Error(`Browser console errors detected:\n${consoleErrors.join("\n")}`);
  }

  console.log(`Created ${writtenFiles.length} screenshots in ${outputDir}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
