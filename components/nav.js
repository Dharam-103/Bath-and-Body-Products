 
 function nav(){

    return `  <div id="top-nav">
    <div id="first-div">
        <p>POINTS. PERKS. EXCLUSIVES.</p>
        <a href="#">Join Rewards!</a>
    </div>
    <div id="second-div">
        <i class="fa-sharp fa-solid fa-location-dot"></i>
        <p>PICK UP IN STORE</p>
        <a href="#">Set Store</a>
    </div>
</div>

<!-- middle part of navbar section -->

<div id="middle-nav">
    <div id="show-border">
       <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw22126b8b/images/svg-icons/Logos-main.svg?yocs=o_s_" alt="Error">
    </div>
    <div>
        <input type="text" id="search" placeholder="search ...">
        <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
       <a href="">
        <i class="fa-solid fa-user"></i>
         <div id="user-show">
            <ul>
              <li><a href="signup.html">Signin or signup</a></li>
              <li><a href="">Order tracking</a></li>
              <li><a href="">My Auto Refresh</a></li>
              <li><a href="">My Love-It List</a></li>
            </ul>
         </div>
       </a> 
       <a href=""><i class="fa-solid fa-cart-plus"></i></a> 
    </div>
 </div>

<!-- navbar all page heading -->
<div id="page-heading">
    <ul>
     <li><a href="topoffer.html">TOP OFFERS</a></li>
     <li id="item-2"> 
        <a href="bodycare.html">BODY CARE</a>
        <div id="dropdown">
           <ul>
              <li ><a href="">NEW & NOW</a></li>
              <li><a href="">BATH & SHOWER</a></li>
              <li><a href="">MOISTURIZERS</a></li>
              <li><a href="">FRAGRANCE</a></li>
              <li><a href="">EXPLORE BODY CARE</a></li>
           </ul>
        </div>
     </li>
     <li id="item-3"> 
        <a href="candles.html">CANDLES</a> 
        <div id="candles">
           <ul>
              <li ><a href="">ALL CANDLES</a></li>
              <li><a href="">FEATURED</a></li>
              <li><a href="">EXPLORE CANDLES</a></li>
              <li><a href="">BEST OFFERS</a></li>
           </ul>
        </div>
     </li>
     <li id="item-4"> 
        <a href="">HOME FRAGRANCE</a>
        <div id="fragrance">
           <ul>
              <li ><a href="">AIR FRAGRANCE</a></li>
              <li><a href="">FEATURED</a></li>
              <li><a href="">EXPLORE HOME FRAGRANCE</a></li>
              <li><a href="">BEST OFFERS</a></li>
           </ul>
        </div>
     
     </li>
     <li id="item-5">
        <a href="">HANDSOAPS & SANITIZERS</a>
        <div id="Soap">
           <ul>
              <li ><a href="">HAND SOAPS</a></li>
              <li><a href="">FEATURED</a></li>
              <li><a href="">HAND SANITIGERS</a></li>
              <li><a href="">BEST OFFERS</a></li>
           </ul>
        </div>
     
     </li>
     <li id="item-6">
        <a href="men.html">MEN'S SHOP</a>
        <div id="men-shop">
           <ul>
              <li ><a href="">MEN'S SHOP</a></li>
              <li><a href="">EXPLORE MEN'S SHOP</a></li>
           </ul>
        </div>
     </li>
     <li id="item-7">
        <a href="">GIFTS</a>
        <div id="gift">
           <ul>
              <li ><a href="">NEW & NOW</a></li>
              <li><a href="">BATH & SHOWER</a></li>
              <li><a href="">MOISTURIZERS</a></li>
              <li><a href="">FRAGRANCE</a></li>
              <li><a href="">EXPLORE BODY CARE</a></li>
           </ul>
        </div>
     </li>
     <li id="item-8">
        <a href="" class="active">FALL SHOP</a>
        <div id="fall-shop">
           <ul>
              <li ><a href="">NEW & NOW </a></li>
              <li><a href="">EXPLORE FALL SHOP</a></li>
           </ul>
        </div>
     </li>
    </ul>
    
</div>

<!-- navbar last  -->
<div id="nav-last">
    <P>My Bath & Body Works Rewards is now available nationwide!</P>
    <p id="show-popup"> JOIN THE VIPS</p>
</div>
 
<!-- popup -->
<div class="pop">
    <div>
       <h3>JOIN THE VIPS</h3>
       <i class="fa-sharp fa-solid fa-xmark"></i>
    </div>
    <div>
      <p>It's finally here: My Bath & Body Works Rewards <a href="">JOIN THE VIPS</a></p>
    </div>
</div>`

 }

 export { nav };