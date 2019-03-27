// let loaf ={

// };
// loaf.flour = 300;
// loaf.water = 210;
// loaf.hydration=function(){
//     return loaf.water/loaf.flour * 100;
// };
// console.log(loaf.flour);
// console.log(loaf.water);
// console.log(loaf.hydration());

// let obj={foo:1,bar:"b",fun:"c",quux:4,spam:"asd"};
// for (let i in obj){
//     console.log(i+':'+obj[i]);
// }

// let obj2 = { meal : ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'] } 
// console.log(obj2.meal[3]);

// let a={name:'Peter',jobTitle:'Plumber'};
// let b={name:'John',jobTitle:'Construction Worker'};
// let c={name:'Bob',jobTitle:'Builder'};
// let d=[a,b,c];
// d.forEach(x=>console.log(x));

// a.boss = "Bob";
// b.boss = "Bob";

// d.forEach(job =>{
//     if(job.hasOwnProperty('boss')){
//         console.log(`${job.jobTitle} ${job.name} reports to ${job.boss}.`);
//     }else{
//         console.log(`${job.jobTitle} ${job.name} doesn't report to anybody.`);
//     }
// })

// let decode ={
//     a:2,b:3,c:4,d:5
// };
// function decoder(word){
//     if (decode.hasOwnProperty(word[0])){return word.charAt(decode[word[0]]-1);}
//     else{return ' ';}
// }
// function decodeWords(words){
//     wordlist=words.split(' ');
//     out=[];
//     wordlist.forEach(x=>out+=decoder(x));
//     return out;
// }
// const test='craft block argon meter bells brown croon droop';
// console.log(decodeWords(test));