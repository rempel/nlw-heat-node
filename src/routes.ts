import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessageController } from "./controllers/GetLast3MessagesController";
import { ProfileUserMessageController } from "./controllers/ProfileUserMessageController";
import { ensureAuthenticated } from "./medlleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
    "/messages",
    ensureAuthenticated,
    new CreateMessageController().handle
);

router.get("/messages/last3", new GetLast3MessageController().handle);

router.get("/profile", ensureAuthenticated, new ProfileUserMessageController().handle);

export { router }