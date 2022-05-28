import { Request, response, Response } from 'express';
import { exportPdf, exportPdfWithPuppeteer } from '../services/invoice.service';
import { getAllUsers, getUserByFilter, getUsersByRange } from '../models/user.model';
import ejs from 'ejs';

const headerTable = [
    'First Name',
    'Last Name',
    'Email',
    'Phone Number',
    'Gender',
    'Street Address'
]

export const PrintInvoice = async (req: Request, res: Response) => {
    try {
        const pdf: any = await exportPdf();
        res.set({
            'Content-Type' : 'application/pdf', 'Content-Length' : pdf.length
        });

        return res.send(pdf);
    } catch (error: any) {

        return res.status(404).json({ message: error.message })
    }
}

export const RenderTable = async (req: Request, res: Response) => {
    const data: any = await getUsersByRange(1,10);
    const pathFile: string = __dirname + '/../views/invoice-table.ejs';
    ejs.renderFile(pathFile, { headerTable, data }, (error, html) => {
        if (error) {
            return res.send('Error');
        }

        return res.send(html);
    })

}