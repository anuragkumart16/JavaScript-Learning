
// promise is state of async methods which can either be pending, rejected or resolved.

// creating a promise

const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            name: 'anurag',
            age: 25
        })
    },1000)
})

console.log(promise)

promise.then((data)=>{
    console.log(data)
})

setTimeout(()=>{
    promise.then((data)=>{
        console.log(data)
    })
},2000)
