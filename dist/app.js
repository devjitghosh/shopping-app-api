"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const routes_1 = __importDefault(require("./routes/routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
app.use(express_1.default.static('public'));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        body: "base path"
    });
});
app.use(routes_1.default);
exports.default = app;
