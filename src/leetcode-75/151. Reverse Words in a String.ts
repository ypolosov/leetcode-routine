export function reverseWords(s: string): string {
    const arr: string[] = [];
    let isWord = false;
    for(let i = 0, j = 0; i < s.length; i++){
        if(s[i] != " "){
            isWord = true;
            arr[j] = arr[j] == undefined ? s[i]: arr[j] + s[i];
        }else {
            if(isWord){
                j++;
            }
            isWord = false;
        }
    }

    const arr2 = [];
    for(let i = arr.length - 1, j = 0; i >= 0; i--, j++){
            arr2[j] = arr[i]
    }
    
    return arr2.join(' ');
};