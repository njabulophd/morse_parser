/**
 *  In main file
 *  let script1 = require('./script1');
 *  console.log(script1.sum(1, 2));
 */
function translator(letters){
  let word = "", sentence = [];
  for(let i = 0; i < letters.length + 1; i++){
    //Concat letters into words
    if(letters[i] !== " "){
      if(letters[i] !== undefined){
        word += letters[i];
      }
    }
    //To push words into an array
    else{
       sentence.push(word);
      word = "";
    } // To Push in the last word in the string
    if(i == letters.length){
        sentence.push(word);
      }
  }
  return sentence;
}

module.exports = { translator };