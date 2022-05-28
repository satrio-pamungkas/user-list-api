import { Router } from "express";
import { PrintInvoice } from "../controllers/invoice.controller";

export const InvoiceRouter = () => {
    const router = Router();

    router.get('/', PrintInvoice);

    return router;
}