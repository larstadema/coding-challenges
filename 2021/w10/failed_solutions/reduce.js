const sorter = (a, b) => {
  if (a.count > b.count) {
    return -1;
  }
  if (a.count < b.count) {
    return 1;
  }
  if (a.charCode > b.charCode) {
    return 1;
  }
  if (a.charCode < b.charCode) {
    return -1;
  }
  return 0;
};

const chars=[" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"];
const codes=[32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126];

const charToCode = chars.reduce((result, char, index) => ({ ...result, [char]: codes[index]}), {})

const rankLetters = (input) => {
  const cleanInput = input.toLowerCase().split('');

  const lengths = cleanInput.reduce((result, value, index) => {
    if (result[value]) {
      return {
        ...result,
        [value]: {
          index,
          char: value,
          charCode: charToCode[value],
          count: result[value].count + 1
        }
      }
    }
    
    return {
      ...result,
      [value]: {
        index,
        char: value,
        charCode: charToCode[value],
        count: 1
      }
    }
  }, {})

  const values = Object.values(lengths)

  const sorted = values.sort(sorter)

  return sorted.map(s => s.char)
};

module.exports = rankLetters;
