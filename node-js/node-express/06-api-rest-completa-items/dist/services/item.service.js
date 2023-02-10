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
exports.delItem = exports.updateItem = exports.findItem = exports.findItems = exports.insertItem = void 0;
const item_1 = require("../models/item");
const insertItem = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const responseInsert = yield item_1.ItemModel.create(item);
    return responseInsert;
});
exports.insertItem = insertItem;
const findItems = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield item_1.ItemModel.find({});
});
exports.findItems = findItems;
const findItem = (itemId) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield item_1.ItemModel.findOne({ _id: itemId });
    return item;
});
exports.findItem = findItem;
const updateItem = (itemId, car) => __awaiter(void 0, void 0, void 0, function* () {
    const updated = item_1.ItemModel.findOneAndUpdate({ _id: itemId }, car, { new: true });
    return updated;
});
exports.updateItem = updateItem;
const delItem = (itemId) => __awaiter(void 0, void 0, void 0, function* () {
    const deleted = yield item_1.ItemModel.remove({ _id: itemId });
    return deleted;
});
exports.delItem = delItem;
