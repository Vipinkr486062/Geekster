
const Products = [
    { id: 1, name: "Casual Shirt", price: 650 },
    { id: 2, name: "Formal Shirt", price: 1200 },
    { id: 3, name: "Denim Shirt", price: 1500 },
];


let total = 0;
let cartItems = 0;
let cart_container = document.querySelector(".container_right");
let table_body = document.getElementById("table_body");
let plus = document.querySelector(".plus");
let emptyCart = document.querySelector(".table-container p");
let editing = document.getElementById("editing");
editing.classList = "editing";

let checkout = document.querySelector('.Checkout');
let hide = document.querySelector('.df');


checkout.addEventListener('click', function () {
    
    document.querySelector('.df').style.display = 'block';
});


let product_list = document.querySelectorAll(".container-left .product");
product_list.forEach((val) => {

    let plus = val.querySelector(".plus");
    plus.addEventListener("click", () => {
    
        let items = val.querySelector("#items");
        if (items.innerText < 10) items.innerText = parseInt(items.innerText) + 1;
        let product_id = val.querySelector(".product_id").innerText;

    
        Products.forEach((idx) => {
            if (items.innerText == 1 && parseInt(product_id) == idx.id) {
                
                addToCart(idx.id, idx.name, idx.price, items.innerText);
                totalSum(idx.price, items.innerText);
            } else if (parseInt(product_id) == idx.id) {
            
                let td2 = document.querySelector(`#data${idx.id}`);
                td2.innerText = `${items.innerText} x ${idx.price}`;
                totalSum(idx.price, items.innerText);
            }
        });

        if (table_body.children.length > 0) {
            emptyCart.innerText = "";
        }
    });
    let minus = val.querySelector(".minus");
    minus.addEventListener("click", () => {
        let items = val.querySelector("#items");
        if (items.innerText >= 1) items.innerText = parseInt(items.innerText) - 1;
        let product_id = val.querySelector(".product_id").innerText;

        Products.forEach((idx) => {
            if (items.innerText == 0 && parseInt(product_id) == idx.id) {
                removeFromCart(idx.id, idx.name, idx.price, items.innerText);
                subtract(idx.price);
                cartItems--;
                editing.innerText = `${cartItems}`;
            } else if (parseInt(product_id) == idx.id) {
                let td2 = document.querySelector(`#data${idx.id}`);
                td2.innerText = `${items.innerText} x ${idx.price}`;
                subtract(idx.price);
            }
        });

        if (table_body.children.length == 0) {
            emptyCart.innerText = "No Product added to the cart";
        }
    });
});
function addToCart(id, product_name, product_price, no_of_items) {
    cartItems++;
    let row = document.createElement("tr");
    row.setAttribute("id", `row1-${id}`);
    let table_data = document.createElement("td");
    let table_data2 = document.createElement("td");
    table_data.innerText = `${product_name}`;
    table_data2.innerText = `${no_of_items} x ${product_price}`;
    table_data2.setAttribute("id", `data${id}`);
    row.appendChild(table_data);
    row.appendChild(table_data2);
    row.style.borderBottom = "2px dashed black";
    row.style.gap = "160px";
    row.style.marginLeft = "110px";
    row.style.marginTop = "10px";
    row.style.display = "flex";
    row.style.backgroundColor="rgb(255, 255, 255)";
    row.style.padding ="15px 10px";
    // row.style.margin = "13px";
    row.style.alignItems="center";
    row.style.borderRadius ="10px";
    row.style.width = "400px";


    table_body.appendChild(row);
    editing.innerText = `${cartItems}`;
}

// Function to remove a product from the cart
function removeFromCart(id, product_name, product_price, no_of_items) {
    let deleteRow = document.querySelector(`#row1-${id}`);
    table_body.removeChild(deleteRow);
}

// Function to update total sum when adding a product to the cart
function totalSum(price, totalItem) {
    if (totalItem < 10) {
        total += price;
        totalPrice.innerText = `${total}`;
    }
}

// Function to subtract the price when removing a product from the cart
function subtract(price) {
    total -= price;
    totalPrice.innerText = `${total}`;
}

// Event listener for showing the cart when clicking on the cart icon
let cartItem = document.getElementById("cartItem")
let cart = document.querySelector(".cart");
cart.addEventListener("click", () => {
    cartItem.style.display = "block"
});

// Event listener for hiding the cart when clicking on the close button
let close = document.querySelector(".close");
close.addEventListener("click", () => {
    cartItem.style.display = "none"
});