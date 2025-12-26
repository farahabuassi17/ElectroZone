let category_nav_list = document.querySelector(".category_nav_list");

function Open_Categ_list() {
    category_nav_list.classList.toggle("active")

}
function toggleMenu() {
    var menu = document.querySelector(".nav_links");
    menu.classList.toggle("active");
}

var navLinks = document.querySelectorAll(".nav_links a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        document.querySelector(".nav_links").classList.remove("active");
    });
});
document.addEventListener("DOMContentLoaded", loadCheckoutCart);

function loadCheckoutCart() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const itemsBox = document.querySelector(".checkout .items");
    const subtotalEl = document.querySelector(".subtotal_checkout");
    const totalEl = document.querySelector(".total_checkout");
    const headerCount = document.querySelector(".count_item_header");

    itemsBox.innerHTML = "";

    let subtotal = 0;
    let count = 0;

    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        count += item.quantity;

        itemsBox.innerHTML += `
        
        <div class="item_cart">

            <div class="image_name">
                <img src="${item.img}" alt="">
                
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price_cart">$${itemTotal}</p>

                    <div class="quantity_control">
                        <button class="decrease_checkout" data-index="${index}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="increase_checkout" data-index="${index}">+</button>
                    </div>
                </div>
            </div>

            <button class="delete_checkout" data-index="${index}">
                <i class="fa-solid fa-trash-can"></i>
            </button>

        </div>
        `;
    });

    subtotalEl.innerHTML = `$${subtotal}`;
    totalEl.innerHTML = `$${subtotal}`;
    headerCount.innerHTML = count;

    attachCheckoutEvents();
}
function attachCheckoutEvents() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // زيادة الكمية
    document.querySelectorAll(".increase_checkout").forEach(btn => {
        btn.onclick = () => {
            let i = btn.getAttribute("data-index");
            cart[i].quantity++;
            localStorage.setItem("cart", JSON.stringify(cart));
            loadCheckoutCart();
        };
    });

    // تقليل الكمية
    document.querySelectorAll(".decrease_checkout").forEach(btn => {
        btn.onclick = () => {
            let i = btn.getAttribute("data-index");
            if (cart[i].quantity > 1)
                cart[i].quantity--;
            localStorage.setItem("cart", JSON.stringify(cart));
            loadCheckoutCart();
        };
    });

    // حذف عنصر
    document.querySelectorAll(".delete_checkout").forEach(btn => {
        btn.onclick = () => {
            let i = btn.getAttribute("data-index");
            cart.splice(i, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            loadCheckoutCart();
        };
    });

}


const cart = document.querySelector(".cart");
const overlay = document.querySelector(".cart_overlay");
function open_close_cart() {

    cart.classList.toggle("active");
    overlay.classList.toggle("show");
}

fetch('products.json')
    .then(response => response.json())
    .then(data => {
        const addToCartButtons = document.querySelectorAll(".btn_add_cart")
        addToCartButtons.forEach(button => {
            button.addEventListener("click", (event) => {
                const productId = event.target.getAttribute('data-id')
                const selcetedProduct = data.find(product => product.id == productId)

                addToCart(selcetedProduct)

                const allMatchingButtons = document.querySelectorAll(`.btn_add_cart[data-id="${productId}"]`)
                allMatchingButtons.forEach(btn => {
                    btn.classList.add("active")
                    btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Added`
                })

            })

        })

    })
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push({ ...product, quantity: 1 })
    localStorage.setItem('cart', JSON.stringify(cart))

    updateCart()

}

function updateCart() {
    const cartItemsContainer = document.getElementById("cart_items")
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    var total_Price = 0
    var total_count = 0
    cartItemsContainer.innerHTML = "";
    cart.forEach((item, index) => {
        let total_Price_item = item.price * item.quantity;
        total_Price += total_Price_item
        total_count += item.quantity

        cartItemsContainer.innerHTML += `
            <div class="item_cart">
                <img src="${item.img}" alt="}">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price_cart">$${total_Price_item}</p>
                    <div class="quantity_control">
                        <button class="decrease_quantity" data-index="${index}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="Increase_quantity" data-index="${index}">+</button>
                    </div>
                </div>

                <button class="delete_item" data-inex="${index}" ><i class="fa-solid fa-trash-can"></i></button>
            </div>

`

    })

    const price_cart_total = document.querySelector('.price_cart_toral')
    const count_item_cart = document.querySelector('.Count_item_cart')
    const count_item_header = document.querySelector('.count_item_header')
    price_cart_total.innerHTML = `$${total_Price}`
    count_item_cart.innerHTML = total_count
    count_item_header.innerHTML = total_count



    const increaseButtons = document.querySelectorAll(".Increase_quantity")
    const decreaseButtons = document.querySelectorAll(".decrease_quantity")
    increaseButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const itemIndex = event.target.getAttribute("data-index")
            increaseQuantity(itemIndex)
        })
    })
    decreaseButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const itemIndex = event.target.getAttribute("data-index")
            decreaseQuantity(itemIndex)
        })
    })

    const deleteButtons = document.querySelectorAll('.delete_item')
    deleteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const itemIndex = event.target.closest('button').getAttribute('data-inex')
            removeFromCart(itemIndex)


        })
    })
}
function increaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart[index].quantity += 1
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCart()
}
function decreaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCart()
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    const removeProduct = cart.splice(index, 1)[0]
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCart()
    updateButtonState(removeProduct.id)
}

function updateButtonState(productId) {
    const allMatchingButtons = document.querySelectorAll(`.btn_add_cart[data-id="${productId}"]`)
    allMatchingButtons.forEach(button => {
        button.classList.remove('active');
        button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Add to cart `

    })


}
updateCart()




