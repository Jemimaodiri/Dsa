import PromptSync from "prompt-sync";
let prompt= PromptSync()
console.clear()
let UserName=prompt('Hello There!! Your player name?') 
let UserGuess=parseInt(prompt(`Welcome ${UserName} Please Enter A guess:`))
let Inputs=4
while (Inputs > 0) {
   let Rand:number=4  
   if (UserGuess===Rand) {
        console.log(`Congratulations!! ${UserName} 🥳🎊 Your guess matched`)
        // console.log(`Do You Wish To Continue? (y/n) `)
   }else{
        console.log('Ugh!! Too bad, you lost😢😢');
   }
   let Choice =prompt('Do You Wish To Continue?:').toLowerCase()
    if(Choice==='y'){
UserGuess=parseInt(prompt(`Welcome back ${UserName} but you are limited to only four chances with hints:`))

   }else if(Choice==='n'){
        console.log('Cancelled Successfully...See ya later')
    
   }else{
        console.log('Invalid Input commands automatic cncellation')
        break

   }
   if (UserGuess > Rand) {
        console.log('Wrong Again.. Your Input was greater than the random number')
        UserGuess=parseInt(prompt('Input A nUmber:'));Inputs--
   } else  if(UserGuess < Rand ){
        console.log('Wrong Again.. Your Input was lesser than the random number')

   }
else if(Inputs===0){
        console.log(`Game over!! No More Chance`)
        break;
}


}

                 
// prompt('Do You Wish To Continue? (y/n) :') 
