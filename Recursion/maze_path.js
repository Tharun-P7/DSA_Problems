function findpath(i,j,n,m){
    if(i>=n || j>=m){return 0;}
    if(i==m-1 && j==n-1){return 1;}
    else{
        return findpath(i+1,j,n,m) + findpath(i,j+1,n,m);
    }
}
x=findpath(0,0,3,3);
console.log(x);