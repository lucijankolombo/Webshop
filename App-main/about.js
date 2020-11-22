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

checkbox.addEventListener('change', () => {
      document.body.classList.toggle('darkmode');
      read_more.classList.toggle('btnToggle');
})


/*Read more or read less*/
const read_more = document.getElementById('readMore');
const dots = document.getElementById('dots');
const moreText = document.getElementById('more');

read_more.addEventListener('click', () => {
      if (moreText.style.display === 'none') {
          moreText.style.display = 'inline';
          read_more.innerHTML = "Read less";
      }
      else {
          moreText.style.display = 'none';
          read_more.innerHTML = "Read more";
      }
})
