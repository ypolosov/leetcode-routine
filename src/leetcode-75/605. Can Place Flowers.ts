export function canPlaceFlowers(flowerbed: number[], n: number): boolean {

    for (let i = 0; i < flowerbed.length; i++) {
        if (n == 0) {
            break;
        }
        if ((i == 0 || (i - 1 >= 0 && flowerbed[i - 1] == 0)) && flowerbed[i] == 0 && ((i == flowerbed.length - 1) || (i + 1 <= flowerbed.length && flowerbed[i + 1] == 0))) {
            flowerbed[i] = 1;
            n--;
        }
    }

    return n == 0 ? true : false;
};