import { ImportCategoryController } from "./importCategoryController";
import { ImportCategoryUseCase } from "./importCategoryUseCase";
import { CategoriesRepository } from "../../repositories/implementations/CaregoriesRepository";

const categoryRepository = CategoriesRepository.getInstance()
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
const importCaregoryController = new ImportCategoryController(importCategoryUseCase);

export {importCaregoryController}