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
let gandalf = new createCharacter('Gandalf','Gandalf the White gandalf', 'Wizard','Middle Earth',10 ,6);
let bilbo = new createCharacter( 'Bilbo Baggins','bilbo','Hobbit','The Shire',2,1);
let frodo = new createCharacter('Frodo Baggins','frodo','Hobbit','The Shire',3,2);
let aragorn = new createCharacter('Aragorn son of Arathorn','aragorn','Man','Dunnedain',6,8); 
let legolas= new createCharacter('Legolas','legolas','Elf','Woodland Realm',8,5);
let character = [gandalf,bilbo,frodo,aragorn,legolas];
function createCharacter(name,nickname,race,origin,attack,defence,){
    this.name= name;
    this.nickname= nickname;
    this.origin= origin;
    this.attack=attack;
    this.defence=defence;
    this.race = race;
    this.describe = function(){
        return `${name} is a ${race} from ${origin}`;
    }
    this.evaluateFight = function(character){
        function dmg(a,b){ 
            if (a<b){ return 0; } 
            return a-b; } 
            return `Your opponent takes ${dmg (attack,character.defence)} damage and you receive ${dmg(character.attack,defence)} damage;`
                
            }
        
    }

// character.find(x => x.nickname ==='bilbo' )
let finder = character.find(x => x.nickname ==='bilbo' );
// console.log(finder.describe());
let hobbits = character.filter(x => x.race ==='Hobbit');
let strongGuys = character.filter( x => x.attack >= 5 ? x : undefined);
// console.log(strongGuys)
function addWeapon(weapon,name){
    name.weapon = weapon;
    name.describe = function(){
        return `${name.name} is a ${name.race} from ${name.origin} uses ${weapon}`;
    }
}


