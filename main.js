'use strict'

let sections = document.getElementsByTagName('section');
let section1 = sections[0];
let section2 = sections[1];
let section3 = sections[2];



window.addEventListener('scroll', (event) => {
    
   if(window.scrollY > 200){
       
    section1.classList.add('fadein');
   }

   if(window.scrollY > 800){
       
    section2.classList.add('fadein');
   }

   if(window.scrollY > 1100){
       
    section3.classList.add('fadein');
    }

  


    })