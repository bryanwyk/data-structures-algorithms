const insertionSort = (list) => {
    for (let unsortedMark=1; unsortedMark<list.length; unsortedMark++) {
        let tmp = list[unsortedMark];
        
        let i = unsortedMark - 1;
        while ((list[i] > tmp) && (i>=0)) {
            list[i+1] = list[i]
            i--;
        }
        list[i+1] = tmp;
    }
}
