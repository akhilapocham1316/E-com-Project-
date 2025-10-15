
const selectedProductIds = [];

const productsElement = document.getElementById("products");


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
                <button type="button" class="btn btn-favourite" data-id="${product._id}">
                <span class="material-icons-outlined" data-id="${product._id}">
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
