




//[12,2,4,5,9,8,15]
//[12,2,4],  [5,9,8,15]
//[12] [2,4], [5,9] [8,15]
//[12] [2] [4], [5] [9] [8] [15]
//[12] [2,4], [5,9], [8,15]
//[2,4,12], [5,8,9,15]
//[2,4,5,8,9,12,15]


function merge(arr, start, middle, end){
    const tempArr = [new Array(middle - start + 1)]

    let i = start, j = middle+1, k = 0

    while (i <= middle && j <= end) {
        if (arr[i] <= arr[j]) {
            tempArr[k] = arr[i]
            i++
            k++
        }else{
            tempArr[k] = arr[j]
            j++
            k++
        }
    }

    while(i <= middle){
        tempArr[k] = arr[i]
        i++
        k++
    }


    while (j <= end) {
        tempArr[k] = arr[j]
        j++
        k++
    }


    for (let i = start; i <= end; i++){
        console.log(i);
        arr[i] = tempArr[i]
    }


}


// function mergeSort(arr,l, r){
//     if(l>=r){
//         return;//returns recursively
//     }
//     var m =l+ parseInt((r-l)/2);
//     mergeSort(arr,l,m);
//     mergeSort(arr,m+1,r);
//     merge(arr,l,m,r);
// }

function mergeSort(data, start, end){
    if (start < end) {
        let middle = start + parseInt((end-start)/2)
        console.log(middle);
        mergeSort(data, start, middle)
        mergeSort(data, middle+1, end)
        merge(data, start, middle, end)
    }
}


let arr = [12,2,4,5,9,8,15]
mergeSort(arr, 0, arr.length - 1)
console.log(arr);