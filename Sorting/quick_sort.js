let arr = [64,25,11,12,22]
let n = arr.length
function quick_sort(arr,n){
    if(n<=1){
        return arr
    }
    let left =[] ,right=[]
    let pivot_element=arr[n-1]
    for(let i=0;i<n-1;i++){
        if (arr[i]<pivot_element){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return [...quick_sort(left,left.length),pivot_element,...quick_sort(right,right.length)]
}

console.log(quick_sort(arr,n))