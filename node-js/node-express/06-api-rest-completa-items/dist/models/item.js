"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemModel = void 0;
const mongoose_1 = require("mongoose");
const itemSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name Of Car is required']
    },
    color: {
        type: String,
        required: [true, 'Color is required']
    },
    gas: {
        type: String,
        enum: ['Gasoline', 'Electric'],
        required: [true, 'Gas is required']
    },
    year: {
        type: Number,
        required: [true, 'Year is required']
    },
    description: {
        type: String,
        required: [true, 'Descripction is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    }
}, {
    versionKey: false,
    timestamps: true
});
const itemModel = (0, mongoose_1.model)('Items', itemSchema);
exports.ItemModel = itemModel;
