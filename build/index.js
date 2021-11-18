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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function writeFile(dir, text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fs_1.default.appendFile(dir, text, function (err) {
            if (err)
                console.log(err);
        });
    });
}
function getDefaultValues() {
    var dateTime = new Date();
    let logId = Math.random().toString(36).substring(4);
    return {
        dateTime,
        logId
    };
}
function logMessage(data) {
    const { title, message, directory = './', filename = 'log.txt', withId = true, withDate = true, withSeparator = true, customSeparator = '' } = data;
    const { dateTime, logId } = getDefaultValues();
    var text = '';
    if (withSeparator && !customSeparator) {
        text += `\n# # # # # # # # # # # # # # # # # # # # # # #`;
    }
    else if (customSeparator) {
        text += `\n${customSeparator}`;
    }
    if (withId && title) {
        text += `\n${title} - Code : ${logId}`;
    }
    else if (withId) {
        text += `\nId : ${logId}`;
    }
    else if (title) {
        text += `\n${title}`;
    }
    if (withDate) {
        text += `\n${dateTime}`;
    }
    if (message) {
        text += `\n${message}`;
    }
    text += `
  `;
    var dir = path_1.default.join(directory, filename);
    writeFile(dir, text);
}
exports.default = {
    logMessage
};
