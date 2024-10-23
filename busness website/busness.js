let bar=document.querySelector(".baricon");
let subMenu=document.querySelector(".menu");
let crosbar=document.querySelector(".crossbar");
let bannersection=document.querySelector(".banner-section");
let bannertext=document.querySelector(".bannerText");
let bigimg=document.querySelector(".bigimage");
let smallimg1=document.querySelector(".smallimgs1");
let smallimg2=document.querySelector(".smallimgs2");
let smallimg3=document.querySelector(".smallimgs3");
let smallimg4=document.querySelector(".smallimgs4");
let pricebox=document.querySelector(".price");
let page=document.querySelectorAll("ul li a");
let currentlocatino=location.href;





 for(let x of page){
  console.log(x.href);
  if(x.href===currentlocatino){
    x.classList.add('active');

  }
  
   
   
 }
 
 










 
smallimg1.addEventListener("click",()=>{
     bigimg.src=smallimg1.src;
     pricebox.innerHTML="56$"
   })
   smallimg2.addEventListener("click",()=>{
    bigimg.src=smallimg2.src;

    pricebox.innerHTML="54$"
  })
  smallimg3.addEventListener("click",()=>{
    bigimg.src=smallimg3.src;
    pricebox.innerHTML="50$"
  })
  smallimg4.addEventListener("click",()=>{
    bigimg.src=smallimg4.src;
    pricebox.innerHTML="59$"
  })
  function shopwindow(){
    window.location.href=`shop-1.html`;
  }
  function shopwin(){
    window.location.href=`shop-2.html`;

  }
  
   
 
  
  
 
  
 
  
  



 
 




 
 

  
  crosbar.addEventListener("click",()=>{
    subMenu.classList.remove("menucome");
    bannersection.classList.remove('banercome');
    bannertext.classList.remove("bannerTextDown");
    

  })
   
   bar.addEventListener("click",()=>{
    subMenu.classList.add("menucome");
    bannersection.classList.add('banercome');
    bannertext.classList.add("bannerTextDown");

   });


  
   
    
    