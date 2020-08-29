import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {

    public async addCpf(id:string, cpf: string){
        const userDb = new UserDatabase();
        await userDb.addCpf(id, cpf);
    }
    public async addNome(id:string, nome: string){
        const userDb = new UserDatabase();
         await userDb.addNome(id, nome);
    }
    public async addSobreNome(id:string, sobrenome: string){
        const userDb = new UserDatabase();
         await userDb.addSobreNome(id, sobrenome);
    }
    public async addNascimento(id:string, nascimento: string){
        const userDb = new UserDatabase();
         await userDb.addNascimento(id, nascimento);
    }
    public async addTelefone(id:string, telefone: number){
        const userDb = new UserDatabase();
         await userDb.addTelefone(id, telefone);
    }
    public async addEndereco(id:string, endereco: Endereco){
        const userDb = new UserDatabase();
         await userDb.addEndereco(id, endereco);
    }
   
    
}

export interface Endereco{
    street:string
    number:number
    cep: string
    city: string
    state: string
    complement: string

}
declare type ViaCepResponse = {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    unidade: string;
    ibge: string;
    gia: string;
};



