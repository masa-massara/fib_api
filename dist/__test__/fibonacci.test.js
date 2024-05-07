"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fibonacci_1 = require("../fibonacci");
describe("フィボナッチ数列の計算", () => {
    test("クエリが1の時", () => {
        expect((0, fibonacci_1.calculate_fibonacci)(1)).toEqual({ result: "1" });
    });
    test("クエリが2の時", () => {
        expect((0, fibonacci_1.calculate_fibonacci)(2)).toEqual({ result: "1" });
    });
    test("クエリが10の時", () => {
        expect((0, fibonacci_1.calculate_fibonacci)(10)).toEqual({ result: "55" });
    });
    test("クエリが99の時", () => {
        expect((0, fibonacci_1.calculate_fibonacci)(99)).toEqual({
            result: "218922995834555169026",
        });
    });
});
