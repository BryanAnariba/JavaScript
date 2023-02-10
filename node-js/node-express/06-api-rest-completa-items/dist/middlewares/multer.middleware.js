"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerMiddleware = void 0;
const multer_1 = __importStar(require("multer"));
// RETORNO LA UBICACION DE LA CARPETA DONDE TRABAJO ACTUALMENTE, A ESTO LE PONGO LA CARPETA storage
const PATH_STORAGE = `${process.cwd()}/storage`;
const storage = (0, multer_1.diskStorage)({
    destination(req, file, cb) {
        cb(null, PATH_STORAGE);
    },
    filename(req, file, cb) {
        const ext = file.originalname.split('.').pop(); // image.jpg => obtengo la extencion osea jpg
        const fileNameRandom = `image-${Date.now()}.${ext}`; // le ponemos un nuevo nombre para que no se repita
        cb(null, fileNameRandom);
    }
});
const multerMiddleware = (0, multer_1.default)({ storage });
exports.multerMiddleware = multerMiddleware;
