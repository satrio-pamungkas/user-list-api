import puppeteer from "puppeteer";

export const exportPDF = async () => {
    const browser: any = await puppeteer.launch();
    const page: any = await browser.newPage();
    await page.goto('https://google.com', { waitUntil: 'networkidle0' });
    const pdf: any = await page.pdf({ format: 'A4' });
    await browser.close();

    return pdf;
}

