import express from "express";
import { getUsersForSidebar, markMessageAsSeen } from "../controllers/messageController";
import { protectRoute } from "../middleware/auth";

const messageRouter = express.Router();

messageRouter.get("/users", protectRoute, getUsersForSidebar);
messageRouter.get("/:id", protectRoute, getUsersForSidebar);
messageRouter.put("mark/:id", protectRoute, markMessageAsSeen);

export default messageRouter;