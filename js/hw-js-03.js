const arr = [3, -2, 5, 6, -8, 2];

function removeNegativeNumbers (arr) {
    const negative = arr.some(number => number < 0);

    if(negative) {
        const positive = arr.filter(number => number > 0);
        return positive;
    } else {
        return 'No negative numbers found';
    }
}


const result = removeNegativeNumbers(arr)
console.log(result);