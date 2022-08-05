import { Category } from "../entities/category";

interface ICreateCategoryDTO {
  name: string;
  descripition: string;
}

interface ICaregoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, descripition }: ICreateCategoryDTO): void;
}

export { ICaregoriesRepository, ICreateCategoryDTO };
