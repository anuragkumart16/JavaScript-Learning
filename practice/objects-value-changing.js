function changeValue(value){
    let dict = new Object({0:10,1:20})
    dict[1] = value
    return dict
}

console.log(changeValue(30))