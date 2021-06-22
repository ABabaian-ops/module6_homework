let n = Math.floor(Math.random() * (1001 - 0)) + 0;
let m = Math.sqrt(n);
let simple = true;
for (let i = 2; i <= m; i++) {
    if (n % i == 0) {
        simple = false;
        break;
    }
}
if (n>1000){console.log("error")};
if (simple) {
    console.log(n + ' - simple number');
} else {
    console.log(n + ' Is not simple number');
}