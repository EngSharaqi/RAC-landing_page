$('.center').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        }
    ]
});

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
