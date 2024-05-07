"use strict";
/**
 * フィボナッチ数列の演算を行う関数です。
 * 丸め込みによる誤差を減らすためにBigInt型を用いています。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate_fibonacci = void 0;
const calculate_fibonacci = (position) => {
    // クエリが1の場合は1を返す
    if (position === 1) {
        return { result: "1" };
    }
    let current = BigInt(0);
    let next = BigInt(1);
    let sum = BigInt(0);
    for (let index = 1; index < position; index++) {
        sum = current + next;
        current = next;
        next = sum;
    }
    return { result: sum.toString() };
};
exports.calculate_fibonacci = calculate_fibonacci;
