let stars = document.querySelectorAll(".ratings span");
let products = document.querySelectorAll(".ratings");
let ratings = [];

for (let star of stars) {
    star.addEventListener("click", function () {
        let children = star.parentElement.children;
        for (let child of children){
            if(child.getAttribute("data-clicked")){
                return false;
            }
        }

        this.setAttribute("data-clicked", "true");
        let rating = this.dataset.rating;
        let productId = this.parentElement.dataset.productid;
        console.log(rating ,productId);

        let data = {
            "stars": rating,
            "product-id": productId
        }
        ratings.push(data);
        localStorage.setItem("ratings", JSON.stringify(ratings));
    });
}

if(localStorage.getItem("rating")){
    ratings = JSON.parse(localStorage.getItem("rating"));
    for (let rating of ratings) {
        for (let product of products) {
            if(rating["product-id"] == product.dataset.productid){
                let reversedStars = Array.from(product.children).reverse();
                let index = parseInt(rating["stars"]) - 1;
                reversedStars[index].setAttribute("data-clicked", "true");
            }
        }
    }
}