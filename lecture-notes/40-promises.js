const promiseOne = new Promise((res,rej)=>{
    // do an async task
    setTimeout(()=>{
        console.log('Async is complete')
        res()
    },1000)
})

promiseOne.then(()=>{
    console.log('Promise consumed')
})

const data = {
    name : 'Anurag',
    product : 'Mac M3'
}

// how to send data via resolve?
const promiseTwo = new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log('Async operation completed')
        res(data)
    },1000)
})

promiseTwo.then((response)=>{
    console.log(response)
})


const promiseThree = new Promise((res,rej)=>{
    setTimeout(()=>{
        let error = true
        if (error){
            rej('ERROR : Something went wrong')
        }else{
            res(data)
        }

    },1000)
})

promiseThree.then((user)=>{
    return user
})
.then(data=>console.log(data))
.catch(err=>console.log(err))
.finally(()=> console.log('the promise is either resolved or rejected'))



const promiseFour = new Promise((res,rej)=>{
    setTimeout(()=>{
        let error = true
        if (error){
            rej('ERROR : js went wrong')
        }else{
            res({username:'JavaScript'})
        }
    },1000)
})

async function handlePromiseFour() {
    try {
        const response = await promiseFour 
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}   

handlePromiseFour()
