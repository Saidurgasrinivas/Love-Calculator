function calculatelove(){
    const name1=document.getElementById("name1").value.trim();
    const name2=document.getElementById("name2").value.trim();
    if(name1==="" || name2==="")
    alert("Enter Both names dude.....");
    else{
        const loveper=Math.floor(Math.random() *101);
        const result=document.getElementById("result");
        result.innerHTML=`${name1} and ${name2}'s love percentage:${loveper}`;
        if(loveper<30){
            result.innerHTML+="<br> Not a Great Match.keeping Looking!"
        }
        else if(loveper>=30 && loveper<70){
            result.innerHTML+="<br> There is potential.Give it a try"
        }
        else{
            result.innerHTML+="<br> Great Match"
        }
}  
}