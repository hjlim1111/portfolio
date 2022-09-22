$(document).ready(function(){

    /* header 
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            if(!$('header').hasClass('shrink')){
                $('header').addClass('shrink');
            }
        } else{
            if($('header').hasClass('shrink')){
                $('header').removeClass('shrink');
            }
        }
    });*/

    /* nav */



  /*
    $(window).ready(function(){
        if($(this).width() >= 1300){
            $("ul.gnb>li").hover(function(){
                $(this).children(".nav_bg,.submenu").stop().slideDown();
            },function( ){
                $(this).children(".nav_bg,.submenu").stop().slideUp();
            });
        }else{
            $("ul.gnb>li button").hover(function(){
                $(this).children(".nav_bg,.submenu").stop().slideDown();
            },function( ){
                $(this).children(".nav_bg,.submenu").stop().slideUp();
            });
        }
    });
    */

    /*
    if 1300 일 때 
    if ( condition1 ) {
        statement1
      } else if ( condition2 ) {
        statement2
    }
    */


     /* navWrap on
	$('.btn_nav').click(function(){
		$('#navWrap').toggleClass('on');
	});*/ 


    /* life */

    $(document).ready(function() {
        $(window).scroll( function(){
            $('.fadeinleft').each( function(i){
                
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                if( bottom_of_window > bottom_of_element ){
                    $(this).animate({'opacity':'1','margin-left':'0px'},1000);
                }
                
            }); 
        });
    });

    $(document).ready(function() {
        $(window).scroll( function(){
            $('.fadeinright').each( function(i){
                
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                if( bottom_of_window > bottom_of_element ){
                    $(this).animate({'opacity':'1','margin-right':'0px'},1000);
                }
                
            }); 
        });
    });
    



///////////////////////////////////////////////////////////////////------
});