function pair(n){
    if(n==1 || n==2){return n;}
    else{
        return pair(n-1)+(n-1)*pair(n-2);
    }
}
console.log(pair(5))