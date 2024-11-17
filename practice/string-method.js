// Write a program that takes a sentence s, two substrings s1 and s2, and a number n. Replace every occurrence of s1 in s with s2, then print the modified string. After that, print the ASCII value of the first character of the resulting string. Additionally, print the character corresponding to the ASCII value n.


function stringMethod(s,s1,s2,n){
    s = s.replace(s1,s2)
    console.log(s)
    console.log(s.codePointAt(0)) // we pass the index of the character
    console.log(String.fromCharCode(n))
}

stringMethod('This is a dog','dog','cat',65)
