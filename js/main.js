$(function () {
    var wind = $(window),
        header = $('.page-header')
        headerOffsetTop = header.offset().top;

        console.log(headerOffsetTop);

    wind.scroll(function(){
        if($(this).scrollTop() >= headerOffsetTop){
            header.addClass('sticky');
        }else{
            header.removeClass('sticky');
        }

    })
});

$(function() {
    var $device = $('.device');
    var $deviceOST = 150

    $(window).scroll(function(){
        if($(this).scrollTop() > $deviceOST){
            $device.find('img').addClass('animate');
            $device.find('h4').addClass('animate');
            $device.find('.p').addClass('animate');
        }
    });
});