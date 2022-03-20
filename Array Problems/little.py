def max_sum(arr,queries):
    pre=[0 for i in arr.length]
    arr.sort()
    for i in range(queries.length):
        pre[queries[i][0]-1]+=1
        pre[queries[i][1]]-=1
    for i in range(1,pre.length):
        pre[i]+=pre[i-1]
    pre.sort()
    sum=0
    for i in range(arr.length):
        sum+=(pre[i]*arr[i])
    return sum
arr=[5,2,4,1,3]
queries=[[1,5],[2,3],[2,3]]
print(max_sum(arr,queries))