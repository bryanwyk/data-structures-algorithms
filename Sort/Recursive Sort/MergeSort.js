// N.B. tmp is the accumulator
const mergeSort = (array) => {
    let tmp = new Array();
    const start = 0;
    const end = array.length - 1;
    return mergeSortAux(array, start, end, tmp);
}

const mergeSortAux = (array, start, end, tmp) => {
    // If there is two or more elements in the current array to sort
    if (start !== end) {
        let mid = Math.floor((start + end)/2);
        // 'Split' array into two halves and merge-sort 
        array = mergeSortAux(array, start, mid, tmp);
        array = mergeSortAux(array, mid+1, end, tmp);
        // Merge results
        tmp = mergeArrays(array, start, mid, end, tmp);
        // Copy tmp back into the original
        for (let i=0; i<tmp.length; i++) {
            array[i] = tmp[i];
        }
    }
    return array;
}

const mergeArrays = (array, start, mid, end, tmp) => {
    let l = start;
    let r = mid;

    for (let k=start; k<=end; k++){
        // if l > mid, copy r
        if (l > mid) {
            tmp[k] = array[r];
            r += 1;
        }

        // if r > end, copy l
        else if (r > end) {
            tmp[k] = array[l];
            l += 1;
        }

        // if array[l] <= array[r], copy l
        else if (array[l] <= array[r]) {
            tmp[k] = array[l];
            l += 1;
        }

        // else, copy r
        else {
            tmp[k] = array[r];
            r += 1;
        }
    }
    return tmp;
}