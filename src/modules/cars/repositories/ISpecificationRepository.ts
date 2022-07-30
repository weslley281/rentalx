import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO{
    name: string;
    descripition: string;
}
interface ISpecificationRepository{
    
    create({descripition, name}: ICreateSpecificationDTO): void;
    findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecificationDTO};