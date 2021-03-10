let a=20;
let b=5;
let c=10;
if(a<b && a<c){
    if(b<c){
        console.log(a,b,c);
    }
    else{
    console.log(a,c,b);
}
}
else if(b<a && b<c){
    if(a<c){
        console.log(b,a,c)
    }
    else{
    console.log(b,c,a);
    }
}
else if(c<b && c<a){
        if(a<b){
            console.log(c,b,a);
    }
    else{
        console.log(c,a,b);
    }
}
