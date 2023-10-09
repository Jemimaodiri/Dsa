import PromptSync from "prompt-sync"
const prompt=PromptSync()
// import moment from "moment";

// console.clear()
// console.log('I am number 1')
// console.log('I am number 2')
// cup(1000)
// console.log('I am number 3')
// console.log('I am number 4')
// console.log('I am number 5')

// function cup(guessTime:number){
// console.log("Waiting For Joan")
// let time=new Date().getTime()
// let DelayTime=time + guessTime;
// setTimeout(()=>{
//          while (new Date().getTime() < DelayTime) {
         
//          }

//          console.log("Start Process executed at:", moment(time).format('LTS'));
// console.log('End Process executed at:', moment(DelayTime).format('LTS'));
// console.log('This whole process took',(DelayTime-time)/1000,"second(s)")
// },0)


// }


// CALLBACK

// const Check=(cb:any):void=>{
//         setTimeout(()=>{
//          return   cb()
//          },0)
// }
// console.log(
//          Check(()=>{
//                   // console.clear()
//                   console.log(`Viewing ${Name}'s Data `)
//          })
// );

// const Name:string='Jemima'

// const Check=(cb:any):void=>{
//         setTimeout(()=>{
//          return   cb("Data")
//          },0)
// };

// console.log(
//          Check((res:any)=>{
//                   console.log(res)
//          })
// )

// const Name:string='Jemima'

// PROMISE

// const promise=new Promise((resolve, reject) =>{
//         if (true) {
//          resolve('A promise kept')
//         }  else{;
//          reject('A promise declined')
//         }
// });

// promise.then(()=>{
//          // console.log(res);
//          console.log(`A promise kept for ${Hobby} reward`)
// }).catch((err)=>{
//          console.log(err)
// }).finally(()=>{
//          console.log('Close up Code')
// })

// let Hobby:string='Dancing'
// console.log(Hobby)


// let promise=new Promise((resolve, reject) =>{
//          // let Tayo=[3,4,5]
//          // let Check= Tayo.some((el)=> el=== 4)

//          let Rand=Math.floor(Math.random()*1)
//          let UserGuess=parseInt(prompt('Enter a random guess:'))
//          if (UserGuess===Rand) {
//                resolve('Confirmed')   
//          }else{
//                   reject('Rejected')
//          }


// }).then((res)=>{
//       console.clear()
//          console.log(res)
// }).catch((err)=>{
//          console.log(err)
// }).finally(()=>{
//          console.log("closed up code")
// })



let userEmail:string
let UserPasword:string

const MakeRequest = ()=>{
      const email=prompt('Enter your email address:');
const password=prompt('Enter your password:');

userEmail=email
UserPasword=password;
      return new Promise((resolve, reject)=>{
return setTimeout(()=>{
      if (userEmail==='peter@test.com' && UserPasword==="peter@test.com") {
            // resolve(`User Authentication Successfull`)
            resolve(`${userEmail.split('@')[0]}`)
      }else{
            reject('User Authentication Failed')
      }
},1000)
      })
}

const LandingPage =(res:any)=>{
      console.log(`Welcome  ${res} to the LandingPage`)
}
// MakeRequest()

// .then((res:any)=>{
//       LandingPage(res)
// }).catch((err)=>{
//       console.log(err)
// })


// Another Way
// const Another= async()=>{
//       const Val=await MakeRequest()
//       const result= LandingPage (Val)
//       console.log(result)
// }
// Another()

const Another= async()=>{
      const Val=await MakeRequest();

      
      const result= LandingPage (Val)
      console.log(result)
}
Another()





// Promise.all([
//       MakeRequest(1000),
//       MakeRequest(2000),
//       MakeRequest(3000),
//       MakeRequest(4000),
//       MakeRequest(5000),
//       MakeRequest(6000)
// ])