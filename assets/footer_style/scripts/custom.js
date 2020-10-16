$(document).ready(function(){      
    'use strict'	
    /*Menu Extender Global Function*/
    $.fn.showMenu = function() {$(this).addClass('menu-active'); $('#footer-bar').addClass('footer-menu-hidden');setTimeout(function(){$('.menu-hider').addClass('menu-active');},250);}; 
    $.fn.hideMenu = function() {$(this).removeClass('menu-active'); $('#footer-bar').removeClass('footer-menu-hidden');$('.menu-hider').removeClass('menu-active');}; 

    //ADD YOUR CUSTOM JAVASCRIPT CODES HERE! 
    //Do not put inside HTML files.
    //The init_template() function will be triggered when pages open.
	function init_template(){        
        
        //Disable Page Jump on Empty Links.
        $('a').on('click', function(){var attrs = $(this).attr('href'); if(attrs === '#'){return false;}});
        
        //Adding Background for Gradient
        if(!$('.menu-hider').length){$('#page').append('<div class="menu-hider"><div>');}
                
        var menuFooter = $('#footer-bar'),
            headerAndContent = $('#footer-bar');
        
        //Footer Menu Active Elements
        if($('.footer-bar-6').length){
            if(!$('.footer-bar-6 strong').length){
                $('.footer-bar-6 .circle-nav').append('<strong><u></u></strong>')
                $('.footer-bar-6 .active-nav').append('<em></em>')
            }
        }     
    }
    //Activating all the plugins
	setTimeout(init_template, 0);
}); 