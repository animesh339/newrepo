let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count=0


function increment(){
    count+=1
    countEl.innerText=count
   console.log(count);
}
function save(){
   
    let countStr = count +"-" ;
    saveEl.textContent +=  countStr
    console.log(countStr)
    countEl.textContent=0
    count = 0
    
}

