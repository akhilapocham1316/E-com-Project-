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
