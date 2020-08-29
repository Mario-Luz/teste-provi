import axios from 'axios';

export class SearchCep {
   async searchcep(cep:string ){
    const responsecep= await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    console.log(responsecep)
    return responsecep.data
} 

}