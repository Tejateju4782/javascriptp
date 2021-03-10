let a=10;
let b=20;
let c=30;
if(a<=b && a<=c){
    console.log("A is least:",a);
}
else if(b<=a && b<=c){
    console.log("B is least:",b);
}
else{
    if(c<=a && c<=b){
        console.log("C is least:",c);
    }
}