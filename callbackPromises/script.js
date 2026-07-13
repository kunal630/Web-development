// console.log(" i am hacker")
// console.log(" i am  Ehical hacker")
// setTimeout(()=>{
//     console.log("ste time methou was run")
// },3000);
// setTimeout(()=>{
//     console.log("I AM SECOND time methou was run")
// },5000);
// const callback=(arg)=>{
//     console.log(arg)
// }

// const loadScript=(src,callback)=>{
//     let sc=document.createElement("script")
//     sc.src=src;
//     sc.onload=callback("Kunal")
//     document.head.append(sc)
// }
// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)



// Promises

// let prom1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("I am Done")
//     },3000)
//     resolve("Promise are completed")
// })
// prom1.then((e)=>{
//     console.log(e)
// }).catch((err)=>{
//     console.log(err)
// })




let prom2=new Promise((resolve,reject)=>{
    let num=Math.random()
    if (num>0.5){

        console.log("second promise are done")
        resolve("second one also done")
    }
    else{
        reject("Error are occur")
    }
})
prom2.then((e)=>{
    console.log(e)
}).catch((e)=>{
    console.log(e)
})