const bubbleSortBasic = (list) => {
    for (let i=0; i<list.length; i++) {
        for (let j=0; j<list.length;j++) {
            if (list[j+1] > list[j]){
                let tmp = list[j+1];
                list[j+1] = list[j];
                list[j] = tmp;
            }
        }
    }
}

const bubbleSortSwapped = (list) => {
    // To handle possible case where list is already sorted
    let swapped = false;

    // Iterate N times 
    for (i=0; i<list.length; i++) {
        for (j=0; j<list.length; j++) {
            if (list[j] > list[j+1]) {
                // Swap
                let tmp = list[j+1];
                list[j+1] = list[j];
                list[j] = tmp;

                swapped = true;
            }
        }
        // If the list is already sorted, then break
        if (!swapped) {
            break;
        }
    }
}

// To handle both the swap, and also to optimise the inner loop to only traverse
// to the point where the unsorted elements end.
const bubbleSortSwappedTrackedIndex = (list) => {
    let swapped = false;

    for (let lastUnsortedIndex=list.length-1; lastUnsortedIndex >= 0; lastUnsortedIndex--) {
        for (let j=0; j<lastUnsortedIndex; j++) {
            if (list[j+1] < list[j]) {
                let tmp = list[j+1];
                list[j+1] = list[j];
                list[j] = tmp;

                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }
}