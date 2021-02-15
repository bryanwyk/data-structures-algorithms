const linearSearchUnsorted = (unsortedList, item) => {
    for (element of unsortedList) {
        if (element === item) {
            return true;
        }
    }
    return false;
}

const linearSearchSorted = (sortedList, item) => {
    for (element of sortedList) {
        if (element === item) {
            return true;
        }
        if (element < item) {
            return false;
        }
    }
    return false;
}

// Look for the index rather than the item
const linearSearchIndex = (unsortedList, item) => {
    for (let i=0; i<unsortedList.length; i++) {
        if (unsortedList[i] === item) {
            return i;
        }
    }
    return null;
}