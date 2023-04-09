const consonants = 'bcdfghjklmnpqrstvwxyz';
const vowels = 'aeiou';

function generateRandomWord() {
  const randomConsonant = consonants.charAt(Math.floor(Math.random() * consonants.length));
  const randomVowel = vowels.charAt(Math.floor(Math.random() * vowels.length));
  const randomConsonant2 = consonants.charAt(Math.floor(Math.random() * consonants.length));
  return randomConsonant + randomVowel + randomConsonant2;
}

const word = document.getElementById('word');
const refreshButton = document.getElementById('refresh');

function updateWord() {
  const randomWord = generateRandomWord();
  word.textContent = randomWord;
}

updateWord();

refreshButton.addEventListener('click', updateWord);
