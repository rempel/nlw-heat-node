import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageController {
    async handle(request: Request, response: Response) {
        const { message } = request.body;
        const user_id = ;

        const service = new CreateMessageService();

        try {
            const result = await service.execute(code);
            return response.json(result);
        } catch (error) {
            return response.json({error: error.message});
        }
    }
}

export { CreateMessageController }