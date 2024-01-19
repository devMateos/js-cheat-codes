let writtenLetter = [];
let writtenWord;
let cheatCodesList = [];
function addCheatCode(code, secretFunction) {
  const separatedCharacters = code.split("");
  cheatCodesList.push({
    code,
    secretFunction,
    separatedCharacters,
  });
};

window.addEventListener('keydown', (pressedKey) => {
  const index = writtenLetter.length;

  const findLetter = cheatCodesList.find((e) => {
      return e.separatedCharacters[index] === pressedKey.key;
  });

  if (findLetter) {
    writtenLetter.push(pressedKey.key);
    console.log(writtenLetter);

    writtenWord = writtenLetter.join("")
    console.log(writtenWord);

    let activateCode;
    cheatCodesList.forEach((e) => {
      if (e.code === writtenWord) {
        console.log('activado', e);
        activateCode = e.secretFunction;
      }
    })

    console.log(activateCode());
    activateCode();
    
  } else {
    writtenLetter = [];
  }
});