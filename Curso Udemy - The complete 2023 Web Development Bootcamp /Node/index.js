const superheroes = require('superheroes');
const supervillains = require('supervillains');

 
var mySuperheroName = superheroes.random();
//=> 'Spider-Ham'

var mySupervillainsName = supervillains.random();
//=> 'Mud Pack'

console.log(mySuperheroName);
console.log(mySupervillainsName);