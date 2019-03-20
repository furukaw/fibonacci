'use strict';
const memo = new Map();  // fib 計算結果をメモする連想配列
memo.set(0, 0);  // fib(0) = 0 を格納
memo.set(1, 1);  // fib(1) = 1 を格納
function fib(n) {  // fib(0) = 0 としてフィボナッチ数列の n 番目の数を返す
    if(memo.has(n)) {  // memo に fib(n) が格納されていたら
        return memo.get(n);  // それを返す
    }
    const value = fib(n - 1) + fib(n - 2);  // なければ定義通りに計算する
    memo.set(n, value);  // 値を格納する
    return value;  // 格納したのと同じ値を返す
}
const length = 40;  // fib(0) から fib(40) を順番に出力
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}
