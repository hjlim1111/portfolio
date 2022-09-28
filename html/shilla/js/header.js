$(document).ready(function(){

    $('.btnNav').click(function(e){
        e.preventDefault();
        $('header').toggleClass('active');
        $('.mobileNavWrap').slideToggle();
    });
    
    $(window).resize(function(){
        if($(this).width() >= 1300){
            $('header').removeClass('active');
            $('.mobileNavWrap').show();
        } else{
            $('.mobileNavWrap').hide();
        }
    });

    
    /*submenu 나타나게*/
    $('ul.gnb > li').hover(function ( ) {
        if(window.innerWidth >= 1300){
            $('.navBg,.submenu').stop().slideDown();
        }
     },function ( ) {
        if(window.innerWidth >= 1300){
            $('.navBg,.submenu').stop().slideUp();
        }
     });
});