import knex from "knex";
import { BaseDatabase } from "./BaseDatabase";
import { Endereco } from "../business/UserBusiness";



export class UserDatabase extends BaseDatabase {
    [x: string]: any;
   
    private static TABLE_NAME = "User";
    private static CPF_TABLE_NAME = "cpf"
    private static ENDERECO_TABLE_NAME = "endereco"
    private static TELEFONE_TABLE_NAME= "telefone"

    public async createUser(
        id: string,
        email: string,
        password: string
    ): Promise<void> {
        await this.getConnection()
            .insert({
                id,
                email,
                password
            })
            .into(UserDatabase.TABLE_NAME)
    }
    public async addCpf(
        id: string,
        cpf: string
    ): Promise<void> {
        await this.getConnection()
            .insert({
                user_id: id,
                value:cpf,
                updated_at:new Date()     
            })
            .into(UserDatabase.CPF_TABLE_NAME)
    }
    public async addNome(
        id: string,
        nome: string
    ): Promise<void> {
        await this.getConnection()
            .update({
                
                nome     
            }).where({
                id:id
            })
            .into(UserDatabase.TABLE_NAME)
    }
    
    public async addSobreNome(
        id: string,
        sobrenome: string
    ): Promise<void> {
        await this.getConnection()
            .update({
                
                sobrenome     
            }).where({
                id:id
            })
            .into(UserDatabase.TABLE_NAME)
    }

    public async addNascimento(
        id: string,
        nascimento: string
    ): Promise<void> {
        await this.getConnection()
            .update({
                nascimento     
            }).where({
                id:id
            })
            .into(UserDatabase.TABLE_NAME)
    }

    public async addTelefone(
        id: string,
        telefone: number
    ): Promise<void> {
        await this.getConnection()
            .insert({
                user_id: id,
                value: telefone,
                updated_at: new Date()     
            })
            .into(UserDatabase.TELEFONE_TABLE_NAME)
    }
    public async addEndereco(
        id: string,
        endereco: Endereco
    ): Promise<void> {
        await this.getConnection()
            .insert({
                user_id: id,
                value: `${endereco.street}, ${endereco.number}, ${endereco.cep}, ${endereco.city}, ${endereco.state}, ${endereco.complement}`, 
                updated_at: new Date()    
            })
            .into(UserDatabase.ENDERECO_TABLE_NAME)
    }
   
    public async getUserByEmail(
        email: string
        ): Promise<any> {
        const result = await this.getConnection()
          .select("*")
          .from(UserDatabase.TABLE_NAME)
          .where({ email });
    
        return result[0];
    }

    
}


