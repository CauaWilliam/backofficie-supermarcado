// ficará responsavel pelas rotas e controller do usuário
import { FastifyInstance } from "fastify";
import { UserUseCase } from "../usecases/user.usecases";
import { UserCreate } from "../interfaces/user.interface";

export function userRoutes(fastify: FastifyInstance){

    const userUseCase = new UserUseCase();

    fastify.post<{ Body: UserCreate}>('/' , (req, reply) => {
        const {name, CPF} = req.body;

        try{
            const data = userUseCase.create({
              name: req.body.name,
              CPF: req.body.CPF   
             })
             return reply.send(data)
        }catch (error) {
            reply.send(error)
        }
    })
}