let arr = [64,25,11,12,22]
function selection_sort(arr){
    let n =arr.length
    for(let i=0;i<n-1;i++){
        let min_idx = i
        for(let j=i+1;j<n-1;j++){
            if(arr[j]<arr[min_idx]){
                min_idx=j
            }
        }
        let temp=arr[i]
        arr[i] = arr[min_idx]
        arr[min_idx] = temp
    }
    return arr
}

console.log(selection_sort(arr))