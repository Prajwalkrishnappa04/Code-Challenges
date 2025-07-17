let arr = [64,25,11,12,22]
let n = arr.length
function insertion_sort(arr,n){
    for(let i=1;i<n;i++){
        key = arr[i]
        j=i-1
        while(j>=0 && arr[j]>key){
            arr[j+1] =arr[j]
            j=j-1
        }
        arr[j+1]=key
    }
    return arr
}
console.log(insertion_sort(arr,n))