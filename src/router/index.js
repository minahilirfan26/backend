import { Router } from "express";
import userRouter from "../modules/users/router.js";
import uploadRouter from "../modules/upload/routes.js";

const router = Router();

router.use('/user', userRouter)
router.use('/upload', uploadRouter)

export default router;