import { Request, Response } from "express";
import { ProfileUserMessageService } from "../services/ProfileUserMessageService";

class ProfileUserMessageController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;
        
        const service = new ProfileUserMessageService();

        const result = await service.execute(user_id);

        return response.json(result);
    }
}

export { ProfileUserMessageController }