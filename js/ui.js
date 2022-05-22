$(document).ready(function () {

    $('#kakaoLink').on({
        click: function () {
            location.href = 'https://open.kakao.com/o/sQwPks9d';
        }
    });

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
        normalScrollElements: '.cardList, .popup, #dimmed',
        afterLoad:function (section, origin) {
            if (origin.index == 0) {
                $('#header').addClass('on1').removeClass('on2 on3');
                $('.btnScrollTop').fadeOut();
            } else if (origin.index == 1) {
                $('#header').addClass('on2').removeClass('on1 on3');
                $('.btnScrollTop').fadeIn();
            } else if (origin.index == 2) {
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

    $('#dimmed button').on({
        click: function (){
            $(this).closest('#dimmed').addClass('hide').siblings('.popup').addClass('hide');
        }
    });

    $('.card .imgBox').on({
        click: function () {
            $('#dimmed').removeClass('hide').siblings('.popup').removeClass('hide');
            $('.popup').scrollTop(0);
            console.log();
            switch ($(this).parent('.card').children('.txtBox').children('.tit').text()) {
                case 'PMS':
                    $('.cont > img').attr('src', '../images/popup/project_pms.png');
                    break;
                case 'LX 국토정보플랫폼':
                    $('.cont > img').attr('src', '../images/popup/project_lx국토정보플랫폼.png');
                    break;
                case '공간정보산업협회':
                    $('.cont > img').attr('src', '../images/popup/project_공간정보산업협회.png');
                    break;
                case '공간정보산업협회 영문':
                    $('.cont > img').attr('src', '../images/popup/project_공간정보산업협회_영문.png');
                    break;
                case '스마트국토정보':
                    $('.cont > img').attr('src', '../images/popup/project_스마트국토정보.png');
                    break;
                case 'KGEOP_측량업관리':
                    $('.cont > img').attr('src', '../images/popup/project_kgeop_측량업관리.png');
                    break;
                case 'KGEOP_로컬서비스':
                    $('.cont > img').attr('src', '../images/popup/project_kgeop_로컬서비스.png');
                    break;
                case 'KGEOP_품질관리시스템':
                    $('.cont > img').attr('src', '../images/popup/project_kgeop_품질관리시스템.png');
                    break;
                case 'KGEOP_행정업무지원':
                    $('.cont > img').attr('src', '../images/popup/project_kgeop_행정업무지원.png');
                    break;
                case 'KGEOP_북한지역서비스':
                    $('.cont > img').attr('src', '../images/popup/project_kgeop_북한지역서비스.png');
                    break;
                case '충북공간플랫폼_아이콘':
                    $('.cont > img').attr('src', '../images/popup/project_충북공간플랫폼.png');
                    break;
                case 'LX 통합업무플랫폼':
                    $('.cont > img').attr('src', '../images/popup/project_lx통합업무플랫폼.png');
                    break;
                case '지적층략업무지원시스템(CosMos)':
                    $('.cont > img').attr('src', '../images/popup/project_지적측량업무지원시스템(CosMos).png');
                    break;
                case 'LX 지적통합정보관리시스템':
                    $('.cont > img').attr('src', '../images/popup/project_LX_지적통합정보관리시스템.png');
                    break;
                case 'KGEOP_저작도구':
                    $('.cont > img').attr('src', '../images/popup/project_kgeop_저작도구.png');
                    break;
                case '데일리샷 모바일 리디자인':
                    $('.cont > img').attr('src', '../images/popup/project_dailyshot.png');
                    break;
                default:
                    break;
            }
        }
    });

});
