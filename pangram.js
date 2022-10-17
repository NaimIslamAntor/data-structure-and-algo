/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {

    const alphabets = 'abcdefghijklmnopqrstuvwxyz';

    const alphaArr = alphabets.split('')

     for(let char of sentence){

        const indexOfChar = alphaArr.indexOf(char)
       
        if (indexOfChar !== -1) {
            alphaArr.splice(indexOfChar, 1)
        }

     }

     return !alphaArr.length
    
};



console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));