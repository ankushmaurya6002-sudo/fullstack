const filter = document.getElementById("category");
const products = document.querySelectorAll(".product-card");

filter.addEventListener("change", () => {
    const selected = filter.value;

    products.forEach(product => {
        const category = product.dataset.category;

        if (selected === "all" || category === selected) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});
