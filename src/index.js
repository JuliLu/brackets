module.exports = function check(str, bracketsConfig) {
  return (
    str.split('').reduce((acc, current) => {Object.fromEntries(bracketsConfig)[acc.at(-1)] === current ? acc.pop() : acc.push(current);
    return acc;
}, []).length === 0
  );
}




// {
//   const stack = [];
//     const openBrackets = new Set();
//     const bracketMap = new Map();

//     for (const [open, close] of bracketsConfig) {
//         openBrackets.add(open);
//         bracketMap.set(close, open);
//     }

//     for (const char of str) {
//         if (openBrackets.has(char)) {
//             stack.push(char);
//         } else if (bracketMap.has(char)) {
//             if (stack.length === 0 || stack[stack.length - 1] !== bracketMap.get(char)) {
//                 return false;
//             }
//             stack.pop();
//         }
//     }
//     return stack.length === 0;
// }
