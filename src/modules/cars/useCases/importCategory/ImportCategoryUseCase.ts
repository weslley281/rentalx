import fs from "fs";
import { parse as csvParse } from "csv-parse";
import { ICaregoriesRepository } from "../../repositories/ICaregoriesRepository";

interface IImportCategory{
    name: string;
    descripition: string;
}
class ImportCategoryUseCase{
    constructor(private categoryRepository: ICaregoriesRepository){}

    loadCategories(file: Express.Multer.File): Promise<IImportCategory>{
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories:IImportCategory[] = [];

            const parseFile = csvParse();

            stream.pipe(parseFile);

            parseFile.on("data", async (line) => {
                const [name, descripition] = line;
                categories.push({
                    name,
                    descripition
                });
            })
            .on("end", () => {
                resolve(categories);
            })
            .on("error", (err) => {
                reject(err);
            });
        });
    }

    async execute(file: Express.Multer.File): Promise<void>{
        const categories = await this.loadCategories(file);
        
        categories.map(async (category) => {
            const { name, descripition } = category;

            const existCategory = this.categoryRepository.findByName(name);

            //console.log("Existe Categoria = " + existCategory);

            if(!existCategory){
                this.categoryRepository.create({
                    name,
                    descripition,
                });
            }
        });
    }
}

export {ImportCategoryUseCase}