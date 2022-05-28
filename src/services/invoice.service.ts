import puppeteer from "puppeteer";

const exportPdfWithPuppeteer = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/simple-table', { waitUntil: 'networkidle0' });
    const pdf = await page.pdf({ format: 'A4' });

    return pdf;
}

const exportPdf = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:8000/api/v1/print-pdf/test', { waitUntil: 'networkidle0' });
    const pdf = await page.pdf({ format: 'ledger' });

    return pdf;
}

export {
    exportPdfWithPuppeteer,
    exportPdf
};

