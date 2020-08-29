"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CepController = void 0;
// faz a importação do módulo
const cep_promise_1 = __importDefault(require("cep-promise"));
class CepController {
    // método do controller que é acessado através de uma rota
    show(req, res) {
        // pego o CEP da requisição do client
        const cepParaConsulta = req.body.cep;
        // código do cep-promise
        cep_promise_1.default(cepParaConsulta)
            .then((result) => {
            // retorno dos dados em caso de sucesso
            return res.json(result);
        })
            .catch((err) => {
            // retorno do erro caso exista
            return res.status(400).json(err);
        });
    }
}
exports.CepController = CepController;
// exportação da classe CepController
exports.default = new CepController();
