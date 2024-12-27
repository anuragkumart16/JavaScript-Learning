const array = new Array(1,1,2)
let hashmap = new Object()
array.forEach((element,index) =>{
    if(hashmap.hasOwnProperty(element)){
        
    }else{
        hashmap[element] = 1
    }
    console.log(hashmap)
})

