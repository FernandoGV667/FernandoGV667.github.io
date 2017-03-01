
$('document').ready(function(){
    
   /* --- For Sticky navigator --- */
    
    $('.js--section-features').waypoint(function(direction){
       if (direction == 'down') {
           $('nav').addClass('sticky');
       } else {
           $('nav').removeClass('sticky');
       }
    }, {
        offset: '60px;'
    });
    
    /* --- Header buttons scroll --- */
    
    $('.js--scroll-to-plans').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-start').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
    /* --- Navigation scroll (using 'Scroll Smooth') --- */
    
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({scrollTop: target.offset().top}, 1000);
                    return false;
                }
            }
        });
    });

    /* --- Animations on scroll --- */
    
    /* features fadeIn */
    $('.js--wp-1').waypoint(function(direction){
       $('.js--wp-1').addClass('animated fadeIn'); 
    }, {
        offset: '50%'
    });
    
    /* iPhone img fadeInUp */
     $('.js--wp-2').waypoint(function(direction){
       $('.js--wp-2').addClass('animated fadeInUp'); 
    }, {
        offset: '50%'
    });
    
    /* cities fadeIn */
    $('.js--wp-3').waypoint(function(direction){
       $('.js--wp-3').addClass('animated fadeIn'); 
    }, {
        offset: '50%'
    });
    
    /* Pricey Plan Jump */
     $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
         
    }, {
        offset: '50%'
     });
    
    /* --- Mobile navigation --- */
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }     
        
    });
    
    /* --- GMaps --- */
    
    var map = new GMaps({
        div: '.map',
        lat: -12.13120432,
        lng: -76.981,
        zoom: 13,
        streetViewControl: true,
          streetViewControlOptions: {
              position: google.maps.ControlPosition.BOTTOM_LEFT
          }
    });
    
    map.addMarker({
        lat: -12.12120432,
        lng: -77.029434,
        title: 'Lima',
        infoWindow: {
            content: '<p>Our Lima Headquarters in Miraflores</p>'
        }
    });
    
    
});




