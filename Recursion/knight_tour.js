let n=8;
var visited = []; 
for(let i=0;i<n;i++){
    visited.push(Array(n).fill(false));
}
function knight_tour(x,y,count){
    if(x<0 || y<0 || x>=n || y>=n){return false;}
    if(visited[x][y]==true){return false;}
    if(count==n*n){return true;}

    let result=false;
    visited[x][y]=true;
    result = result || knight_tour(x+1, y+2, count+1);
    result = result || knight_tour(x+2, y+1, count+1);
    result = result || knight_tour(x+1, y-2, count+1);
    result = result || knight_tour(x+2, y-1, count+1);
    result = result || knight_tour(x-1, y+2, count+1);
    result = result || knight_tour(x-1, y-2, count+1);
    result = result || knight_tour(x-2, y+1, count+1);
    result = result || knight_tour(x-2, y-1, count+1);
    
    visited[x][y]=false;
    return result;
}
let flag=false;
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        visited=[]; 
        for(let k=0;k<n;k++){
            visited.push(Array(n).fill(false));
        }
        if(knight_tour(i,j,1)==true){
            console.log("found");
            flag=true;
            break;
        }
    }
    if(flag) break;
}