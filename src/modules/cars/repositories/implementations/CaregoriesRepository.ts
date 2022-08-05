import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/category";
import {
  ICaregoriesRepository,
  ICreateCategoryDTO,
} from "../ICaregoriesRepository";

class CategoriesRepository implements ICaregoriesRepository {
  private repository: Repository<Category>;

  private static ISNTANCE: CategoriesRepository;

  private constructor() {
    this.repository = getRepository(Category);
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.ISNTANCE) {
      CategoriesRepository.ISNTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.ISNTANCE;
  }

  async create({ descripition, name }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      descripition,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });
    return category;
  }
}

export { CategoriesRepository };
