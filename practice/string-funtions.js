function isalpha(string) {
    const Numbers = new String("1234567890");
    for (let a of Numbers) {
      if (string.includes(a)) {
        return false
      }
    return true
    }}
function isdecimal(string){
    const alphabets = new String('abcdefghjiklmnopqrstuvwxyzABCDEFGHJIKLMNOPQRSTUVWXYZ')
    for (let a of alphabets){
        if (string.includes(a)){
            return false
        }
    }return true
}

function stringMethods(string) {
  console.log(string.length);
  console.log(string.toLowerCase());
  console.log(string.toUpperCase());
  console.log(string.trim());
  console.log(string.trim().split(" "));
  console.log(string.split(" ").join(" "));
  console.log(isalpha(string));
  console.log(isdecimal(string));
}

stringMethods(" Apple and orange are fruits. 123");
