export function mergeAlternately(word1: string, word2: string): string {
    const length = word1.length >= word2.length ? word1.length : word2.length;
    const zipStr = [];
    for (let i = 0; i < length; i++) {
        if (word1.length > i) {
            zipStr.push(word1[i]);
        }
        if (word2.length > i) {
            zipStr.push(word2[i]);
        }
    }
    return zipStr.join('');
};