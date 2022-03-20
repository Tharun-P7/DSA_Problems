/**
 * base case is when row is greater than the given number of columns
 * and when ever the * in columns is equal it jumps to next row
 */

function pattern(r,c,n){
    if(r>n){return;}
    if(c>r){
        process.stdout.write("\n");
        pattern(r+1,1,n);
        return;
    }
    else{
        process.stdout.write("* ");
        pattern(r,c+1,n);
    }
}
pattern(1,1,5);