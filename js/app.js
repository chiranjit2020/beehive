//back to top button?
(function ($) {

    /*--Scroll Back to Top Button Show--*/

    back2top();

    //Click event scroll to top button jquery

    $('#back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });


    function back2top() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
    }
})(jQuery);


window.onload = function () {
    setTimeout(function () {
        document.getElementById("fadein").remove();
    }, 1000);
};

$(window).on('load', function () {
    $("#loader-wrapper").fadeOut(700);
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 0,
        },

        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },       

        991: {
          slidesPerView: 3,
          spaceBetween: 30,
        },        

      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

  
  });


//Mobile Menu Controller

const menuTrigger       = document.getElementById( 'menuTrigger' );
const mobileMenuLayout  = document.getElementById( 'mobile-menu-layout' );
const mobileMenuClose   = document.getElementById( 'mobile-menu__close' );

menuToggleHandler();

function menuToggleHandler() {
    menuTrigger.addEventListener('click', () => {
        mobileMenuLayout.classList.toggle('mobile-menu-layout--open');
    });
}

menuCloseHandler();

function menuCloseHandler() {
    mobileMenuClose.addEventListener('click', () => {
        mobileMenuLayout.classList.remove('mobile-menu-layout--open');
    });
}


//Booking Form
const roomBookingFormTrigger    = document.getElementById( 'room-booking-form-trigger' );
const roomBookingForm           = document.getElementById( 'room-booking-form' );
const roomBookingFormClose      = document.getElementById( 'room-booking-form-close' ); 

roomBookingFormClose.addEventListener( 'click', () =>{
    roomBookingForm.classList.remove( 'room-booking-form--open' );
})

roomBookingFormTrigger.addEventListener( 'click', () =>{
    roomBookingForm.classList.add( 'room-booking-form--open' );
})

//AOS
AOS.init();