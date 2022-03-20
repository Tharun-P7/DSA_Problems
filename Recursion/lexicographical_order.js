/**
 * start is a parameter which denotes the sequence where to start,n is where to end and base case is start>n 
 * where the number iterating when greater than n it stops.
 */

function f(start,n){
    if(start>n) return;
    console.log(start)
    if(start==0){
        for(let i=1;i<=9;i++){
            f(10*start+i,n)
        }
    }
    else{
        for(let i=0;i<=9;i++){
            f(10*start+i,n)
        }
    }
}

f(0,100);