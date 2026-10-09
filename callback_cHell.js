// Callback
/*
function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function cal(com, dif, pro, d){
    let num1=15
    let num2=5
    console.log(com(num1,num2))
    console.log(dif(num1,num2))
    console.log(pro(num1,num2))
    console.log(d(num1,num2))
}

cal(add, sub, mul, div)
*/


// Callback Hell
function getdata(dataid, nextdata){
    setTimeout(()=>{
        console.log('data',dataid)
        if (nextdata){
            nextdata()
        }
    },2000)
}

getdata(1,()=>{
    getdata(2,()=>{
        getdata(3,()=>{
            getdata(4,()=>{
                getdata(5)
            })
        })
    })
})


