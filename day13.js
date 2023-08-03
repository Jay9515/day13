function frequencySort(str) {
  const charFrequency = {};
  for (let char of str) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  const sortedChars = Object.keys(charFrequency).sort((a, b) => {
    if (charFrequency[a] === charFrequency[b]) {
      if (a.toUpperCase() === b.toUpperCase()) {
        return a.localeCompare(b);
      }
      return a.toUpperCase() < b.toUpperCase() ? -1 : 1;
    }
    return charFrequency[b] - charFrequency[a];
  });

  let result = "";
  for (let char of sortedChars) {
    result += char.repeat(charFrequency[char]);
  }

  return result;
}
console.log(frequencySort("jayprakash"));
console.log(frequencySort("careerx"));
console.log(frequencySort("placement"));
