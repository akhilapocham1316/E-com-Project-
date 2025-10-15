
function captureFavouriteButtonClick(){
    const product$ = document.getElementById("products")
    const favoriteButton$ = product$.querySelectorAll(".btn-favourite");
    favoriteButton$.forEach(function(btn$){
        btn$.addEventListener("click",function(event){
            const target = event.target;
            const favoriteBtn$ = target.closest(".btn-favourite");
            const selectedId = favoriteBtn$.getAttribute("data-id")
            console.log(selectedId)

            const selectedProductIndex = selectedProductIds.indexOf(selectedId)

            const icon$ = btn$.querySelector(".material-icons-outlined") //icon togling 

            if(selectedProductIndex != -1){
                //means product is already selected

                selectedProductIds.splice(selectedProductIndex , 1);

                icon$.innerText = "favorite_border"; //icon togle
            }else{
                //product is not selected

                selectedProductIds.push(selectedId)

                icon$.innerText = "favorite"; //icon togle
            }
            console.log(selectedProductIds)

            //adding the item to the wishlist and updating the number.
            const wishListCounter$ = document.getElementById("wishlistCounter")
            wishListCounter$.innerText = selectedProductIds.length;
        })
    })
}