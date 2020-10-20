$(document).ready(function () {

      // smooth scroll
    // var Scrollbar = window.Scrollbar;
    // var options = {
    //     'damping': 0.05,
    //     'continuousScrolling':true
    // };

    // Scrollbar.init(document.querySelector('#scroll-bar'), options);

    // mobile menu slide from the left
$('[data-toggle="slide-collapse"]').on('click', function() {
    $navMenuCont = $($(this).data('target'));
    $navMenuCont.animate({'width':'toggle'}, 350);
});

    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        // center: true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            }
        }
    })

    //tools carousel
    $('.site-main .site-banner .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 4
            }
        }
    })


    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});

