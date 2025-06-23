import { UserCreate } from "../interfaces/user.interface";
import { UserRepositoryPrisma } from "../repositories/user.repository";

class UserUseCase{
    private UserRepository: UserRepositoryPrisma;
    constructor(){
        this.UserRepository = new UserRepositoryPrisma();
    }

    async create({name, CPF}: UserCreate): Promise<User>{

    }
}

export { UserUseCase };