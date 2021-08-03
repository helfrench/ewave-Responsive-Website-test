const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    
    responsive:{
        0:{
            items:1
        },
       480:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

var t1 = 0;
window.onscroll = scroll1;

function scroll1() {
  var toTop = document.getElementById('toTop');
  window.scrollY > 0 ? toTop.style.display = 'Block' : toTop.style.display = 'none';
}

function abcd() {
  var y1 = window.scrollY;
  y1 = y1 - 1000;
  window.scrollTo(0, y1);
  if (y1 > 0) {
    t1 = setTimeout("abcd()", 100);
  } else {
    clearTimeout(t1);
  }
}

 