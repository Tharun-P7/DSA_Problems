function f(str,output){
    if(str == ""){
    console.log(output);  //According to the explanation when the str is empty we are returning the original string
    return;
    }
    let ch = str[0];   //We are removing the first char of original string and append to the output string once and not append once
    let restofstring = str.substring(1);
    f(restofstring,output+ch);
    f(restofstring,output);
}
f("abc","");
