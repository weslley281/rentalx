import { Response, Request } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController{
    constructor(private createCategoryUseCase: CreateCategoryUseCase){}

    handle(request: Request, response: Response): Response{

        const { name, descripition } = request.body;

        this.createCategoryUseCase.execute({name, descripition});
        
        return response.status(201).send();
    }
}

export {CreateCategoryController};