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
exports.deleteItem = exports.editItem = exports.postItem = exports.getItems = exports.getItem = void 0;
const item_service_1 = require("../services/item.service");
const error_handle_1 = require("../utils/error.handle");
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield (0, item_service_1.findItem)(req.params.itemId);
        return res.status(200).json({ status: 200, data: item });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_ITEM', e);
    }
});
exports.getItem = getItem;
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield (0, item_service_1.findItems)();
        return res.status(200).json({ status: 200, data: items });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_ITEMS', e);
    }
});
exports.getItems = getItems;
const postItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inserted = yield (0, item_service_1.insertItem)(req.body);
        return res.status(201).json({ status: 201, data: inserted });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_INSERT_ITEM', e);
    }
});
exports.postItem = postItem;
const editItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updated = yield (0, item_service_1.updateItem)(req.params.itemId, req.body);
        return res.status(200).json({ status: 200, data: updated });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_EDIT_ITEM', e);
    }
});
exports.editItem = editItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield (0, item_service_1.delItem)(req.params.itemId);
        return res.status(200).json({ status: 200, data: deleted });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_DELETE_ITEM', e);
    }
});
exports.deleteItem = deleteItem;
