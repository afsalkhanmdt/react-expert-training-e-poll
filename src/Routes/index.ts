import { Router } from "express";
import Auth from "./Auth";
import Shop from "./Shop";
import Utils from "./Utils";
import Admin from "./Admin";
import { authMiddleware } from "../Utils";

const router = Router();

router.use("/auth", Auth);
router.use("/admin",authMiddleware("admin"), Admin);
router.use("/utils", Utils);
router.use("/shop", Shop);

export default router;
