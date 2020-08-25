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
exports.UserDatabase = void 0;
const knex_1 = __importDefault(require("knex"));
class UserDatabase {
    connection() {
        return knex_1.default({
            client: "mysql",
            connection: {
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT || "3306"),
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE_NAME,
            }
        });
    }
    createUser(id, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection()
                .insert({
                id,
                email,
                password
            })
                .into(UserDatabase.TABLE_NAME);
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection()
                .select("*")
                .from(UserDatabase.TABLE_NAME)
                .where({ email });
            return result[0];
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection()
                .select("*")
                .from(UserDatabase.TABLE_NAME)
                .where({ id });
            return result[0];
        });
    }
}
exports.UserDatabase = UserDatabase;
UserDatabase.TABLE_NAME = "User";
