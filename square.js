let arr=[1,4,7,9,13];
function sumofSquares(arr) {
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]**2;
        
    }
    return sum;
    
}
console.log(sumofSquares(arr));