const products = [
    {
        id : 1,
        title: "Mackbook",
        image: "https://demo.opencart.com/image/cache/catalog/demo/macbook_1-200x200.jpg",
        description: "Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..",
        price: 600,
    },
    {
        id : 2,
        title: "iPhone",
        image: "https://demo.opencart.com/image/cache/catalog/demo/iphone_1-200x200.jpg",
        description: "iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping..",
        price: 123,
    },
    {
        id: 3,
        title: "Apple Cinema 30",
        image: "https://demo.opencart.com/image/cache/catalog/demo/apple_cinema_30-200x200.jpg",
        description: "The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..",
        price: 110,
    },
    {
        id :4,
        title: "Canon EOS 5D",
        image: "https://demo.opencart.com/image/cache/catalog/demo/canon_eos_5d_1-200x200.jpg",
        description: "Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..",
        price: 98,
    },
]


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


const selectedProductIds = [];

const productsElement = document.getElementById("products");

const productsModified = products.map(function (product) { //map will create a new set of data and alter the original data.
    product.priceModified = product.price.toFixed(2); //toFixed will give a decimal point.
    return product;
})
renderProductCards(products);


function renderProductCards(products) {
    let productCards = "";

    for (i = 0; i < products.length; i++) {
        productCards = productCards + renderProductCard(products[i]);
    }
    productsElement.innerHTML = productCards;

    captureFavouriteButtonClick();
}

function renderProductCard(product) {
    return ` <div class="col-12 col-md-4 col-sm-6 col-lg-3">
    <div class="card">
        <img src="${product.image}"
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <div>
            <strong><span class="material-icons-outlined">
            currency_rupee
            </span>${product.priceModified}</strong>
            </div>
            <div class="btn-group w-100" role="group" aria-label="Basic example">
                <button type="button" class="btn"><span class="material-icons-outlined">
                        add_shopping_cart
                    </span></button>
                <button type="button" class="btn btn-favourite" data-id="${product.id}">
                <span class="material-icons-outlined" data-id="${product.id}">
                        favorite_border
                    </span></button>
                <button type="button" class="btn"><span class="material-icons-outlined">
                        compare_arrows
                    </span></button>
            </div>
        </div>
    </div>
    </div>`
}

// search logic

const search$ = document.getElementById("search");
search$.addEventListener("keyup", function (event) {
    // console.log(event)
    const term = search$.value; //to enter the value in search and to see the value 
    // console.log(term);

    const termLowerCased = term.toLowerCase(); //lowercase the letters 
    // console.log(termLowerCased);


    // to filter the items for what we are searching for 
    const productFiltered = productsModified.filter(function (product) {
        const titleLowercased = product.title.toLowerCase();
        return titleLowercased.indexOf(termLowerCased) != -1; //if it matches give the result otherwise it will give -1 if not found.
    })
    renderProductCards(productFiltered);
})












