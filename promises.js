// Promises creat
/*
function getdata(dataid, nextdata){
    return new Promise((resolve, reject)=>{
        // setTimeout(()=>{
            console.log('data',dataid)
            resolve('sussecc')
            if (nextdata){
                getdata()
            }
        // },5000)
    });
}
*/


// use .then & .catch
/*
const promises=()=>{
    return new Promise((resolve,reject)=>{
        console.log('I am promise')
        // resolve('sussecc')
        reject('error');
    });
};

let promise=promises()

promise.then((res)=>{
    console.log('Promises fullefiled', res)
})

promise.catch((err)=>{
    console.log('Promese failed',err)
})
*/

//promise chaining 
/*
function asyncfunction1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('data 1')
            resolve('Sussecc')
        },4000)
    })
}

function asyncfunction2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('data 2')
            resolve('Sussecc')
        },4000)
    })
}

console.log('fatching data 1...')
asyncfunction1().then((res)=>{
    console.log('fatching data 2...')
    asyncfunction2().then((res)=>{

    })
})

*/





// get data by promise chaining
function getdata(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('data',data)
            resolve('Sussecc')
        },4000)
    })
}

// getdata(1).then((res)=>{
//     console.log(res);
//     getdata(2).then((res)=>{
//         console.log(res)
//     })
// })

getdata(1)
    .then((res)=>{
        return getdata(2)
    })
    .then((res)=>{
        return getdata(3)
    })
    .then((res)=>{
        return getdata(4)
    })
    .then((res)=>{
        return getdata(res)
    })