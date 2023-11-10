export function reverseVowels(s: string): string {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const found = [];
    const str = Array.from(s);
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if(str[i] == vowels[j]){
                found.push(str[i]);
                str[i] = '';
            }
        }
    }
    for(let i = str.length - 1, j = 0; i >= 0; i--){
        if(str[i] == ''){
            str[i] = found[j++]
        }
    }
    return str.join('');
};