import { Router } from "express";
import { showAllUsers, showUserWithId, showUserWithFilter } from "../controllers/user.controller";

export const UserRoute = () => {
    const router = Router();

    router.get('/all', showAllUsers);
    router.get('/:id', showUserWithId);
    router.get('/', showUserWithFilter);
    // router.get('/users/all');

    return router;
}