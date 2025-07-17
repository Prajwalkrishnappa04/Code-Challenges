let arr = [64,25,11,12,22]
let n=arr.length
function merge_sort(arr,n){
    if(n<=1){
        return arr
    }
    let mid= Math.floor(n/2)
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid,n)
    let leftsorted = merge_sort(leftArr,leftArr.length)
    let right_sorted = merge_sort(rightArr,rightArr.length)
    return merge(leftsorted,right_sorted)
}

function merge(leftArr,rightArr){
    let result=[]
    let i=0,j=0
    while(i<leftArr.length && j<rightArr.length){
        if (leftArr[i]<rightArr[j]){
            result.push(leftArr[i])
            i++
        }
        else{
            result.push(rightArr[j])
            j++
        }
    }
    while(i<leftArr.length){
        result.push(leftArr[i])
            i++
    }
    while(j<rightArr.length){
        result.push(rightArr[j])
            j++
    }
    return result
}

console.log(merge_sort(arr))