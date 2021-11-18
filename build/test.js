"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
index_1.default.logMessage({
    title: "Testing",
    message: "Hello world",
});
index_1.default.logMessage({
    title: "Testing",
    message: "Hello world",
    directory: './',
    filename: 'test.txt',
});
index_1.default.logMessage({
    title: "Testing",
    message: "Hello world",
    directory: './',
    filename: 'test2.txt',
    withSeparator: false,
    customSeparator: "- - - - - - - - - - - -",
    withDate: false,
    withId: false
});
