//1.Using trim(),concat(),toUppercase
let a="   hello!";
let b="welcome   ";
let c=a.trimStart().concat(b.trimEnd()).toUpperCase();
console.log(c);
//2.using slice(),charAt(),tolowercase()
var x="my name iS swetha";
console.log(x);
var y=x.slice(3,10);
console.log(y)
console.log(y.charAt(6).toLowerCase());
//shorthand
//console.log(x.slice(3,10).charAt(6).toLowerCase())
//3.using concatt(),touppercase(),charat()
var s="V";
var p="concat";
var r=s.concat(p.toUpperCase());
console.log(r.charAt(1));
//
var u="good day";
var w="hi welcome";
console.log(u.slice(0,3),w.slice(7,10));
//var z=u.concat(w);
//console.log(u.slice(0,3).charAt(0).toUpperCase(),w.slice(7,10).charAt(10).toUpperCase(9));
//console.log(w.toUpperCase().charAt(9));
//4using slice(),touppercse(),
var u = "good day";
var w = "hi welcome";

// For the 'u' string slice
var uSlice = u.slice(0, 3); // Extract "goo"
var uResult = uSlice[0].toUpperCase() + uSlice.slice(1, uSlice.length - 1).toLowerCase() + uSlice[uSlice.length - 1].toLowerCase();

// For the 'w' string slice
var wSlice = w.slice(7, 10); // Extract "com"
var wResult = wSlice[0].toLowerCase() + wSlice.slice(1, wSlice.length - 1).toLowerCase() + wSlice[wSlice.length - 1].toUpperCase();

// Output the result
console.log(uResult, wResult);
//5.using trim(),slice(),concat()
var strslice="  str with extra spaces   ";
var st=strslice.trim();
var s1=st.charAt(0).toUpperCase();
var s2=st.charAt(st.length -1).toUpperCase();
var s3=st.slice(1,-1);
var s4=s1+s3+s2;
console.log(s4);
console.log(strslice.slice(0,5).concat("  abc").trimStart());
//var str2=strslice.charAt(2).toUpperCase();
//console.log(strslice.trimStart().trimEnd());
//6.index of 'are' word
var str="hello there, how are you";
console.log("index of word 'are'",str.indexOf("are"));
