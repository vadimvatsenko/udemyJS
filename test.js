// // const lines = 11;
// let result = '';

// for (let i = 1; i <= lines; i += 2){
//     for (let j = 0; j < i; j += 1){// 1я итерация j<i(0)
//         result += '*';
//     }
//     result += '\n';// перенос строки
// }
// console.log(result);
// console.log(result.length);

let i = 0;
let j = 0;
const lines = 6;
let space = "";
let star = "";
let result = '';

while (i < lines) {
  space = "";
  star = "";
  for (j = 0; j < lines - i; j++) space += " ";
  for (j = 0; j < 2 * i + 1; j++) star += "*";
    console.log(space + star);
    result = space + star;
    i++;
    return result;
}