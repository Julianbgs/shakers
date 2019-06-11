$(document).ready(function () {

    // slider

    $('.shaker__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    // close script

    // mobile menu

    $(document).on('click', '#header-trigger', function (event) {
        event.preventDefault();
        var menu = $('.header__menu');
        if ($(this).hasClass('js-trigger-active')) {
            $(this).removeClass('js-trigger-active');
            menu.slideUp('slow');
        } else {
            $(this).addClass('js-trigger-active');
            menu.slideDown('slow');
        }
        return false;
    });

    // close script



});