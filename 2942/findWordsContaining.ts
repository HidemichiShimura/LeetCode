export default function findWordsContaining(
  words: string[],
  x: string
): number[] {
  const indices: Array<number> = [];

  words.forEach((word, idx) => {
    if (word.includes(x)) indices.push(idx);
  });

  return indices;
}
