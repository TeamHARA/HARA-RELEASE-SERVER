import { Router } from "express";
import { userController } from "../controller";


const router = Router();

router.get("/:userId", userController.getUserById);
router.post("/",userController.createUser);

export default router;