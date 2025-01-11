import express from "express";
import "dotenv/config";
import cors from "cors";
import ENV from "./config/ENV.js";
import logger from "./utils/logger.js";
import gameRouter from "./api/v1/game/index.js";
import morganMiddleware from "./middleware/morgan.middleware.js";
const app = express();
const PORT = process.env.PORT || 4000;
// * Middleware
app.use(cors({
    origin: ENV.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morganMiddleware);
// * Routes
app.use("/api/v1/game", gameRouter);
app.get("/", (req, res) => {
    return res.send("It's working 🙌");
});
app.listen(ENV.PORT, () => logger.info(`Server is running on PORT ${PORT}`));
