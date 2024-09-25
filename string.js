var a="Swetha";
//string length()give the length of the string
console.log(a.length);
//string char() displays char of string
console.log(a.charAt(4));
console.log(a.charAt(0));
//string charcodeAt() displays utf code of letter
console.log(a.charCodeAt(0));
//string lowercase diplays small lettters
console.log(a.toLowerCase());
//string upperrcase diplays capital lettters
console.log(a.toUpperCase());
//string trim() ,trimstart(),trimend()
var a1="   India";
console.log(a1.trimStart());
console.log(a1);
var a1="India    Telangana";
console.log(a1.trimEnd());
console.log(typeof a1.trimStart());
console.log(a1.trim());
//strint concat() adds two strings
let str1="Hello!";
let str2="Good Morning";
let resultstr=str1.concat(str2);
console.log(resultstr);
//string slice()
let text="Good Afternoon";
let partstr=text.slice(0,5);
console.log(partstr);
let text2="good day";
let p2=text2.slice(2,8);
console.log(p2);
let text3="nice day";
let p3=text3.slice(-3);
console.log(p3);