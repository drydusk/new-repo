let shop = document.getElementById('shop');

let shopItemsData = [{
    id: "0201",
    name: "Casual shirt",
    price: 45,
    desc: "Lorem adjflkjd afjdkf ljdkfja ajdlkfj lkadlfj kdkf.",
    img: "images/img-1.jpg"
}, {
    id: "0202",
    name: "office shirt",
    price: 150,
    desc: "Lorem adjflkjd afjdkf ljdkfja ajdlkfj lkadlfj kdkf.",
    img: "images/img-2.jpg"
}, {
    id: "0203",
    name: "Casual Tee",
    price: 100,
    desc: "Lorem adjflkjd afjdkf ljdkfja ajdlkfj lkadlfj kdkf.",
    img: "images/img-3.jpg"
}, {
    id: "0204",
    name: "white shirt",
    price: 55,
    desc: "Lorem adjflkjd afjdkf ljdkfja ajdlkfj lkadlfj kdkf.",
    img: "images/img-4.jpg"
}]



let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let { id, name, desc, img, price } = x;
        return `<div class="item">
        <img width="220" src="${img}" alt="">
        <div id=product-id-${id} class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2> $ ${price}</h2>
                <div class="buttons">
                    <i id="${id}" class="bi bi-dash-square-dotted"></i>
                    <div class="quantity">0</div>
                    <i id= "${id}" class="bi bi-plus-square-dotted"></i>
                </div>
            </div>
        </div>
    </div>`
    }).join(""));
};

generateShop();