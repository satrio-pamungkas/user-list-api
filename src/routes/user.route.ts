import { Router } from "express";
import { showAllUsers, showUserWithId, showUserWithRange } from "../controllers/user.controller";

export const UserRoute = () => {
    const router = Router();

    router.get('/all', showAllUsers);
    router.get('/:id', showUserWithId);
    router.get('/', showUserWithRange);
    // router.get('/users/all');

    return router;
}