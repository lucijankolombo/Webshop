/*Show menu in small screen*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {/*Toggle between hiding and showing a menu on smaller screen*/
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        })
    }
}

showMenu('nav-toggle','nav-menu');


/*Toggle between light and dark mode*/
const checkbox = document.getElementById('checkbox');
const home = document.getElementById('home');
const products = document.getElementsByTagName('article');
const addToCart = document.getElementsByClassName('button-light');

checkbox.addEventListener('change', () => {
      document.body.classList.toggle('darkmode');
      home.classList.toggle('darkmode');
      for (let i = 0; i <= products.length; i++) {
          products[i].classList.toggle('darkmode');
      }
      for (let i = 0; i <= addToCart.length; i++) {
          addToCart[i].classList.toggle('addtocart');
      }
})