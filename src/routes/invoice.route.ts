import { Router } from "express";
import { PrintInvoice, RenderTable } from "../controllers/invoice.controller";

export const InvoiceRouter = () => {
    const router = Router();

    router.get('/', PrintInvoice);
    router.get('/test', RenderTable);

    return router;
}