let btn = document.querySelectorAll("button");
for(let i of btn){
    i.onclick = function(){
        if(i.innerHTML == "="){
            let a = document.querySelector("input").value;
            console.log(eval(a))
            document.querySelector("input").value = eval(a);
         }
         else if(i.innerText == "Clear"){
            document.querySelector("input").value = "";
         }
         else if(i.innerText == "Night"){
            document.body.style.backgroundColor="rgba(68, 68, 68, 0.5)"
         }
        else{
            document.querySelector("input").value += i.innerHTML;
        }
    }
 }