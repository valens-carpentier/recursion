function fibs (n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    let fibArray = [0, 1];
    
    for (let i = 2; i < n; i++) {
        fibArray[i] = fibArray[i-1] + fibArray[i-2];
    }
    
    return fibArray;
}

function fibsRec (n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    let prev = fibsRec(n-1);
    let next = prev[prev.length - 1] + prev[prev.length - 2];
    prev.push(next);
    return prev;
}

console.log(fibsRec(8));

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {  
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort(fibsRec(8)));
