// Custom JS Applike Footer Menu

$(document).ready(function(){      
    'use strict';	
    
    //Defining main variables.
    var head = $('head');
    var body = $('body');
    var footerMenu = $('#footer-menu');
    var pageLocation = window.location.pathname;
    var pageDesktopMenu = $('.uk-offcanvas-bar');
    var pageDesktopMenuToggle = $('.uk-navbar-toggle');
    
    
    //This function will trigger only if an actual mobile device is detected.
    function injectMobileMenu(){
        
        //Removing Desktop Menu & Trigger
        pageDesktopMenu.remove();
        pageDesktopMenuToggle.remove();
        
        //Injecting FontAwesome 5.10.2 & Roboto Font
        head.append('<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css" rel="stylesheet">');
        head.append('<link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet">');

        //Defining menu Items.
        var footerMenuOpen = '<div id="footer-menu">';
        var footerHomeMenu = '<a href="https://ethicalfrenchie.com/" class="footer-item-1"><i class="fa fa-home"></i><span>Home</span></a>';
        var footerPuppiesMenu = '<a href="https://ethicalfrenchie.com/puppies/" class="footer-item-2"><i class="fa fa-paw"></i><span>Puppies</span></a>';
        var footerAboutMenu = '<a href="https://ethicalfrenchie.com/about-us/" class="footer-item-3"><i class="fa fa-info"></i><span>About</span></a>';
        var footerBlogMenu = '<a href="https://ethicalfrenchie.com/blog/" class="footer-item-4"><i class="fa fa-pencil-alt"></i><span>Blog</span></a>';
        var footerContactMenu = '<a href="https://ethicalfrenchie.com/contact-us/" class="footer-item-5"><i class="fa fa-envelope"></i><span>Contact</span></a>';
        var footerMenuClose = '</div>';    

        //To change order of elements, move them around below, don't move footerMenuOpen and footerMenuClose.
        body.append(footerMenuOpen  + footerHomeMenu + footerAboutMenu + footerPuppiesMenu + footerBlogMenu + footerContactMenu + footerMenuClose);

        //Defining existing pages
        var pageHome = "/";
        var pagePuppies = '/puppies/';
        var pageAbout = '/about-us/';
        var pageContact = '/contact-us/';
        var pageBlog = '/blog/';

        //Activating detected page.
        console.log(pageLocation);
        if(pageLocation == pageHome){body.find('.footer-item-1').addClass('active-nav');}
        if(pageLocation == pagePuppies){body.find('.footer-item-2').addClass('active-nav');}
        if(pageLocation == pageAbout){body.find('.footer-item-3').addClass('active-nav');}
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
