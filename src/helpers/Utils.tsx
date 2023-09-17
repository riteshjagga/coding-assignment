export function pickRandomValue<T>(values: Array<T>): T {
  const randomIndex = Math.floor(Math.random() * values.length)

  return values[randomIndex]
}

export function capitalizeFirstLetter(word: string) {
  // Check if the input is a valid string
  if (word.length === 0) {
    return word;
  }

  // Capitalize the first letter and concatenate the rest of the word
  return word.charAt(0).toUpperCase() + word.slice(1);
}
