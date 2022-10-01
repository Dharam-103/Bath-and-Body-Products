import { nav } from './components/nav.js' 

 const nav_div=document.getElementById('navbar') 

 nav_div.innerHTML=nav() 

 import {footer} from "./components/footer.js"

 const footer_div=document.getElementById('add-footer');

 footer_div.innerHTML=footer()


let topoffers=[
    {
        image:
          "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw64ba7539/images/Fall2022/diff_holiday-newness_fa3_ss.jpg?yocs=o_s_",
       name: "Ends today!",
     sideheading: "Wallflowers Fragrance Refills",
     price:"$3.95"
      },
      {
        image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw1e00c990/images/Fall2022/bc_fall-in-bloom_fa2_ss.jpg?yocs=o_s_",
         name:"All Full-Size Body Care",
         sideheading:"Buy 3, Get 1 FREE",
         price:"Lowest-priced item is free"
      },
      {
        
        image:
          "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw15790b1a/images/Fall2022/sp_thankful-toast_fa3_ss%E2%80%8B.jpg?yocs=o_s_",
          name: "Hand Soaps",
          sideheading:"Buy 3, Get 2 FREE",
       price:"5/$25"
       
      },
      {
        
        image:
          "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwa2857a16/images/Fall2022/cndl_swbest-fragrances_fa2_ss.jpg?yocs=o_s_",
       name: "Single Wick Candles",
       sideheading:"3-Wick Candle",
       price:"2/$22"
      },
      {
        
        image:
          "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwc53ba37d/images/Fall2022/sn_pbac-nav_fa3_ss%E2%80%8B.jpg?yocs=o_s_",
     name:"Hand Sanitizer 5-Packs",
     sideheading:"2 % discount",
     price:"$8"
      },
      {
        
        image:
          "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw2f64a4d6/images/Fall2022/obc_travel_fa3_ss%E2%80%8B.jpg?yocs=o_s_",
       name: "Travel, Hand & Lip Care",
       sideheading: "Buy 3, Get 1 FREE",
       price:"Lowest-priced item is free"
    
      },
    ]

      
topoffers.map((el)=>{
 let div=document.createElement("div")
 let img=document.createElement("img")
 img.setAttribute("src",el.image)
 let h2=document.createElement("h2")
 h2.innerText=el.name
 let h3=document.createElement("h3")
 h3.innerText=el.sideheading
 let h4=document.createElement("h4")
 h4.innerText=el.price
 let button=document.createElement("button")
 button.innerText="SHOP"
 button.addEventListener("click",addtocart)

 function addtocart(){
    let objl={
        img:el.image,
        name:el.name,
        sideheading:el.sideheading,
        price:el.price

    }
 }
 div.append(img,h2,h3,h4,button)
 document.querySelector("#container").append(div)
})



let first=document.querySelector('#container div:nth-child(1) button').addEventListener("click",function(){
  show()
})


let show=()=>{
 console.log('invoke')
 window.location.href='fragrance.html'
}

