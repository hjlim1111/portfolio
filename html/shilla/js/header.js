$(document).ready(function(){
    
    $('.btnNav').click(function(e){
        e.preventDefault();
        $('header').toggleClass('active');
        $('.navWrap').slideToggle();
    });
    
    $(window).resize(function(){
        if($(this).width() > 1300){
            $('header').removeClass('active');
            $('.navWrap').show();
        } else{
            $('.navWrap').hide();
        }
    });



    /*submenu 나타나게*/
    $('ul.gnb > li').hover(function ( ) {
        $('.navBg,.submenu').stop().slideDown();
    },function ( ) {
        $('.navBg,.submenu').stop().slideUp();
    });
});