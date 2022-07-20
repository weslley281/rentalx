import { CategoriesRepository } from "../../repositories/implementations/caregoriesRepository";
import { CreateCategoryController } from "./createCategoryController";
import { CreateCategoryUseCase } from "./createCategoryUseCase";

const caregoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(caregoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export {createCategoryController};