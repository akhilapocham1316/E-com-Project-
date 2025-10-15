let priceModified;

fetch("http://localhost:3000/products") //vanila js is fetch
.then(function(res){
    return res.json()
})
.then(function(res){
    console.log("I am the data stored in the data base",res);
    productsModified = res.map(function (product) { //map will create a new set of data and alter the original data.
        product.priceModified = product.price.toFixed(2); //toFixed will give a decimal point.
        return product;
    })
    renderProductCards(productsModified);
}) //success either data there or not also 
.catch(function(err){
    console.log("I am executed becoz there is an error while making a request")
}) //error
.finally(function(){
    console.log("I am executed even if request is success or error")
}) //sucees or not in both cases the request will completed













