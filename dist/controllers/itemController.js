"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const itemModel_1 = __importDefault(require("../models/itemModel"));
const getItems = async (req, res, next) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    console.log("req.query", req.query);
    const filterQuery = JSON.parse(JSON.stringify(req.query).replace("gte", "$gte").replace("lte", "$lte"));
    console.log(filterQuery);
    const query = itemModel_1.default.find();
    if (filterQuery.price) {
        query.find({ price: filterQuery.price });
    }
    if (filterQuery.ids) {
        const ids = filterQuery.ids.split(",");
        query.find({ _id: { $in: ids } });
    }
    const items = await query.exec();
    res.status(200).json({
        status: "success",
        count: items.length,
        body: {
            items,
        },
    });
};
exports.default = { getItems };
