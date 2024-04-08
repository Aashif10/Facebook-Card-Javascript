let add1=document.getElementById("add");
// let remove=documnent.getElementById("remove");
 let heading=document.getElementById("heading");


 add1.addEventListener("click",()=> {
    heading.style.color="green";
    heading.textContent="Friends";
    add1.style.backgroundColor="green";
   add1.textContent="sent";
   add1.style.textAlign="center";
   add1.style.width="100px";
   remove.style.backgroundColor="blue";


})
remove.addEventListener("click",function() {
    heading.style.color="red";
    heading.textContent="Stranger";
    remove.textContent="Remove"
    remove.style.backgroundColor="red";
   add1.style.backgroundColor="blue";
   add1.textContent="Add Friend";
   add1.style.width="130px";
add1.style.marginRight="50px";
})

