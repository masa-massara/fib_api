"use strict";
/**
 * 入力されたクエリの値が正常であるかを確かめる関数です。
 * */
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryCheck = void 0;
const queryCheck = (query) => {
    const queryNumber = Number(query);
    const throwValidationError = (message) => {
        throw {
            title: "バリデーションエラー",
            message: message,
            statusCode: 400,
        };
    };
    if (Number.isNaN(queryNumber)) {
        throwValidationError("半角数字である必要があります。");
    }
    if (queryNumber < 0) {
        throwValidationError("正の数である必要があります。");
    }
    if (!Number.isInteger(queryNumber)) {
        throwValidationError("整数である必要があります。");
    }
    return true;
};
exports.queryCheck = queryCheck;
