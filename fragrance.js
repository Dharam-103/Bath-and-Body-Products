
 import { nav } from './components/nav.js' 

 const nav_div=document.getElementById('navbar') 

 nav_div.innerHTML=nav() 





import {footer} from "./components/footer.js"

const footer_div=document.getElementById('add-footer');

footer_div.innerHTML=footer()



let items=[
    {
        images:"data:image/jpeg;base64,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",
        titles:"WHITE TEA & SAGE",
        sidetitles:"Wallflowers Fragrance Refills, 2-Pack",
        prices:"13.50",
        minn:"Mix & Match: 3/$30",
    },
    {
        images:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9e2b19d7/hires/026574838.jpg?sh=471&yocs=o_s_",
        titles:"GOLDEN TURKEY",
        sidetitles:"Wallflowers Fragrance Plug",
        prices:"12.50",
        minn:"Mix & Match: 2/$40",
    },
    {
        images:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4ba08daf/hires/026539759.jpg?sh=471&yocs=o_s_",
        titles:"STACKED PUMPKINS",
        sidetitles:"Wallflowers Fragrance Plug",
        prices:"14.50",
        minn:"Mix & Match: 3/$10",
    },
    {
        images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLz2I1zho_AwDcv6CXfp1WV3nu7rAC8C29JgHi8hGhDB_FMWu0ohSsv9QE0bOVYz2bJA&usqp=CAU",
        titles:"WHITE PUMPKIN LANTERN",
        sidetitles:"Wallflowers Fragrance Plug",
        prices:"18.50",
        minn:"Mix & Match: 0.9/$10",
    },
    {
        images:"https://media.istockphoto.com/photos/perfume-bottle-flat-lay-with-fragrance-ingredients-top-view-picture-id1324726060?b=1&k=20&m=1324726060&s=170667a&w=0&h=fYKuzxqeR_l9c54hetfsvBC8oL0_NWKHZO7JrtemOG4=",
        titles:" IMAGES COZY LINEN",
        sidetitles:"Concentrated Room Spray",
        prices:"8.50",
        minn:"Mix & Match: 3/$22",
    },
    {
        images:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw10eeb2a5/hires/026534930.jpg?sh=471&yocs=o_s_",
        titles:"FLANNEL",
        sidetitles:"Concentrated Room Spray",
        prices:"8.50",
        minn:"Mix & Match: 3/$22",
    },
    {
        images:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5b4e0585/hires/026555112.jpg?sh=471&yocs=o_s_",
        titles:"SWEATER WEATHER",
        sidetitles:"Concentrated Room Spray",
        prices:"8.50",
        minn:"Mix & Match: 3/$22",
    },
    {
        images:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6e4e6d00/hires/026534929.jpg?sh=471&yocs=o_s_",
        titles:"EUCALYPTUS RAIN",
        sidetitles:"Concentrated Room Spray",
        prices:"8.50",
        minn:"Mix & Match: 3/$22",
    },
    {
        images:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5764de13/hires/026573255.jpg?sh=471&yocs=o_s_",
        titles:"WINTER",
        sidetitles:"Wallflowers Fragrance Refill",
        prices:"7.50",
        minn:"Mix & Match: 5/$25",
    },
    {
        images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZnmIbAISjut0sdd02oy3z7KNCGcNfr227SoEBplMJFUG_-qkeI3Mxo_qgnsO08FyWLI&usqp=CAU",
        titles:"SPICED APPLE TODDY",
        sidetitles:"Wallflowers Fragrance Refill",
        prices:"7.50",
        minn:"Mix & Match: 5/$25",
    },
    {
        images:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd0d574bc/hires/026558907.jpg?sh=471&yocs=o_s_",
        titles:"SWEATER WEATHER",
        sidetitles:"Wallflowers Fragrance Refill",
        prices:"7.50",
        minn:"Mix & Match: 5/$25",
    },
    {
        images:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcb6b5664/hires/026573052.jpg?sh=471&yocs=o_s_",
        titles:"CUDDLE WEATHER",
        sidetitles:"Wallflowers Fragrance Refill",
        prices:"7.50",
        minn:"Mix & Match: 5/$25",
    }
]

let box=document.querySelector("#basic")
function showData(items){
    box.innerHTML=null;
    items.map(function(el){
      
    let div=document.createElement("div")
    let images=document.createElement("img")
    images.setAttribute("src",el.images)
    let titles=document.createElement("h3")
    titles.innerText=el.titles
    let sidetitles=document.createElement("h4")
    sidetitles.innerText=el.sidetitles
    let prices=document.createElement("h5")
    prices.innerText=el.prices
    let minn=document.createElement("h5")
    minn.innerText=el.minn
  
    let button=document.createElement("button")
    button.innerText="Add To Bag"
    
  
  div.append(images,titles,sidetitles,prices,minn,button)
  box.append(div)
  
  })

}

showData(items)

//fragrance name functionality
const inp=document.getElementById('type')

  inp.addEventListener('change',()=>{
      filteredResult(items)
  })

  const filteredResult =(items)=>{

    const selected=document.getElementById('type').value 

   const new_data= items.filter(function(el){

        
        return el.sidetitles==selected

    })

    console.log(new_data)
   showData(new_data)
  }
//Fragrance Products functionality



const priya=document.getElementById('name')

  priya.addEventListener('change',()=>{
      filteredResults(items)
  })

  const filteredResults =(items)=>{

    const selected=document.getElementById('name').value 

   const new_data= items.filter(function(el){

        
        return el.titles==selected

    })
    console.log(new_data)
   showData(new_data)
  }

//sorting functionality

    const output=document.getElementById('sort')

 output.addEventListener('change',()=>{

  const selected= document.getElementById('sort').value
    
     if(selected=='Price Low to High')
     {
         lowToHigh(items)
     }else{
        highToLow(items)
     }
 })
 function lowToHigh(items){

   items.sort(function(a,b){

     return Number(a.prices) - Number(b.prices)
   })

    console.log(items)
    showData(items)
 }


 function highToLow(items){

   items.sort(function(a,b){

      return Number(b.prices)-Number(a.prices)
   })

   console.log(items)
   showData(items)
 }

    