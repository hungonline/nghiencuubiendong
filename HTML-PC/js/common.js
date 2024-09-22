(function($) {
    "use strict";
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    }

    //backToTop
    function backToTop() {
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 200) {
                $('#to_top').fadeIn();
            } else {
                $('#to_top').fadeOut();
            }
        });

        $("#to_top").click(function() {
            $("html, body").animate({
                scrollTop: 0
            });
            return false;
        });
    }

    //onCLick
    function onCLick() {
        $('.auto_search_button').click(function() {
            $('.search-wrap input').focus();
            if (!$(this).hasClass('is-clicked')) {
                $(this).addClass('is-clicked');
            } else {
                $(this).removeClass('is-clicked');
            }
            $('.search-wrap ').animate({
                width: 'toggle'
            });
        });

        $(".tab-default a").click(function(event) {
            $(".tab-default a").removeClass("active")
            if (!$(this).hasClass("active")) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
            event.preventDefault();
            var tab = $(this).attr("href");
            $(".tab-content >div").not(tab).css("display", "none");
            $(tab).fadeIn();
        });

        $('#vibeji-ham').off('click').on('click', function() {
            $(this).toggleClass('open');
            $('.main-header__nav').toggleClass('open');
            $('body').css('overflow', $(this).hasClass('open') ? 'hidden' : '')
        });


        $('.sub_menu').click(function() {
            if ($(this).next('.level2').css('display') == 'none') {
                $(this).addClass('active');
                $(this).parent().addClass('open');
            } else {
                $(this).removeClass('active');
                $(this).parent().removeClass('open');
            };
            $(this).next('.level2').slideToggle("slow", function() {});
        });

        $('.sub-icon2').click(function() {
            if ($(this).next('ul').css('display') == 'none') {
                $(this).html('-');
            } else {
                $(this).html('+');
            };
            $(this).next('ul').slideToggle("slow", function() {});
        });

        $(".dropdown").find(".dropbtn").click(function() {
            $(".dropdown").find('.dropdown-content').fadeOut();
            if ($(this).next().css('display') == 'none') {
                $('.dropdown-content').fadeOut();
                $(this).next().stop(true, true).fadeIn();
                $('.dropdown').removeClass('active');
                $(this).parent().addClass('active');
            } else {
                $(this).parent().find('.dropdown-content').fadeOut();
                $('.dropdown').removeClass('active');
            }
        });
        $(document).click(function() {
            $(".dropdown .dropbtn").removeClass('active');
            $(".dropdown").find('.dropdown-content').fadeOut();
            $('.dropdown').removeClass('active');
        });
        $(".dropdown .dropbtn").click(function(event) {
            event.stopPropagation();

        });

    }
    //scrollBar
    function slideSwiper() {

    }

    $(function() {
        backToTop();
        onCLick();
        slideSwiper();
        $('.album').lightGallery({
            selector: '.itemt'
        });
    });
})(jQuery);