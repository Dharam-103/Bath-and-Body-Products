import { nav } from './components/nav.js' 

const nav_div=document.getElementById('navbar') 

nav_div.innerHTML=nav() 


import {footer} from "./components/footer.js"

const footer_div=document.getElementById('add-footer');

footer_div.innerHTML=footer()

 let form = document.querySelector("form")

 let arrsignin = JSON.parse(localStorage.getItem("arraysignup"))||[]
 
 form.addEventListener("submit", function(event){
     event.preventDefault()
 
     if(arrsignin==0){
         alert("No User Found Till Now")
         return
     }
     let obj={
         email:form.email.value,
         password:form.passw.value,      
     }
    
     let flag=false
 
 for(let i=0; i<arrsignin.length; i++ ){
         if(arrsignin[i].emails==obj.email && arrsignin[i].password==obj.password){
             flag=true;
             alert("Login Successfull")
             window.location.href="./Home Page/index/index.html"
            //  break;
             
            }
         
         }
     if(flag==false){
         alert("Wrong Username Or Password")
     }
 })