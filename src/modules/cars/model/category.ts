import { v4 as uuidv4 } from "uuid";

class Category{
    id?: string;
    name: string;
    descripition: string;
    create_at: Date;

    constructor(){
        //se não tiver um id ou for um novo objeto
        if(!this.id){
            this.id = uuidv4();
        }
    }
}

export { Category }