let arr = [3, 5, -9, 7, 2, 8, 10, -6];

const sum = arr.reduce((acc, currentVal) => {
    if(currentVal > 0 && currentVal % 3 === 0) {
        return acc + currentVal;
    }
    return acc
}, 0);

console.log(sum);