$(document).ready(function () {
    console.log("JQUEYR")
    setTimeout(function () {
        $('body').addClass('loaded');
    }, 3000);

    $('.banner-slider').owlCarousel({
        items: 1,
        loop: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'slideOutDown',
        animateIn: 'fadeIn',
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 1,
                nav: false,
            },
            960: {
                items: 1
            },
            1200: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });

    $('.testimonial_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20px',
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        arrows: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    //nav collapse
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    /* Offset start */
    var html_body = $('html, body'),
        nav = $('nav'),
        navOffset = nav.offset().top;
    /* offset ends */

    $('nav a, #slider a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 30
                }, 1500);
                return false;
            }
        }
    });
    //scrollspy menu
    $('body').scrollspy({
        target: '#navbarSupportedContent',
        offset: 80
    });

    const $backToTopBtn = $('.back-top-btn');
    const $htmlBody = $('html, body');
    const $window = $(window);
    const $nav = $('nav');
    const amountScrolled = 300;

    // Initially hide the button
    $backToTopBtn.hide();

    // Handle scroll events
    $window.on('scroll', function () {
        const scrollTop = $window.scrollTop();

        // Show or hide the back-to-top button
        if (scrollTop > amountScrolled) {
            $backToTopBtn.fadeIn('slow');
        } else {
            $backToTopBtn.fadeOut('slow');
        }

        // Toggle navbar-fixed class
        if (scrollTop > navOffset) {
            $nav.addClass('navbar-fixed').attr('data-bs-theme', 'light');
        } else {
            $nav.removeClass('navbar-fixed').attr('data-bs-theme', 'dark');
        }
    });

    // Handle back-to-top button click
    $backToTopBtn.on('click', function (e) {
        $htmlBody.animate({ scrollTop: 0 }, 600);
    });
})