function count(str) {
  // Match all vowels
  const vowels = str.match(/[aeiou]/gi) || [];
  // Match all letters (ignoring digits, punctuation, spaces)
  const letters = str.match(/[a-z]/gi) || [];

  const vowelsCount = vowels.length;
  const consonantsCount = letters.length - vowels.length;

  return `Vowels - ${vowelsCount}\nConsonants - ${consonantsCount}`;
}

console.log(count("You can @!# disable"));
