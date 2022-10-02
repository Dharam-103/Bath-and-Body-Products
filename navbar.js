
 import { nav } from './components/nav.js' 

 const nav_div=document.getElementById('navbar') 

 nav_div.innerHTML=nav() 


//  Showing img of bath of border

const show =document.getElementById('show-border') 

show.addEventListener('mouseover',function(){
    showborder()
})

show.addEventListener('click',function(){
    homePage()
})

function homePage(){
    window.location.href="index.html"
}


function showborder(){

    show.classList.add('appear')
}

const remove =document.querySelector('#show-border') 

remove.addEventListener('mouseout',function(){
    removeborder()
})

function removeborder(){

    show.classList.remove('appear');
}

//  all page of border js

const pageHeading =document.getElementById('page-heading') 

pageHeading.addEventListener('click',function(){
    pageborder()
})

function pageborder(){

    pageHeading.classList.add('appear')
}

const pageOut =document.getElementById('page-heading') 

pageOut.addEventListener('mouseout',function(){
    pageOutBorder()
})

function pageOutBorder(){

    pageOut.classList.remove('appear')
}

// showing popup

const popup= document.querySelector('#show-popup')

const pop= document.querySelector('.pop')

popup.addEventListener('mouseover',()=>{

    display()
})

const display=()=>{
    pop.style.display='block'
}

const removePop= document.querySelector('#show-popup')

const hide= document.querySelector('.pop')

removePop.addEventListener('mouseout',()=>{

    update()
})

const update=()=>{
    hide.style.display='none'
}

// Body care dropdown

const show_Div=document.getElementById('dropdown') 

const selected_item=document.getElementById('item-2') 

selected_item.addEventListener('mouseover',()=>{
    divAppear()
})

const divAppear=()=>{
    selected_item.style.textDecoration='underline'
   show_Div.style.display='block'
}

selected_item.addEventListener('mouseout',()=>{
    disappear()
})

const disappear=()=>{

   show_Div.style.display='none'
   selected_item.style.textDecoration='none'
}

//    candles dropdown js 

const candles=document.getElementById('candles') 

const item_3=document.getElementById('item-3') 

item_3.addEventListener('mouseover',()=>{
    visible()
})

const visible=()=>{
    item_3.style.textDecoration='underline'
   candles.style.display='block'
}

 item_3.addEventListener('mouseout',()=>{
    unvisible()
})

const unvisible=()=>{
   candles.style.display='none'
   item_3.style.textDecoration='none'
}

// Fragrance related js 

const fragrance=document.getElementById('fragrance') 

const item_4=document.getElementById('item-4') 

item_4.addEventListener('mouseover',()=>{
    visibled()
})

const visibled=()=>{
    item_4.style.textDecoration='underline'
   fragrance.style.display='block'
}

 item_4.addEventListener('mouseout',()=>{
    unvisibled()
})

const unvisibled=()=>{
   fragrance.style.display='none'
   item_4.style.textDecoration='none'
}

// Hand soap and sanitizer js

const soap=document.getElementById('Soap') 

const item_5=document.getElementById('item-5') 

item_5.addEventListener('mouseover',()=>{
     soapDiv()
})

const soapDiv=()=>{
    item_5.style.textDecoration='underline'
   soap.style.display='block'
}

 item_5.addEventListener('mouseout',()=>{
    soapUndiv()
})

const  soapUndiv=()=>{
   soap.style.display='none'
   item_5.style.textDecoration='none'
}

//   Men's Shop js

const men_shop=document.getElementById('men-shop') 

const item_6=document.getElementById('item-6') 

item_6.addEventListener('mouseover',()=>{
     menShop()
})

const menShop=()=>{
    item_6.style.textDecoration='underline'
   men_shop.style.display='block'
}

 item_6.addEventListener('mouseout',()=>{
    removeMen()
})

const  removeMen=()=>{
   men_shop.style.display='none'
   item_6.style.textDecoration='none'
}

// Gift releted js

const gift=document.getElementById('gift') 

const item_7=document.getElementById('item-7') 

item_7.addEventListener('mouseover',()=>{
     addGift()
})

const addGift=()=>{
    item_7.style.textDecoration='underline'
   gift.style.display='block'
}

 item_7.addEventListener('mouseout',()=>{
    removeGift()
})

const  removeGift=()=>{
   gift.style.display='none'
   item_7.style.textDecoration='none'
}

//  fall shop related js 

const fall=document.getElementById('fall-shop') 

const item_8=document.getElementById('item-8') 

item_8.addEventListener('mouseover',()=>{
     addFall()
})

const addFall=()=>{
    item_8.style.textDecoration='underline'
   fall.style.display='block'
}

 item_8.addEventListener('mouseout',()=>{
    removeFall()
})

const  removeFall=()=>{
   fall.style.display='none'
   item_8.style.textDecoration='none'
  
}

// user icon show div

const user_div= document.getElementById('user-show')

const user_profile=document.querySelector('.fa-user')

user_profile.addEventListener('mouseover',()=>{
     userAppear()
})

const userAppear=()=>{
    user_div.style.display='block'
}

user_profile.addEventListener('mouseout',()=>{
    setTimeout( userDisappear,2000)
})

const userDisappear=()=>{
   user_div.style.display='none'
}









