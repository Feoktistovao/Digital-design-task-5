var arr = new Array(5);

function fillArray() {
    let temp = [];
    for (let i = 0; i <= arr.length; i++) {
        temp.push(Math.round(Math.random() * 200) - 100);
    }
    return temp;
}

function replaceFromArray() {

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] < 0) {
            arr.splice(i, 1, 0);
        }
    }
    return arr;
}

function addToArray() {

    let count = 0;
    for (i = 0; i <= arr.length - 1; i++) {
        if (count == 2) {
            arr.splice(i,1,-1);
            count = 0;
        } else {
            if (arr[i] == 0) {
                count += 1;
            }

        }
    }
    return arr;
}

arr = fillArray();
console.log(arr);
console.log(replaceFromArray());
console.log(addToArray());
