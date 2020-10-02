const selectionSort = (aInput) => {

    for (var wall = 0; wall < aInput.length - 1; wall++) {
        let indexOfPosition = wall;
        for (var j = wall + 1; j < aInput.length; j++) {
            if (aInput[indexOfPosition] > aInput[j]) {
                indexOfPosition = j;
            }
        }
        var temp = aInput[wall];
        aInput[wall] = aInput[indexOfPosition];
        aInput[indexOfPosition] = temp;
    }

}

let aInput = [10, 15, 25, 13, 5, 9, 4, 21, 1];
selectionSort(aInput);
console.log(aInput);