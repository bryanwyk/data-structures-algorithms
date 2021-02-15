const selectionSort = (list) => {
    for (let i=0; i<list.length; i++) {
        let min = i;

        for (let j=i+1; j<list.length; j++) {
            if (list[j] < list[min]) {
                min = j;
            }
        }

        let tmp = list[i];
        list[i] = list[min];
        list[min] = tmp;
    }
}