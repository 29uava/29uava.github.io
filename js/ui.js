$(document).ready(() => {

    $('.btnMenu').on({
        click: function () {
            $(this).toggleClass('active').siblings('.menu').toggleClass('active');
        }
    });

    $('#main').fullpage({
        anchors: ['section1', 'section2', 'section3'],
        autoScrolling: true,
        scrollHorizontally: true,
        controlArrows: false,
        onLeave: (section, index) => {
            if (index == 1) {
                $('#header > div > a > h1').html('Gyuwon').css({color:'#ffffff'}).css({background:'url("../images/icon_home.png") no-repeat left center'});
            } else if (index == 2) {
                $('#header > div > a > h1').html('Gyuwon').css({color:'#000000'}).css({background:'url("../images/icon_home_black.png") no-repeat left center'});
            } else if (index == 3) {
                $('#header > div > a > h1').html('Gyuwon').css({color:'#ffffff'}).css({background:'url("../images/icon_home.png") no-repeat left center'});
            }
        }
    });


});
