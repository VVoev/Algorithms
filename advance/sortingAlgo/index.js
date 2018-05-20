function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j + 1];
                arr[j + 1] = arr[j]
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }

    }
    return [...arr, ...left, ...right];

}

function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        for (var j = i - 1; j > -1 && arr[j] > current; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = current;
    }

    return arr;
}

function quickSort(arr, left, right) {

    var index;

    if (arr.length > 1) {

        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? arr.length - 1 : right;

        index = partition(arr, left, right);

        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }

        if (index < right) {
            quickSort(arr, index, right);
        }

    }

    return arr;
}




function partition(arr, left, right) {

    var pivot = arr[Math.floor((right + left) / 2)],
        i = left,
        j = right;


    while (i <= j) {

        while (arr[i] < pivot) {
            i++;
        }

        while (arr[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function swap(arr, firstIndex, secondIndex) {
    var temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}


//TESTING ONLY
// const arr = [];
// for (let index = 0; index < 100000; index++) {
//     index % 2 === 0 ? arr.push(index + 31) : arr.push(index - 25);
// }

// let sorted = quickSort(arr);
// console.log(sorted);




module.exports = { bubbleSort, selectionSort, mergeSort, merge, insertionSort, quickSort };