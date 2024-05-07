"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queryCheck_1 = require("../queryCheck");
describe("クエリのチェック", () => {
    test("半角の数字のテスト", () => {
        expect((0, queryCheck_1.queryCheck)(99)).toBe(true);
    });
    test("文字列のテスト", () => {
        expect(() => (0, queryCheck_1.queryCheck)("９９")).toThrow("半角数字である必要があります。");
    });
    test("負の数のテスト", () => {
        expect(() => (0, queryCheck_1.queryCheck)(-99)).toThrow("正の数である必要があります。");
    });
    test("小数点以下が含まれる際のテスト", () => {
        expect(() => (0, queryCheck_1.queryCheck)(9.9)).toThrow("整数である必要があります。");
    });
});
