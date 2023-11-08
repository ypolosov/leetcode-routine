    function divisors(integer1: number, integer2: number): number[] {

        var result = [];
        for (let i = 1; i <= integer1 || i <= integer2; i++) {
            if (integer1 % i == 0 && integer2 % i == 0) {
                result.push(i)
            }
        }
        return result;
    };

    export function gcdOfStrings(str1: string, str2: string): string {
        const subArr: string[] = [];

        const divs = divisors(str1.length, str2.length);

        for (let i = divs.length - 1; i >= 0; i--) {
            const substr = str1.substring(0, divs[i])
            if (str1.split(substr).join("") == "" && str2.split(substr).join("") == "") {
                return substr;
            }
        }
        return ""

    };