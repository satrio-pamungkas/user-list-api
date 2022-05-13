import { Router } from "express";
import { showAllUsers } from "../controllers/user.controller";

export const UserRoute = () => {
    const router = Router();

    router.get('/all', showAllUsers);
    // router.get('/users/:id');
    // router.get('/users/all');

    return router;
}