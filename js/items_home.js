fetch('products.json')
  .then(response => response.json())
  .then(data => {

    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const product_Sale = document.getElementById("product_Sale")
    const smartElectronics = document.getElementById("smartElectronics")
    const AccesoriesPhones = document.getElementById("AccesoriesPhones")
    const AccesoriesGaming = document.getElementById("AccesoriesGaming")
    const DigitaCamera = document.getElementById("Digita&camera")

    data.forEach(product => {
      if (product.old_price) {

        const isInCart = cart.some(cartItem => cartItem.id === product.id)

        const percent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100)

        product_Sale.innerHTML += `


           <div class="col-lg-3 col-md-6 col-sm-12">

                        <span class="sale_present">%${percent_disc}</span>

                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <p class="name_product"><a href="#">${product.name}</a></p>

                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old_price">$${product.old_price}</p>
                        </div>

                        <div class="icons">

    <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
      <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'Added' : 'Add to cart'}
    </span>

    <span class="icon_product" data-id="${product.id}">
      <i class="fa-regular fa-heart"></i>
    </span>

  </div>

                    </div>
            
            
            
            
            `


      }
    })


    data.forEach(product => {

      // فقط فئة smartElectronics
      if (product.catetory === "smartElectronics") {

        // تحقق آمن من العناصر داخل السلة
        const isInCart = cart.some(item => item && item.id === product.id);

        // هل يوجد خصم؟
        const hasDiscount = typeof product.old_price === "number";

        // نسبة الخصم إن وجدت
        const percent_disc_div = hasDiscount
          ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>`
          : "";

        // سعر قديم إن وجد
        const old_price_Pargrahp = hasDiscount
          ? `<p class="old_price">$${product.old_price}</p>`
          : "";

        smartElectronics.innerHTML += `
<div class="col-lg-3 col-md-6 col-sm-12">

  ${percent_disc_div}

  <div class="img_product">
    <a href="#"><img src="${product.img}" alt="${product.name}"></a>
  </div>

  <div class="stars">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
  </div>

  <p class="name_product">
    <a href="#">${product.name}</a>
  </p>

  <div class="price">
    <p><span>$${product.price}</span></p>
    ${old_price_Pargrahp}
  </div>

  <div class="icons">

    <span class="btn_add_cart ${isInCart ? "active" : ""}" data-id="${product.id}">
      <i class="fa-solid fa-cart-shopping"></i>
      ${isInCart ? "Added" : "Add to cart"}
    </span>

    <span class="icon_product" data-id="${product.id}">
      <i class="fa-regular fa-heart"></i>
    </span>

  </div>

</div>
`;
      }
    });



    data.forEach(product => {

      // فقط فئة AccesoriesPhones
      if (product.catetory === "AccesoriesPhones") {

        // تحقق آمن من العناصر داخل السلة
        const isInCart = cart.some(item => item && item.id === product.id);

        // هل يوجد خصم؟
        const hasDiscount = typeof product.old_price === "number";

        // نسبة الخصم إن وجدت
        const percent_disc_div = hasDiscount
          ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>`
          : "";

        // سعر قديم إن وجد
        const old_price_Pargrahp = hasDiscount
          ? `<p class="old_price">$${product.old_price}</p>`
          : "";

        AccesoriesPhones.innerHTML += `
<div class="col-lg-3 col-md-6 col-sm-12">

  ${percent_disc_div}

  <div class="img_product">
    <a href="#"><img src="${product.img}" alt="${product.name}"></a>
  </div>

  <div class="stars">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
  </div>

  <p class="name_product">
    <a href="#">${product.name}</a>
  </p>

  <div class="price">
    <p><span>$${product.price}</span></p>
    ${old_price_Pargrahp}
  </div>

  <div class="icons">

    <span class="btn_add_cart ${isInCart ? "active" : ""}" data-id="${product.id}">
      <i class="fa-solid fa-cart-shopping"></i>
      ${isInCart ? "Added" : "Add to cart"}
    </span>

    <span class="icon_product" data-id="${product.id}">
      <i class="fa-regular fa-heart"></i>
    </span>

  </div>

</div>
`;
      }
    })


    data.forEach(product => {

      // فقط فئة AccesoriesGaming
      if (product.catetory === "AccesoriesGaming") {

        // تحقق آمن من العناصر داخل السلة
        const isInCart = cart.some(item => item && item.id === product.id);

        // هل يوجد خصم؟
        const hasDiscount = typeof product.old_price === "number";

        // نسبة الخصم إن وجدت
        const percent_disc_div = hasDiscount
          ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>`
          : "";

        // سعر قديم إن وجد
        const old_price_Pargrahp = hasDiscount
          ? `<p class="old_price">$${product.old_price}</p>`
          : "";

        AccesoriesGaming.innerHTML += `
<div class="col-lg-3 col-md-6 col-sm-12">

  ${percent_disc_div}

  <div class="img_product">
    <a href="#"><img src="${product.img}" alt="${product.name}"></a>
  </div>

  <div class="stars">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
  </div>

  <p class="name_product">
    <a href="#">${product.name}</a>
  </p>

  <div class="price">
    <p><span>$${product.price}</span></p>
    ${old_price_Pargrahp}
  </div>

  <div class="icons">

    <span class="btn_add_cart ${isInCart ? "active" : ""}" data-id="${product.id}">
      <i class="fa-solid fa-cart-shopping"></i>
      ${isInCart ? "Added" : "Add to cart"}
    </span>

    <span class="icon_product" data-id="${product.id}">
      <i class="fa-regular fa-heart"></i>
    </span>

  </div>

</div>
`;
      }
    })
    data.forEach(product => {

      // فقط فئة Digita&Camera
      if (product.catetory === "Digita&camera") {

        // تحقق آمن من العناصر داخل السلة
        const isInCart = cart.some(item => item && item.id === product.id);

        // هل يوجد خصم؟
        const hasDiscount = typeof product.old_price === "number";

        // نسبة الخصم إن وجدت
        const percent_disc_div = hasDiscount
          ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>`
          : "";

        // سعر قديم إن وجد
        const old_price_Pargrahp = hasDiscount
          ? `<p class="old_price">$${product.old_price}</p>`
          : "";

        DigitaCamera.innerHTML += `
<div class="col-lg-3 col-md-6 col-sm-12">

  ${percent_disc_div}

  <div class="img_product">
    <a href="#"><img src="${product.img}" alt="${product.name}"></a>
  </div>

  <div class="stars">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
  </div>

  <p class="name_product">
    <a href="#">${product.name}</a>
  </p>

  <div class="price">
    <p><span>$${product.price}</span></p>
    ${old_price_Pargrahp}
  </div>

  <div class="icons">

    <span class="btn_add_cart ${isInCart ? "active" : ""}" data-id="${product.id}">
      <i class="fa-solid fa-cart-shopping"></i>
      ${isInCart ? "Added" : "Add to cart"}
    </span>

    <span class="icon_product" data-id="${product.id}">
      <i class="fa-regular fa-heart"></i>
    </span>

  </div>

</div>
`;
      }
    })
  })