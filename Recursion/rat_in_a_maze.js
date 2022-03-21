let n=7;
let arr= [[0 ,0 ,1 ,0 ,0 ,1 ,0],
[1 ,0 ,1 ,1 ,0 ,0 ,0],
[0 ,0 ,0 ,0 ,1 ,0 ,1],
[1 ,0 ,1 ,0 ,0 ,0 ,0],
[1 ,0 ,1 ,1 ,0 ,1 ,0],
[1 ,0 ,0 ,0 ,0 ,1 ,0],
[1 ,1 ,1 ,1 ,0 ,0 ,0]];

let visited=[];
for(let i=0;i<n;i++){
    visited.push(Array(n).fill(false));
}

function ratmaze(x,y){
    // console.log(visited);
    if(x<0 || y<0 || x>=n || y>=n){
        return 0;
    }
    if(arr[x][y]==1){
        return 0;
    }
    if(visited[x][y]==true){
        return 0;
    }
    if(x==n-1 && y==n-1){
        return 1;
    }
    visited[x][y]=true;
    
    let left=ratmaze(x-1,y);
    let down=ratmaze(x,y-1);
    let right=ratmaze(x+1,y);
    let up=ratmaze(x,y+1);
    
    // let up = ratmaze(x-1, y);
    // let left = ratmaze(x, y-1);
    // let down = ratmaze(x+1, y);
    // let right = ratmaze(x, y+1);
    
    visited[x][y]=false;
    return left+down+right+up;
}

console.log(ratmaze(0,0));