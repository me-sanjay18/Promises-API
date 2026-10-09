/*
async function hello(name){     //async allways returns promises
    console.log('hello',name)
}
*/


// basics syntex of async await
/*
function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('got data')
            resolve(200)
        },2000)
    })
}

async function data(){
    await api()
    await api()
}
*/

function getdata(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('data',data)
            resolve('Sussecc')
        },2000)
    })
}


(async function (){
    await getdata(1)
    await getdata(2)
    await getdata(3)
    await getdata(4)
})();




