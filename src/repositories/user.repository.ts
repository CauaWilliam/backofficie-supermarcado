import { User, UserCreate, UserRepository } from '../interfaces/user.interface';

class UserRepositoryPrisma implements UserRepository {
  create(data: UserCreate): Promise<User> {

  }
}

export { UserRepositoryPrisma };