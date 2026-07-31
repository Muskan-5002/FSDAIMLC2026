// function sum(a,b){
//     return a+b;
// }

// function sumWithMsg(clbk,msg){
//     const result = clbk(20,40);
//     console.log(msg+":"+result)
// }

// sumWithMsg(sum,"Hey using calculation with js")

// function login(msg,error){
//     if (error){
//         console.log("Error is"+error)
//     }
//     else{
//         console.log("Welcome"+msg);
//     }
// }

// function loginVerification(username,password,clbk){
//     if(username =="muskanjaiswal" && password=="12345678"){
//         clbk("Success",null);
//     }else{
//         clbk(null,"Username or password is incorrect")
//     }
// }

// loginVerification("muskanjaiswal","12345678",login)

// function generateNumber(clbk){
//     let randomNumber = Math.floor(Math.random() * 100) + 1;
//     clbk(randomNumber);
// }

// function checkOddEven(number){
//     if(number % 2==0){
//         console.log(number+"is Even");
//     }
//     else{
//         console.log(number+"is Odd");
//     }
// }

// generateNumber(checkOddEven)

// console.log("First")
// // setTimedout(()=>{console.log("Second")}, 1000);
// for(i=0; i<10000; i++){
//     console.log("Second")
// }
// console.log("Third")

// setTimeout(() => {console.log("1st");
//     setTimeout(() => {console.log("2nd");
//         setTimeout(() => {console.log("3rd");
//             setTimeout(() => {console.log("4th");   
//                 setTimeout(() => {console.log("5th");
//                     setTimeout(() => {console.log("6th");
//                          setTimeout(() => {console.log("7th");
//                             setTimeout(() => {console.log("8th");
//                                 setTimeout(() => {console.log("9th");
//                                     setTimeout(() => {console.log("10th");
//                                         setTimeout(() => {console.log("11th");
//                                     }, 1000);
//                                 }, 1000);
//                             }, 1000);
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
//      }, 1000);
// }, 1000);

const myPromise = new Promise((resolve , reject)=>{
    username = "Muskan Jaiswal";
    password = "12345678"
    if(username=="Muskan Jaiswal" && password == "12345678"){
        resolve("Success")
    } else{
        reject("username or password is incorrect")
    }})

// myPromise.then((msg)=>{
//     console.log(msg)
// }).catch((msg) =>{
//     console.log(msg)
// }).finally(()=>{
//     console.log("All the resources have been closed/memory released")
// })

async function handlelogin() {
    try{
        await myPromise
    }catch(e){
        console.log(e)
    }
    finally{
        console.log("All the resources have been closed/memory released")
    }
}
handlelogin();