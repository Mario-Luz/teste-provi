"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBusiness = void 0;
const UserDatabase_1 = require("../data/UserDatabase");
class UserBusiness {
    addCpf(id, cpf) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDb = new UserDatabase_1.UserDatabase();
            yield userDb.addCpf(id, cpf);
        });
    }
    addNome(id, nome) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDb = new UserDatabase_1.UserDatabase();
            yield userDb.addNome(id, nome);
        });
    }
    addSobreNome(id, sobrenome) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDb = new UserDatabase_1.UserDatabase();
            yield userDb.addSobreNome(id, sobrenome);
        });
    }
    addNascimento(id, nascimento) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDb = new UserDatabase_1.UserDatabase();
            yield userDb.addNascimento(id, nascimento);
        });
    }
    addTelefone(id, telefone) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDb = new UserDatabase_1.UserDatabase();
            yield userDb.addTelefone(id, telefone);
        });
    }
    addEndereco(id, endereco) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDb = new UserDatabase_1.UserDatabase();
            yield userDb.addEndereco(id, endereco);
        });
    }
}
exports.UserBusiness = UserBusiness;
