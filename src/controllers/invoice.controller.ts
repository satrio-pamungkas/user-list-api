import { Request, Response } from 'express';
import { exportPDF } from '../services/invoice.service';

export const PrintInvoice = async (req: Request, res: Response) => {
    try {
        const pdf: any = await exportPDF();
        res.set({
            'Content-Type' : 'application/pdf', 'Content-Length' : pdf.length
        });

        return res.send(pdf);
    } catch (error: any) {
        
        return res.status(404).json({ message: error.message })
    }
}