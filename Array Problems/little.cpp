#include<iostream>
using namespace std;
int max_sum(int[] arr,int[][] queries){
    int pre[arr.length];
    arr.sort();
    for(int i=0;i<queries.length;i++){
        pre[queries[i][0]-1]+=1;
        pre[queries[i][1]]-=1;
    }
    //console.log(pre);
    for(int i=1;i<pre.length;i++){
        pre[i]+=pre[i-1];
    }
    //console.log(pre);
    pre.sort();
    int sum=0;
    //console.log(pre,arr);
    for(int i=0;i<arr.length;i++){
        sum+=(pre[i]*arr[i]);
    }
    return sum;
}
int main(){
    int arr[3]={5,3,2};
    int queries[3][2]={{1,2},{2,3},{1,3}};
    cout<<max_sum(arr,queries);
}