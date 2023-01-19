const vowels = ['a', 'e', 'i', 'o', 'u'];

window.onload = () => {
  document.querySelector('form').onsubmit = (e) => {
    e.preventDefault();
    let userSentence = document.querySelector('form input').value;
    let outputSentence = replaceVowelsWithDashes(userSentence);
    document.querySelector('form input').value = '';
    printSentence(outputSentence);
  };
}

function isVowel(char) {
  return vowels.indexOf(char) !== -1;
}

function replaceVowelsWithDashes(userSentence) {
  let outputString = '';
  for (let i=0; i<userSentence.length; i++) {
    let currentCharacter = userSentence[i];
    let characterToPrint = currentCharacter;
    if (isVowel(currentCharacter)) {
      characterToPrint = '-';
    }
    outputString += characterToPrint;
  }
  return outputString;
}

function printSentence(sentence) {
  document.getElementById('output-area').innerText = sentence;
}