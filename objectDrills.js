let loaf ={

};
loaf.flour = 300;
loaf.water = 210;
loaf.hydration=function(){
    return loaf.water/loaf.flour * 100;
};
console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());
