import { CategoriesRepository } from "../../repositories/implementations/CaregoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const caregoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(caregoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export {createCategoryController};