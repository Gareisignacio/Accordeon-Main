const btns = document.querySelectorAll("button");

btns.forEach(btn =>{
   btn.addEventListener("click", (e)=>{
   let para = e.currentTarget.parentElement.parentElement.childNodes[3];
   let img = e.currentTarget.children[0];
      if(para.style.display === "block"){
         para.style.display = "none";
         img.src = "assets/images/icon-plus.svg"
         }
      else{
         para.style.display = "block"
         img.src = "assets/images/icon-minus.svg"

         }
         
      })
})