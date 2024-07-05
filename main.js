let toggleBtn = document.querySelector("#tB");
let body = document.querySelector("body");
let crdt = document.querySelector("#crdt");
let link = document.querySelector("#link");

let currState = "Light";



toggleBtn.innerText = "Light Mode";


toggleBtn.addEventListener("click", () => {
    if (currState === "Light"){
        currState = "Dark";
        toggleBtn.innerText = "Dark Mode";
        toggleBtn.style.backgroundColor = "black";
        toggleBtn.style.color = "white";

        body.style.backgroundImage = 'linear-gradient(to right, rgb(49, 49, 49) , rgb(125, 52, 234))';
        crdt.style.color = "white";
        link.style.color = "white";
    }
    else{
        currState = "Light";
        toggleBtn.innerText = "Light Mode";
         
        toggleBtn.style.backgroundColor = "white";
        toggleBtn.style.color = "black";
        body.style.backgroundImage = 'linear-gradient(to right, rgb(221, 221, 221) , rgb(125, 52, 234))';
        crdt.style.color = "rgb(26, 26, 26)";
        link.style.color = "black";
    }
});


function dis(val) { 
    document.getElementById("result").value += val;
    let s = document.getElementById("result").value;
    console.log(`${s} is clicked`);


}





function clr() { 
    document.getElementById("result").value = "" 
    console.log("Display Screen is Clear");
} 

function clrOne(){
    let display = document.getElementById("result");
    display.value = display.value.slice(0, -1);
}


function resultant() {
    let x = document.getElementById("result").value;
    console.log(x);
    let res = eval(x);
    document.getElementById("result").value = `${res}`;
}

