export interface User{
    id: String;
    CPF: String;
    name: String;
}
export interface UserCreate{
    CPF: String;
    name: String;
}

export interface UserRepository{
    create(data: UserCreate): Promise<User>;
}