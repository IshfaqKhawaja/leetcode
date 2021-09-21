const urlfy = (s)=>{
    s = [...s]
    console.log(s)
    for(let i=0;i<s.length;i++){
        if(s[i]===" "){
            console.log("Space Found")
            s[i] = '%20';
        }

    }
    console.log(s.join (''))

}

urlfy("Mr John Smith")