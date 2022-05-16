import { Router } from "express";
import { showAllUsers, showUserWithId, showUserWithFilter } from "../controllers/user.controller";
import { checkCacheAvailable } from "../middlewares/cache.verify";

export const UserRoute = () => {
    const router = Router();

    router.get('/all', checkCacheAvailable, showAllUsers);
    router.get('/:id', showUserWithId);
    router.get('/', showUserWithFilter);
    
    return router;
}