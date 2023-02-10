"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageModel = void 0;
const mongoose_1 = require("mongoose");
const storageSchema = new mongoose_1.Schema({
    fileName: {
        type: String,
        required: [true, 'File Name is required']
    },
    path: {
        type: String,
        required: [true, 'Path is required']
    },
    userId: {
        type: String,
        required: [true, 'User is required']
    },
}, {
    versionKey: false,
    timestamps: true
});
const storageModel = (0, mongoose_1.model)('Storages', storageSchema);
exports.StorageModel = storageModel;
