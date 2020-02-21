let a = 'привет 12 ываыва34 98 3423ыавыа'
let b = '10 ываыв 8 234ы'
function f(str) {
    let c = str.match(/(\s|^)\d+(\s|$)/gm)
    return c;
}
console.log(f(a))
console.log(f(b))

function fn(str) {
    let a = (/(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/g)
   return a.test(str)
}
let a2 = "127.0.0.0";
let a3 = "127.0.155.10";
let a4 = "127.0т155.10";
console.log(fn(a2))
console.log(fn(a3))
console.log(fn(a4))