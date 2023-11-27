/* Problem of CallBack hell*/

 // Function to add two numbers
function add(num1, num2, callback){
    let err = false
    if(num1 === 0){
        err = true
    }
    callback(num1+num2,err)
}

 // Function to multiply two numbers
function multiply(num1,num2,callback){
    callback(num1 * num2)}

 // Function to divide two numbers
function div(num1,num2,callback){
    callback(num1/num2)
}

 // Call the add function with two numbers and a callback function
add(10,30,(sum,err) =>{
    if(err){
        console.error('First number is zero');
    }else{
        console.log(sum);
        multiply(sum,sum,(product) => {
            console.log(product);
            div(product,10,(res)=> {
                console.log(res);
            })
        })
    }
})

// //In this code, we have three functions: `add`, `multiply`, and `div`. Each function takes two numbers and a callback function as parameters. The `add` function also checks if the first number is zero and sets an error flag accordingly.
// //
// //The `add` function is called with two numbers and a callback function. Inside the callback function, we check if the error flag is set. If it is, we log an error message. Otherwise, we log the sum of the two numbers, call the `multiply` function with the sum and itself as parameters, and pass a callback function to it.
// //
// //Inside the callback function of the `multiply` function, we log the product of the two numbers and call the `div` function with the product and 10 as parameters. We pass a callback function to the `div` function, which logs the result of the division..</s>

/*Symplifying above code using promise*/
// Promise Chain

function add(num1,num2){
    return new Promise((resolve,reject) => {
        if(num1 == 0){
            reject(new Error("Frist number is zero"))
        }
        resolve(num1 + num2)
    })
}
function multiply(num1,num2){
    return new Promise((resolve,reject) => {
        if(num1 == 0){
            reject(new Error("Frist number is zero"))
        }
        resolve(num1 * num2)
    })
}
function div(num1,num2){
    return new Promise((resolve,reject) => {
        if(num1 == 0){
            reject(new Error("Frist number is zero"))
        }
        resolve(num1 / num2)
    })
}
add(10,20).then((sum) => {
    console.log(sum);
    return multiply(sum,sum)
}).then((product) => {
    console.log(product);
    return div(product,10)
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err.message);
})


/* Problem with async await*/

function getName() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Yadhu Krishnan")
        },3000)
    })
}
function getMobail() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("654325432")
        },2000)
    })
}

Promise.all([getName(),getMobail()]).then((res) => console.log(res))

async function getUser () {
    let name = await getName();
    console.log(name);
    let num = await getMobail()
    console.log(num)
}
getUser()