export function compress(chars: string[]): number {
    let index = 0;
    let i = 0;
    while (i < chars.length) {
        let j = i;
        while (chars[i] == chars[j]) {
            j++;
        }
        const char = chars[i];
        const count = j - i;
        chars[index++] = char;
        if (count > 1) {
            Array.from(count.toString()).map(char => chars[index++] = char);
        }
        i = j;
    }

    return index;
};