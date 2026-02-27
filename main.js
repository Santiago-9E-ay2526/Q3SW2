// Function for Discount Button
function discountButton(){
     let firstBudget = document.getElementById("laptopbudget").value;
     let computeDiscountPrice = Number (firstBudget  *  0.2);

     document.getElementById("recommendedBrandAndDiscount").innerHTML =`
     <div class="container bg-secondary rounded mt-5 fluid">
          <h4 class="text-white">Recommended Brands</h4>
          <button class="btn btn-primary mt-3" onclick="">Acer</button>
          <button class="btn btn-primary mt-3" onclick="">Lenovo</button>
          <button class="btn btn-primary mt-3" onclick="">Asus</button>
          <p id="eligible-discount">Eligible discount <span class="badge bg-info" >${computeDiscountPrice}</span></p>
     </div>
     `;
}

// Function for Store and Location Button
function showStoreAndLocationButton(){
     document.getElementById("recommendedStoreAndLocation").innerHTML =`
     <div class="container bg-secondary rounded mt-5 fluid">
          <h4 class="text-white">Store and Location</h4><br>
          <img src="pc express.png" alt="PC Express" style="width: 40%;">
               <p id="PcExpressText">Location:<b> SM Cyberzones, SM North EDSA, SM Manila, Robinsons Place Manila, SM Southmall, Shaw Boulevard</p>
               <br>
               <img src="villman.jpg" alt="Villman Computers" style="width: 40%;">
               <p id="VillmanText"<B>Location: Trinoma, GH Mall, SM Megamall, SM North Annex, SM North EDSA, SM Mall of Asia, SM Fairview</p>
     </div>
     `;
}
