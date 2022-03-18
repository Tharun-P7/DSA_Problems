/**
 * Solution:
 * Create a zero array and iterate through each of the query and add +1 to the L index and subtract -1 from R+1 index
 * Now perform prefix sum and you'll get the targeted array,this is because if we want addition of start to end index then the array should be incremented from start to end and decremented from end+1 index
 */

function processed_array(arr,queries){
    for(let i=0;i<queries.length;i++){
        arr[queries[i][0]]+=1;
        arr[queries[i][1]+1]-=1;
    }
    for(let i=1;i<arr.length;i++){
        arr[i]+=arr[i-1];
    }
    return arr;
}
console.log(processed_array([0,0,0,0,0],[[0,3],[1,2],[2,2]]));