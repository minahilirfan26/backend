import { Router } from "express";
import get from "./controllers/get.js";
import post from "./controllers/post.js";
import del from "./controllers/delete.js";
import update from "./controllers/update.js";

const userRouter = Router()

userRouter.get('/', get)
userRouter.post('/', post)
userRouter.delete('/:id', del)
userRouter.put('/:id', update)

// userRouter.post('/', )

export default userRouter