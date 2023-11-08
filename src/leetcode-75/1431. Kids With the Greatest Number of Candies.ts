export function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const result: boolean[] = [];
    let max = 0;
    for(let i = 0; i < candies.length; i++){
        if(max < candies[i]){
            max = candies[i];
        }
    }
    for(let i = 0; i < candies.length; i++){
        if(max <= candies[i] + extraCandies){
            result.push(true);
        }else{
            result.push(false);
        }
    }

    return result;
};