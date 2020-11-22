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
const contactForm = document.getElementById('contact');
const locations = document.getElementById('location');

checkbox.addEventListener('change', () => {
      document.body.classList.toggle('darkmode');
      contactForm.classList.toggle('formToggle');
      locations.classList.toggle('locationsToggle');

})