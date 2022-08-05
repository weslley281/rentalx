import { Category } from "../../entities/category";
import {
  ICaregoriesRepository,
  ICreateCategoryDTO,
} from "../ICaregoriesRepository";

class CategoriesRepository implements ICaregoriesRepository {
  private categories: Category[];

  private static ISNTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.ISNTANCE) {
      CategoriesRepository.ISNTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.ISNTANCE;
  }

  create({ descripition, name }: ICreateCategoryDTO): void {
    //instacia o objeto
    const category = new Category();

    //cria o objeto
    Object.assign(category, {
      name,
      descripition,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesRepository };
