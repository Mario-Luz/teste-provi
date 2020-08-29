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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchCep = void 0;
const axios_1 = __importDefault(require("axios"));
class SearchCep {
    searchcep(cep) {
        return __awaiter(this, void 0, void 0, function* () {
            const responsecep = yield axios_1.default.get(`https://viacep.com.br/ws/${cep}/json/`);
            console.log(responsecep);
            return responsecep.data;
        });
    }
}
exports.SearchCep = SearchCep;
