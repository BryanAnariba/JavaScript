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
exports.DataBase = void 0;
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
class DataBase {
    constructor() {
        this.host = 'localhost';
        this.port = 27017;
        this.db = 'ApiRestDev';
        this.connect = () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield mongoose_1.default.connect(`mongodb://${this.host}:${this.port}/${this.db}`);
                console.log(`MongoDB is connected`.cyan);
                console.log('============================'.magenta);
            }
            catch (err) {
                throw new Error(`Error: ${err}`);
            }
        });
    }
}
exports.DataBase = DataBase;
// NOMBRE INSTANCIA => Server=localhost\SQLEXPRESS;Database=master;Trusted_Connection=True;
