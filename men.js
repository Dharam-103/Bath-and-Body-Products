let left=1;
let right=4;
function show(){
    

 for(let i=left;i<=right;i++)
 {
    document.getElementById("c"+i).style.display='inline-block'
 }

}

function moveLeft(){
    

    if(left<5 && right<8){

        document.getElementById('c'+left).style.display='none'
        left++;
        right++;
        for(let i=left;i<=right;i++)
       {
          document.getElementById("c"+i).style.display='inline-block'
       }
    }else{
        
    }

 


}

function moveRight(){

    if(left>1 && right>4){

        document.getElementById('c'+right).style.display='none'
        left--;
        right--;
        for(let i=left;i<=right;i++)
       {
          document.getElementById("c"+i).style.display='inline-block'
       }
    }else{
        return 
    }

}

const data=[
    {
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd6ef9cca/crop/026538274_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
        name: "Leather & Brandy",
        type: "3-Wick Candle",
       price: "13.50",
     
    },
    {
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2ca41ca6/crop/026495998_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       name: "Coffee & Whiskey",
       type: "3-in-1 Hair, Face & Body Wash",
       price: "13.50",
      
    },
    {
      
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5dfe1437/crop/026520258_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       name: "Leather & Brandy",
       type: "Shea Butter Cleansing Bar",
       price: "8.50",
     
    },
    {
      
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6ab59824/crop/026495985_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       name: "Mineral & Sea Salt",
       type: "Ultimate Hydration Body Cream",
       price: "16.50",
     
    },
    {
     
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwae70344e/crop/026495993_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       name: "Mineral & Sea Salt",
       type: "Body Spray",
       price: "14.50",
     },
    {
     
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfeb1e3f8/crop/026538273_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       name: "Coffee & Whiskey",
       type: "3-Wick Candle",
       price: "13.50",
     
    },
    {
      
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw577d94af/crop/024637801_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Ocean",
      type: "Antiperspirant Deodorant",
      price: "12.50",
     
    },
    {
      
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa3f4505c/crop/026502707_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Leather & Brandy",
      type: "Cologne",
      price: "39.50",
     
    },
    {
     
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf9b1131b/crop/026237209_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Ocean",
      type: "3-in-1 Hair, Face & Body Wash",
      price: "13.50",
    },
    {
     
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw26e13ac9/crop/026452598_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Black Tie",
      type: "Single Wick Candle",
      price: "15.50",
     
    },
    {
     
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfd5ceb7e/crop/026438824_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Graphite",
      type: "Gentle Foaming Hand Soap",
      price: "7.50",
    },
    {
     
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw57733e50/crop/026276061_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Bourbon",
      type: "Antiperspirant Deodorant",
      price: "12.50",
   },
    {
     
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd11e9755/crop/026466941_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Freshwater",
      type: "Wallflowers Fragrance Refill",
      price: "7.50",
    },
    {
      
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwce73973f/crop/026311425_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Noir",
      type: "3-in-1 Hair, Face & Body Wash",
      price: "14.50",
    },
    {
      
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwdfe0df3d/crop/026437376_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Mahogany Teakwood",
      type: "Single Wick Candle",
      price: "15.50",
     
    },
    {
      
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe48030b9/crop/026397467_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Black Tie",
      type: "3-in-1 Hair, Face & Body Wash",
      price: "15.50",
    },
    {
     
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3d0a0837/crop/026452991_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Ocean",
      type: "3-Wick Candle",
      price: "13.50",
     
    },
    {
      
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc6262222/crop/026177563_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Teakwood",
      type: "3-in-1 Hair, Face & Body Wash",
      price: "13.50",
    },
    {
     
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc1518184/crop/026438827_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       name: "Black Tie",
       type: "Gentle Foaming Hand Soap",
       price: "7.50",
    },
    {
      
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw71288ec8/crop/026447056_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       name: "Hero",
       type: "Ultimate Hydration Body Cream",
       price: "15.50",
    },
    {
     
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd209a833/crop/026302252_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Mahogany Teakwood",
      type: "Concentrated Room Spray",
      price: "8.50",
     
    },
    {
      
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw386ad733/crop/026410944_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Eucalyptus Spearmint",
      type: "Gentle & Clean Foaming Hand Soap",
      price: "7.50",
     
    },
    {
     
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8c288955/crop/026459591_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Mahogany Teakwood Intense",
      type: "3-Wick Candle",
      price: "13.50",
     
    },
    {
      
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5cb847c3/crop/026397112_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Eucalyptus Spearmint",
      type: "Concentrated Room Spray",
      price: "8.50",
    },
    {
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw83277346/crop/026416317_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Mahogany Teakwood",
      type: "Gentle Foaming Hand Soap",
      price: "7.50",
     
    },
    {
      
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe1df84f7/crop/026397110_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Ocean",
      type: "Concentrated Room Spray",
      price: "8.50",
      
    },
    {
      
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw894cdd5c/crop/026534929_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Eucalyptus Rain",
      type: "Concentrated Room Spray",
      price: "8.50",
     
    },
    {
     
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw1eada527/crop/026534932_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Lakeside Morning",
      type: "Concentrated Room Spray",
      price: "8.50",
     
    },
    {
     
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4337fc43/crop/026410273_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       name: "Eucalyptus Spearmint",
       type: "3-Wick Candle",
       price: "13.50",
     
    },
    {
      
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf1c3d3c5/crop/026397334_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       name: "Eucalyptus Spearmint",
       type: "Wallflowers Fragrance Refill",
       price: "7.50",
     
    },
    {
     
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8c572419/crop/026572578_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       name: "Eucalyptus Mint",
       type: "Wallflowers Fragrance Refill",
       price: "7.50",
      
    },
    {
      
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2587c7ff/crop/026439899_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Eucalyptus Mint",
      type: "Cleansing Gel Hand Soap",
      price: "7.50",
     
    },
    {
     
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa684371a/crop/026553498_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       name: "Lakeside Morning",
       type: "Wallflowers Fragrance Refill",
       price: "7.50",
     
    },
    {
      
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3022bdd5/crop/026397324_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Laundry Day",
      type: "Wallflowers Fragrance Refill",
      price: "7.50",
     
    },
    {
      
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4d0ea3a6/crop/026520256_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       name: "Coffee & Whiskey",
       type: "Shea Butter Cleansing Bar",
       price: "8.50",
      
    },
    {
      
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2ecddbc0/crop/026442804_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Mahogany Teakwood",
      type: "Cleansing Gel Hand Soap",
      price: "7.50",
     
    },
    {
     
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9e89e497/crop/026416311_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       name: "Eucalyptus Mint",
       type: "Gentle Foaming Hand Soap",
       price: "7.50",
     
    },
    {
      
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9bdbdc19/crop/026413481_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Mahogany Teakwood",
      type: "Wallflowers Fragrance Refill",
      price: "7.50",
     
    },
    {
     
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwae6eed49/crop/026438823_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       name: "Ocean",
       type: "Gentle Foaming Hand Soap",
       price: "7.50",
     
    },
    {
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw66824eba/crop/026438825_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Freshwater",
      type: "Gentle Foaming Hand Soap",
      price: "7.50",
    },
    {
      
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcff163db/crop/026358678_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       name: "Mahogany Teakwood Increased Intensity",
       type: "Wallflowers Fragrance Refill",
       price: "7.50",
      
    },
    {
      
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw425502d1/crop/026439826_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Eucalyptus Spearmint",
      type: "PocketBac Hand Sanitizers, 5-Pack",
      price: "8.00",
     
    },
    {
      
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw567364b0/crop/026538780_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       name: "Post Lantern Nightlight",
       type: "Wallflowers Fragrance Plug",
       price: "16.50",
     
    },
    {
     
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw65a7da93/crop/026537807_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       name: "Eucalyptus Mint",
       type: "3-Wick Candle",
       price: "13.50",
      
    },
    {
     
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfa053575/crop/026440730_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       name: "Mahogany Teakwood",
       type: "Car Fragrance Refill",
       price: "4.50",
     
    },
    {
      
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc2825fa3/crop/026393080_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Ocean",
      type: "Shea Butter Cleansing Bar",
      price: "8.50",
     
    },
    {
     
      image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw62bc6eba/crop/026429564_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      name: "Eucalyptus Spearmint",
      type: "Wallflowers Fragrance Refills, 2-Pack",
      price: "14.50",
      
    },
    {
      
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc5134ea6/crop/026395536_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
       name: "Ocean",
       type: "Body Spray",
       price: "14.50",
     
    }
  ]

  const main_div=document.getElementById('show-result')
  function showData(data){

  main_div.innerHTML=null;

  data.forEach(function(el){

    let div= document.createElement('div') 
    
    let img= document.createElement('img') 

    img.src=el.image

    let name= document.createElement('h3') 
    
    name.innerText=el.name

    let type= document.createElement('p') 
    type.innerText=el.type 

    let price= document.createElement('h3') 
    price.innerText=el.price 

    let add= document.createElement('button') 
    add.setAttribute('class','add-btn')
    add.innerText='ADD TO BAG'

     div.append(img,name,type,price,add)

    main_div.append(div)

  })


  }

  showData(data)

  // filtering for data based on type

  const inp=document.getElementById('filter-1')

  inp.addEventListener('change',()=>{
      filteredResult(data)
  })

  const filteredResult =(data)=>{

    const selected=document.getElementById('filter-1').value 

   const new_data= data.filter(function(el){

      return el.type==selected

    })

    console.log(new_data)
    showData(new_data);
  } 

  // filtering for data based on name 

  const out=document.getElementById('filter-2')

  out.addEventListener('change',()=>{
      filteredResultName(data)
  })

  const filteredResultName =(data)=>{

    const selected=document.getElementById('filter-2').value 

   const new_data= data.filter(function(el){

      return el.name==selected

    })

    console.log(new_data)
    showData(new_data);
  } 

 //sorting based on price low to high 


 const output=document.getElementById('sorting')

 output.addEventListener('change',()=>{

  const selected= document.getElementById('sorting').value
    
     if(selected=='Low To High')
     {
         lowToHigh(data)
     }else{
        highToLow(data)
     }
 })
 function lowToHigh(data){

   data.sort(function(a,b){

     return Number(a.price) - Number(b.price)
   })

    console.log(data)
    showData(data)
 }


 function highToLow(data){

   data.sort(function(a,b){

      return Number(b.price)-Number(a.price)
   })

   console.log(data)
   showData(data)
 }


