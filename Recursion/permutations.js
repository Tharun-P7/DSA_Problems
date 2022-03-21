 function permutations(str,i){
     if(i == str.length-1){
         console.log(str);
         return;
     }
     for(let j=i;j<str.length;j++){
         swap(str,i,j);
         permutations(str,i+1);
         swap(str,i,j);
     }

 }
 function swap(arr,i,j){
     let s=arr[i];
     arr[i]=arr[j];
     arr[j]=s;
 }
arr=['a','b','c'];
permutations(arr,0)