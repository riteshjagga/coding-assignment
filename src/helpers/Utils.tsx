export const pickRandomValue = (values: Array<string>): string => {
  const randomIndex = Math.floor(Math.random() * values.length)

  return values[randomIndex]
}

