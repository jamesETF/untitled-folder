// Custom JS Applike Footer Menu

$(document).ready(function(){      
    'use strict';	
    
    //Defining main variables.
    var head = $('head');
    var body = $('body');
    var footerMenu = $('#footer-bar');
    var pageLocation = window.location.pathname;
    var pageDesktopMenu = $('.uk-offcanvas-bar');
    var pageDesktopMenuToggle = $('.uk-navbar-toggle');
    
    
    //This function will trigger only if an actual mobile device is detected.
    function injectMobileMenu(){
        
        //Removing Desktop Menu & Trigger
        pageDesktopMenu.remove();
        pageDesktopMenuToggle.remove();
        

  
        //Defining existing pages
        var pageHome = "/";
        var pagePuppies = '/puppies/';
        var pageAbout = '/about-us/';
        var pageContact = '/contact-us/';
        var pageBlog = '/blog/';

        //Activating detected page.
        console.log(pageLocation);
        if(pageLocation == pageHome){body.find('.footer-item-1').addClass('active-nav');}
        if(pageLocation == pagePuppies){body.find('.footer-item-3').addClass('active-nav');}
        if(pageLocation == pageAbout){body.find('.footer-item-2').addClass('active-nav');}
        if(pageLocation == pageBlog){body.find('.footer-item-4').addClass('active-nav');}
        if(pageLocation == pageContact){body.find('.footer-item-5').addClass('active-nav');}
    }
    
    //Remove Mobile Menu if no Mobile device is detected.
    function destroyMobileMenu(){
        body.find(footerMenu).remove();
    }
    
    //Detect Mobile OS//
    var isMobile = {
        Android: function() {return navigator.userAgent.match(/Android/i);},
        iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
        any: function() {return (isMobile.Android() || isMobile.iOS());}
    };
    
    //Adding special classes to diferentiate between iOS and Android. Esential for notch phones.
    if (!isMobile.any())    {body.addClass('is-not-mobile');   destroyMobileMenu();}
    if (isMobile.Android()) {body.addClass('is-not-ios');   injectMobileMenu();}
    if (isMobile.iOS())     {body.addClass('is-ios');       injectMobileMenu();}
}); 
