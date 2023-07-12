const ls = window.localStorage

function cart(db,printProducts){
 
  let cart = JSON.parse(ls.getItem('cart')) || [];
  //ELEMENTOS DEL DON 
  const productsDOM=document.querySelector('.products__container');
  const notifyDOM=document.querySelector('.notify');
  const cartDOM=document.querySelector('.cart__body');
  const countDOM=document.querySelector('.cart__count__item');
  const totalDOM=document.querySelector('.cart__total__item');
  const checkOutDOM=document.querySelector('.btn__buy');
  

  //FUNCIONES
  function printCart(){    
    let htmlCart ='';
    if(cart.length===0){
      htmlCart+=`
      <div class="cart__empty">
          <i class='bx bx-shopping-bag'></i>
          <p class="cart__empty__text">No hay productos en el carrito</p>
      `
      notifyDOM.classList.remove('show__notify')
    }else{
      for(const item of cart){
        const product=db.find(prod=>prod.id===item.id);   
         htmlCart +=`
        <article class="article">
        <div class="article__image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="article__content">
          <h3   class="article_title">${product.name}</h3>
          <span class="article__precio">S/${product.price}</span>
          <div class="article__quantity">
            <button type="button" class= "article__quantity__btn article__minus" data-id="${item.id}">
              <i class='bx bx-minus'></i>
            </button>
            <span class="article__quantity_text">${item.qty}</span>
            <button type="button" class= "article__quantity__btn article__plus" data-id="${item.id}">
              <i class='bx bx-plus'></i>
            </button>
          </div>
          <button class="article__btn remove__from__cart" data-id="${item.id}">
            <i class='bx bx-trash'></i>
          </button>
        </div>
        <div class="stock__notify">
        <p class="stock__mensaje">${(product.quantity<=item.qty ) ? 'Cantidad Maxima' : ''}</p>
        </div>
                
      </article>  
        ` 
      }
      notifyDOM.classList.add('show__notify')
    }
    cartDOM.innerHTML = htmlCart;
    notifyDOM.innerHTML = showItemsCount();
    countDOM.innerHTML = showItemsCount();
    totalDOM.innerHTML = showTotal();
    ls.setItem('cart', JSON.stringify(cart))
  };

  

  function addToCart(id,qty=1){
    
    
    const itemFinded=cart.find(i=>i.id===id);
    const productFinded=db.find(prod=>prod.id===id)
    if(itemFinded){
      if(itemFinded.qty>=productFinded.quantity){
     
      }else{
        itemFinded.qty+=qty;

      }
      
    }else{
      cart.push({id,qty});
    }

        
        printCart()
  };
 
  function removeFromCart(id,qty=1){
        const itemFinded=cart.find(i=>i.id===id)
        const result = itemFinded.qty - qty
        if(result > 0){
          itemFinded.qty -= qty

        }else{
         
          cart=cart.filter(i=>i.id!==id)
        }

        printCart()
  };

  function deleteFromCart(id){
        cart=cart.filter(i=>i.id!==id)
        printCart()
  };

  function showItemsCount(){
      let suma=0;
      for(const item of cart){
        suma+=item.qty
      }
      return suma
  } ;

  function showTotal(){
    let total=0;
    for(const item of cart){
      const productFinded=db.find(prod=>prod.id===item.id)
      total += productFinded.price*item.qty
    }
    return total
  };


  /* ---------------------------*/
  /*NOTIFICACION MODAL COMPRA */
  /* ---------------------------*/
  function closeAutomatico(){
    const modalDOM = document.querySelector('.modal__compra');
    modalDOM.style.display = 'none';
  }
 function notificacioncompra(){
  const modalDOM = document.querySelector('.modal__compra');
  let htmlModal='';

        htmlModal=`
            <div class="modal-content">
              <h2>¡Compra exitosa!</h2>
              <p>Gracias por tu compra</p>
            </div>
        ` ;
      modalDOM.innerHTML=htmlModal;      
    
      modalDOM.style.display = 'block';
      setTimeout(closeAutomatico,1500);
    
  }

  function closeModal() {
    const modalDOM = document.querySelector('.modal__compra');
    modalDOM.style.display = 'none';
  }
 
  function checkOut(){
    for(const item of cart){
      const productFinded=db.find(prod=>prod.id===item.id)
      productFinded.quantity-=item.qty;
    };  
    // const dataJson = JSON.stringify(db);
    // localStorage.setItem('data',dataJson);
    cart=[];
    printCart();
    notificacioncompra()
    printProducts();
    setTimeout(closeModal,1000);
    //window.location.reload();
  };
  printCart()

  // EVENTOS

  productsDOM.addEventListener('click',function(e){
   
    
    if(e.target.closest('.add__to__cart')){
      const id = +e.target.closest('.add__to__cart').dataset.id;
      const productFinded=db.find(prod=>prod.id===id)
      if(productFinded.quantity===0){
        window.alert('no tienes productos ')
      }else{
        addToCart(id);
      }
      
    }
  })

  cartDOM.addEventListener('click',function(e){
    if(e.target.closest('.article__minus')){
      const id = +e.target.closest('.article__minus').dataset.id;
      removeFromCart(id);
    }

    if(e.target.closest('.article__plus')){
      const id = +e.target.closest('.article__plus').dataset.id;

      addToCart(id);
    }

    if(e.target.closest('.remove__from__cart')){
      const id = +e.target.closest('.remove__from__cart').dataset.id;
      deleteFromCart(id);
    }

  })

  checkOutDOM.addEventListener('click',function(e){
    checkOut();
  })
}

export default cart

