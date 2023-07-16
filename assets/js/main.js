import loader from './components/loader.js'
import showMenu  from './components/showMenu.js'
import showCart  from './components/showCart.js'
import products from './components/products.js';
import getProducts from './helpers/getProducts.js';
import cart from './components/cart.js';
import modal from './components/modal.js';
import darkMode from './components/darkMode.js';

loader();
//mostrar menu
showMenu();
//mostrar carrito
showCart();

const { db, printProducts } =products(getProducts())

cart(db, printProducts)

modal(db);

const restLS = document.getElementById('restLS')

restLS.onclick = function () {
    // window.localStorage.clear()
    window.localStorage.removeItem('products')
}

darkMode();
// localStorage();

