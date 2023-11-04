export function numberOfSteps(num: number): number {
    let result = 0;
    while(num != 0){
        if((num & 1) === 0){
            num >>= 1;
        }else{
            num -= 1;
        }
        result++;
    }
    return result;
};