export function canConstruct(ransomNote: string, magazine: string): boolean {
    const dict: { [k: string]: number } = {};
    for (let i = 0; i < magazine.length; i++) {
        const nextLetter = magazine[i];
        if (dict[nextLetter] === undefined) {
            dict[nextLetter] = 1;
        } else {
            dict[nextLetter] += dict[nextLetter];
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        const neededLetter = ransomNote[i];
        if (dict[neededLetter] && dict[neededLetter] > 0) {
            dict[neededLetter]--;
        } else {
            return false;
        }
    }
    return true;
};