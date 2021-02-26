const quickSort = (array) => {
    let start = 0;
    let end = array.length-1;
    return quickSortAux(array, start, length);
}

const quickSortAux = (array, start, end) => {
    // Stop the recursion if we only have one element
    if (start < end){
        let boundary = partition(array, start, end);
        array = quickSortAux(array, start, boundary-1);
        array = quickSortAux(array, start, boundary+1);
    }
    return array;
}

const partition = (array, start, end) => {
    let mid = Math.floor((start+end)/2);
    let pivot = array[mid];

    // place the pivot at the start
    swap(array, start, mid);

    // set boundary to start
    // the boundary is the next index where an element smaller than the pivot
    // can be swapped into.
    // it is also eventually where the pivot should be placed at the end of the sort.
    let boundary = start;

    // then scan through the list.
    // anything less than the pivot is put to the start.
    for (let i=start; i<=end; i++) {
        if (array[i] < pivot) {
            boundary += 1;
            swap(array, i, boundary);
        }
    }
    swap(array, start, boundary);
    return boundary;
}

const swap = (array, indexA, indexB) => {
    let tmp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tmp;
    return array;
}