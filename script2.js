/**
 *  In main file
 *  let script2 = require('./script2');
 *  console.log(script2.sum(1, 2));
 */
 let alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 let morse = ['.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..'];
let translator = require("./script1");
//Assuming the input is all morse code not a mixture of morse and alphabets
function toAlpha(word){
  //let words = translator.translator(word);
  let holder = word.slice().split(" ");
  let sentence = [];
  for(let i = 0; i < word.length; i++){
    for(let j = 0; j < morse.length; j++){
      if(holder[i] == morse[j]){
        sentence.push(alphabets[j]);
      }
    }
  }
  return sentence;
}

module.exports = { toAlpha };