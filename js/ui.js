$(document).ready(() => {

    $('.btnMenu').on({
        click: function () {
            $(this).toggleClass('active').siblings('.menu').toggleClass('active');
        }
    });

    $('#main').fullpage({
        anchors: ['section1', 'section2', 'section3'],
        //autoScrolling: true,
        //scrollHorizontally: true,
        //controlArrows: false,
        scrollOverflow:true,
        afterLoad:function (section, origin) {
            if (origin.index === 0) {
                $('#header').addClass('on1').removeClass('on2 on3');
                $('.btnScrollTop').fadeOut();
            } else if (origin.index === 1) {
                $('#header').addClass('on2').removeClass('on1 on3');
                $('.btnScrollTop').fadeIn();
            } else if (origin.index === 2) {
                $('#header').addClass('on3').removeClass('on1 on2');
                $('.btnScrollTop').fadeIn();
            }
        }
    });

    $('.btnScrollTop').on({
        click: function() {
            location.href = '#section1';
        }
    });

});
