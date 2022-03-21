function replace(s,i,output){
    if(i==s.length-1){
        console.log(output+s[i]);
        return;
    }
    if(i>=s.length){
        console.log(output);
        return;
    }
    if(s[i]=="p" && s[i+1]=="i"){
        replace(s,i+2,output+"3.14");
    }
    else{
        replace(s,i+1,output+s[i]);
    }
   
}
replace("abcpidedanspiasndpiasndpi",0,"")