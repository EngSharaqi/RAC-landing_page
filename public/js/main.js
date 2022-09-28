$('.center').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: false,
                centerPadding: '0',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: false,
                centerPadding: '20px',
                slidesToShow: 1
            }
        }
    ]
});

// customiza navigation
let toggledSection = document.getElementsByClassName('navbar-toggler')[0];
let mynav = document.getElementsByTagName('nav')[0];

let custNavigation = () => {
    // toggledSection.classList == 'collapsed' ? mynav.classList.add('collapsed') : mynav.classList.remove('collapsed')
    mynav.classList.toggle('custNav');
}

// scroll to top 
function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    scrollF.style.display = "block";
  } else {
    scrollF.style.display = "none";
  }
}

let scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

let scrollF = document.getElementsByClassName('scrollToTop')[0];
