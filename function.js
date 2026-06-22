
let totalPresses=0;
const lastKey = document.getElementById("lastkey");
const counter = document.getElementById("counter");
document.addEventListener("keydown",function(event){
    lastKey.textContent=event.key;

    totalPresses++;
    counter.textContent=totalPresses;
    const key=document.querySelector(
        `[data-code="${event.code}"]`
    );
    if(key) {
        key.classList.add("active");
        
    }
});

document.addEventListener("keyup",function(event){
    const key = document.querySelector(
        `[data-code="${event.code}"]`
    );
    if(key){
        key.classList.remove("active");
    }

});