const btns = document.querySelectorAll("button");
const para = document.querySelectorAll("p");

btns.forEach(btn =>{
   btn.addEventListener("click", (e)=>{
      para.classList.toggle("hide")
      
   })
})