import { Router } from "express";
import { registerController } from "../controllers/user.controllers.js";
const userRouter = Router();
/**
 * DESC    Register a new user
 * Path:   /register
 * Method  POST
 * Body:   {name: string, email: string, password: string, confirm_password: string, date_of_birth: ISO8601}
 * Access  None
 */
userRouter.post("/register", registerController);

export default userRouter;
