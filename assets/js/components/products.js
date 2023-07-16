const ls = window.localStorage

function products(products){
const db = JSON.parse(ls.getItem('products')) || products

 function printProducts(){
  const productsDOM=document.querySelector('.products__container');
  let htmlProduct='';
  for(let product of db){
    htmlProduct+=`
    <article class="product">
    <div class="product__image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    
    <div class="product__content">
      <button type="button" class="product__btn add__to__cart" data-id="${product.id}" >
        <i class='bx bx-cart'></i>
      </button>
      <span class="product__precio">S/. ${product.price}</span>
      <span class="product__stock">Disponible: ${product.quantity}</span>
      <h3 class="product__title">${product.name}</h3> 
      <div class="product_information">
        <button class="info-btn btn-informacion" data-id="${product.id}""><i class='bx bxs-info-circle'></i></button>
      </div>
  
    </div>
  </article>
    `
  }
  productsDOM.innerHTML = htmlProduct

  ls.setItem('products', JSON.stringify(db))
 }

 printProducts()
 return{
    db,
    printProducts
  }
}

export default products


