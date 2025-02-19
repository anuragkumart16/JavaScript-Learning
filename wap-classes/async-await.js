// const getData = async () => {
//     const response = await fetch('https://randomuser.me/api/')
//     const data = await response.json()
//     console.log(data)
// }

// getData()


// const getAnotherData = async ()=>{
//     // const response = await fetch('https://randomuser.me/api/')
//     // const data = await response.json()
//     // return data
//     return 

// }
// console.log(getAnotherData())

function promiseHandler(res,rej){
    data = 4
    if(data == 3){
        res('this promise has been resolved')
    }else{
        rej('this promise has been rejected')
    }
}

const newPromise = new Promise(promiseHandler)


newPromise.then((message )=>{
    console.log(message)
}).catch(error=>{
    console.log(error)
});
