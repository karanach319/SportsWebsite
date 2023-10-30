alert("script.js has loaded!");

let titleElement=document.getElementById("title");
titleElement.innerText= "wow"

function changeTitle(){
titleElement.innerText= "wow javascript!";
titleElement.style.color="red";
}
 // setTimeout(changeTitle, 1000);

let clickMeBtn= document.getElementById("click me");
clickMeBtn.addEventListener("click", changeTitle);