'use strict';
function fib(n) {  // fib(0) = 0 としてフィボナッチ数列の n 番目の数を返す
    if (n === 0) {  // fib(0) = 0
        return 0;
    } else if (n === 1) {  // fib(1) = 1
        return 1;
    }
    return fib(n - 1) + fib(n - 2);  // fib(n) = fib (n - 1) + fib(n - 2) (n > 1)
}
const length = 40;  // fib(0) から fib(40) を順番に出力
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}
