function doubleSplit(string){
    splitted_string = string.split("*")
    splitted_string[1] = splitted_string[1].split('+')
    return( Number(splitted_string[0])*Number(splitted_string[1][0])*Number(splitted_string[1][1]))
}
console.log(doubleSplit('12*45+36'))
