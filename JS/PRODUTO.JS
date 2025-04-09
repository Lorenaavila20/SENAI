function decreaseQuantity() {
    var quantityInput = document.querySelector('.quantity-input');
    var currentQuantity = parseInt(quantityInput.value);

    if (currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1;
    }
  }

  function increaseQuantity() {
    var quantityInput = document.querySelector('.quantity-input');
    var currentQuantity = parseInt(quantityInput.value);

    quantityInput.value = currentQuantity + 1;
  }



  var data = new Date();
  console.log(data.toLocaleDateString());  