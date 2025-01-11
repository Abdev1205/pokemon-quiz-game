import { Router } from "express";
import GameController from "../../../controller/game/index.js";

const router = Router();

router.get("/create", GameController.createGame);

export default router;
