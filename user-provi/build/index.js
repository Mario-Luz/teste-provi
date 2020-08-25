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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const IdGenerator_1 = require("./services/IdGenerator");
const UserDatabase_1 = require("./data/UserDatabase");
const Authenticator_1 = require("./services/Authenticator");
const id = uuid_1.v4();
console.log("Generated Id: ", id);
const app = express_1.default();
app.use(express_1.default.json());
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Item b. Validação do email
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }
        // Item c. Validação da senha
        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
        }
        const userData = {
            email: req.body.email,
            password: req.body.password,
        };
        const idGenerator = new IdGenerator_1.IdGenerator();
        const id = idGenerator.generate();
        const userDb = new UserDatabase_1.UserDatabase();
        yield userDb.createUser(id, userData.email, userData.password);
        const authenticator = new Authenticator_1.Authenticator();
        const token = authenticator.generateToken({
            id,
        });
        res.status(200).send({
            token,
        });
    }
    catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
}));
app.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Item b. Validação do email
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }
        const userData = {
            email: req.body.email,
            password: req.body.password,
        };
        const userDatabase = new UserDatabase_1.UserDatabase();
        const user = yield userDatabase.getUserByEmail(userData.email);
        if (user.password !== userData.password) {
            throw new Error("Invalid password");
        }
        const authenticator = new Authenticator_1.Authenticator();
        const token = authenticator.generateToken({
            id: user.id,
        });
        res.status(200).send({
            token,
        });
    }
    catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
}));
app.get("/user/profile", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers.authorization;
        const authenticator = new Authenticator_1.Authenticator();
        const authenticationData = authenticator.getData(token);
        const userDb = new UserDatabase_1.UserDatabase();
        const user = yield userDb.getUserById(authenticationData.id);
        res.status(200).send({
            id: user.id,
            email: user.email,
        });
    }
    catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
}));
