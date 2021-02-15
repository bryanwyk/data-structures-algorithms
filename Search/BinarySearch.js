// Recursive approach
const binarySearch = (list, item, start, end) => {
    // Base condition: item not found
    if (start > end) {
        return false;
    }

    const mid = Math.floor((start+end)/2);

    if (list[mid] === item) {
        return true;
    }
    else if (list[mid] < item) {
        return binarySearch(list, item, start, mid-1)
    }
    else {
        return binarySearch(list, item, mid+1, end)
    }

}

// Iterative approach
const binarySearch = (list, item) => {
    let start = 0;
    let end = list.length-1;

    while (start < end) {
        let mid = Math.floor((start+end)/2);
        
        if (list[mid] === item) {
            return true;
        }
        else if (list[mid] < item) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }

}