function max_sum(arr,queries){
    var pre=new Array(arr.length);
    pre.fill(0);
    arr.sort();
    for(let i=0;i<queries.length;i++){
        pre[queries[i][0]-1]+=1;
        pre[queries[i][1]]-=1;
        console.log(pre)
    }
    //console.log(pre);
    for(let i=1;i<pre.length;i++){
        pre[i]+=pre[i-1];
    }
    console.log(pre);
    pre.sort();
    var sum=0;
    //console.log(pre,arr);
    for(let i=0;i<arr.length;i++){
        sum+=(pre[i]*arr[i]);
    }
    return sum;
}
let arr=[5,2,4,1,3]

let queries=[[1,5],[2,3],[2,3]];
console.log(max_sum(arr,queries));