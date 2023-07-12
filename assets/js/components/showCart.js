function showCart(){
  const btnCart=document.querySelector('.btn__cart');
  const cart=document.querySelector('.cart');
  btnCart.addEventListener('click',function(){
    cart.classList.add('show__cart');
  })
  cart.addEventListener('click',function(event){
  
    if(event.target.closest('.cart__close')){
      cart.classList.remove('show__cart');
    };
   
  })
}
export default showCart