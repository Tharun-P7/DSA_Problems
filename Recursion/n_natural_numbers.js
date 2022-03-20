/**
 * generate all the natural numbers from 1 to n in ascending order
 */
function print(n){
    if(n==1){console.log(n); return;}
    print(n-1);
    console.log(n);
}
print(5);