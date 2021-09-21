const check = (s1,s2)=>{
    console.log(s1,s2)
    if(s1.indexOf(s2)===-1){
        return false;
    }
    else{
        return true;
    }
}


s1 = 'waterbottle';
s2 = 'erbottlewat';
console.log(check(s1+s1,s2))