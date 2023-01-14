const productListElement = document.querySelector("#product-list");

class Product {
  constructor(barcode, image, name) {
    this.barcode = barcode;
    this.image = image;
    this.name = name;
  }

  render() {
    const nameElement = document.createElement("div");
    nameElement.classList.add("product__name");
    nameElement.innerHTML = this.name;

    const barcodeElement = document.createElement("div");
    barcodeElement.classList.add("product__barcode");
    barcodeElement.innerHTML = this.barcode;

    const imageElement = document.createElement("img");
    imageElement.classList.add("product__image");
    imageElement.setAttribute("src", this.image);

    const buttonElement = document.createElement("button");
    buttonElement.classList.add("button");
    buttonElement.innerHTML = "Add to cart";
    buttonElement.addEventListener("click", () => {
      const event = new CustomEvent("app@add-to-cart", { detail: { product: this } });
      document.dispatchEvent(event);
    });

    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.append(nameElement, barcodeElement, imageElement, buttonElement);

    return productElement;
  }
}

class Cart {
  cartItemListElement = document.querySelector("#cart-item-list");
  items = [];

  constructor() {
    document.addEventListener("app@add-to-cart", (event) => {
      this.items.push(event.detail.product);
      this.cartItemListElement.innerHTML = "";
      this.cartItemListElement.append(...this.render());
    });
  }

  renderCartItem(currentItem) {
    const cartItemNameElement = document.createElement("div");
    cartItemNameElement.classList.add("cart-item__name");
    cartItemNameElement.innerHTML = currentItem.name;

    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cart-item");
    cartItemElement.append(cartItemNameElement);

    return cartItemElement;
  }

  render() {
    const elements = [];

    for (let i = 0; i < this.items.length; i++) {
      elements.push(this.renderCartItem(this.items[i]));
    }

    return elements;
  }
}

const cart = new Cart();

fetch("./products.json")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log("Error!");
    }
  })
  .then((json) => {
    console.log(json);
    for (let i = 0; i < json.length; i++) {
      const currentProduct = json[i];
      const product = new Product(
        currentProduct.barcode,
        currentProduct.image,
        currentProduct.name,
      );
      productListElement.append(product.render());
    }
  })
  .catch((error) => {
    console.log(error);
  });
