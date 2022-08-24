$(document).ready(function(){


        /* nav */
        $('.btn_nav').click(function(e){
            e.preventDefault();
            $('header').toggleClass('active');
            $('#nav_wrap').slideToggle();
        });
        
        $(window).resize(function(){
            if($(this).width() >= 1300){
                $('header').removeClass('active');
                $('#nav_wrap').show();
            } else{
                $('#nav_wrap').hide();
            }
        });

    /*submenu 나타나게*/
    $("ul.gnb>li").hover(function ( ) {
        $(".nav_bg,.submenu").stop().slideDown();
    },function ( ) {
        $(".nav_bg,.submenu").stop().slideUp();
    });


    

///////////////////////////////////////////////////////////////////------
});