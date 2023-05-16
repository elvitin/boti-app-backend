import { Router } from "express";
import personController from "../controllers/PersonController.js";

const router = new Router();

router.get("/", personController.create);
router.delete("/:id", personController.delete);

export default router;
