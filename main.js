Alminario Prinze, Now, Edited
function FunctionNameMoPare() {

    let userInput = document.getElementById("UserInput").value;
    let discountedPrice = (userInput * 0.2).toFixed(2);

    document.getElementById("RecommendedBrands").innerHTML = `
       <div class="container text-center mt-5 bg-primary text-white p-5 rounded">
         <h5>Recommended Brands:</h5>
         <button type="button" class="btn btn-outline-primary">Acer</button>
         <button type="button" class="btn btn-outline-primary">Lenovo</button>
         <button type="button" class="btn btn-outline-primary">HP</button> 
         <h2>Eligible Discount 
             <span class="badge bg-danger">${discountedPrice}</span>
         </h2>
       </div>
}
