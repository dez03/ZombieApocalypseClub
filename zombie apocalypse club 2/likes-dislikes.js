const likeBtn = document.querySelector(".like_btn");
let count= document.querySelector("#counter");

let clicked=false;

likeBtn.addEventListener("click", () => {
  if (!clicked){
    clicked=true;
    count.textContent++;
  } 
  else {
    clicked=false
    count.textContent--;
  }
})