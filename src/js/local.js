$(document).ready(function () {
    var body = $('body');

    function topMenu() {
        if ($(window).width() < 959) {

            body.on('click', '.top-menu__link.active', function () {
                $(this).parents('.top-menu__wrap').toggleClass('open');
                return false
            });
        }

    };
    body.on('click', '.frame__btn', function (event) {
    event.preventDefault();
        if ($(this).siblings('.frame__btn-container').hasClass('visible')) {
            $(this).siblings('.frame__btn-container').removeClass('visible');
        }
        else {
            $('.frame__btn-container').removeClass('visible');
            $(this).siblings('.frame__btn-container').addClass('visible');
        }
    });

    body.mouseup(function(event) {
        if ($('.frame__btn-wrapper').has(event.target).length === 0) {
            $('.frame__btn-container').removeClass('visible');
        }
    });

    topMenu();
    $(window).on('resize', function () {
        topMenu();
    });
    body.on('focus', '#copyTarget', function(event){
        $(this).select();
    });

    function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
    };

    body.on('click', '#copyButton', function() {
        copyToClipboard($('#copyTarget'));
    });
});
