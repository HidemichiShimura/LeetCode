export function countPrefixSuffixPairs(words: string[]): number {
  let pairCount = 0;

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isPrefixAndSuffix(words[i], words[j])) pairCount++;
    }
  }

  return pairCount;
}

function isPrefixAndSuffix(affix: string, str: string) {
  return str.startsWith(affix) && str.endsWith(affix);
}
