(function($){

    //   window.onload = function() {
    //         setInterval(function() {
    //           $('body').removeClass('top');
    //         }, 2000);
    // };
    
    // var timeout = null;

    // $(window).on('mousemove', function() {
    //     if ((!$('body').hasClass('top')) && (!$('body').hasClass('bottom'))) {
    //     $('body').addClass('overlay');
    //     clearTimeout(timeout);
    //         timeout = setTimeout(function() {
    //             $('body').removeClass('overlay');
    //         }, 2000);
    //     }
    // });
    
    // $('video').click(function(){
    //     this.paused?this.play() :this.pause();
    // });
    
    $(window).keydown(function(e) {
        var scrollWidth = ($(window).width()/3);
        var enterButton = ((e.which == 13) || (e.which === 13))
        var arrowDown = (e.which == 40)
        var arrowUp = (e.which == 38)
        var arrowLeft = (e.which == 37)
        var arrowRight = (e.which == 39)
        var selectButton = (e.which == 83)
        var swipeUp = (e.which == 187)
        var swipeDown = (e.which == 189)
        
        if (arrowUp && !$('body').hasClass('top')) {
                $('body').addClass('top');
        }
        if (arrowDown && $('body').hasClass('top')) {
                $('body').removeClass('top');
        }
        if (enterButton && (!$('body').hasClass('top'))) {
            window.location.href="./../pages/player.html"
        }
    //    if (arrowDown) {
    //              $('body').addClass('top');
                //  $('.headertile').navigate({
                //         activeClass: 'focused',
                //         mouse: false,
                //         onFocus: function() {  
                //         }
                //     });
        //}
        // if (arrowUp && ($('body').hasClass('top'))) {
        //          $('body').removeClass('top');
        // }
        // if (arrowUp && (!$('body').hasClass('overlay')) && (!$('body').hasClass('top')) && (!$('body').hasClass('mtc')))  {
        //             setTimeout(function () {
        //                 $('body').addClass('bottom');
        //             }, 5);
        //             $('body').addClass('menu');
        //             $('.upnexttile:not(.now-playing)').navigate({
        //                 activeClass: 'focused',
        //                 mouse: false,
        //                 onFocus: function() {
        //                     $('#upnexttile1').removeClass('now-playing');
        //                     $('body div.up-next-details').addClass('blink');
        //                     setTimeout(function () {
        //                         $('body div.up-next-details').removeClass('blink');
        //                     }, 100);  
        //                 }
        //             });
        // }
        // if (arrowDown && ($('body').hasClass('bottom')) && (!$('body').hasClass('menu'))) {
        //          $('body').removeClass('bottom');
        // }
        // if (enterButton && (!$('body').hasClass('bottom')) && (!$('body').hasClass('top'))) {
        //          $('body').toggleClass('mtc');
        // }
        // if (enterButton && (!$('body').hasClass('bottom')) && (!$('body').hasClass('top'))) {
        //          $('video').get(0).paused?$('video').get(0).play() :$('video').get(0).pause();
        // }
        // if (arrowDown && ($('body').hasClass('menu'))) {
        //          $('body').removeClass('menu');
        //          $('.upnexttile').navigate('destroy');
        // }
        // if (arrowRight && (!$('body').hasClass('menu')) && ($('body').hasClass('bottom')) && ($('body').hasClass('up-next-focused')) )  {
        //             setTimeout(function () {
        //                 $('body').addClass('details-focused');
        //             }, 5);
        //             $('body').removeClass('up-next-focused');
        // }
        // if (arrowRight && (!$('body').hasClass('menu')) && ($('body').hasClass('bottom')) && ($('body').hasClass('details-focused')) )  {
        //             setTimeout(function () {
        //                 $('body').addClass('extras-focused');
        //             }, 5);
        //             $('body').removeClass('details-focused');
        // }
        // if (arrowLeft && (!$('body').hasClass('menu')) && ($('body').hasClass('bottom')) && ($('body').hasClass('extras-focused')) )  {
        //             setTimeout(function () {
        //                 $('body').addClass('details-focused');
        //             }, 5);
        //             $('body').removeClass('extras-focused');
        // }
        // if (arrowLeft && (!$('body').hasClass('menu')) && ($('body').hasClass('bottom')) && ($('body').hasClass('details-focused')) )  {
        //             setTimeout(function () {
        //                 $('body').addClass('up-next-focused');
        //             }, 5);
        //             $('body').removeClass('details-focused');
        // }
        // if (arrowRight && ($('body').hasClass('menu')) && ($('body').hasClass('up-next-focused')) ) {
        //         if($('#upnexttile3, #upnexttile5, #upnexttile7').hasClass('focused')){
        //             $('html, body').one().animate({
        //                 scrollLeft: '+='+ scrollWidth
        //             }, 350);
        //         }
        // }
        // if (arrowLeft && ($('body').hasClass('menu')) && ($('body').hasClass('up-next-focused')) ) {
        //         if($('#upnexttile2, #upnexttile3, #upnexttile5').hasClass('focused')){
        //             $('html, body').one().animate({
        //                 scrollLeft: '-='+ scrollWidth
        //             }, 350);
        //         }
        // }
        // if (arrowRight && ($('body').hasClass('menu')) && ($('body').hasClass('extras-focused')) ) {
        //         if($('#upnexttile2, #upnexttile3, #upnexttile5, #upnexttile7').hasClass('focused')){
        //             $('html, body').one().animate({
        //                 scrollLeft: '+='+ scrollWidth
        //             }, 350);
        //         }
        // }
        // if (arrowLeft && ($('body').hasClass('menu')) && ($('body').hasClass('extras-focused')) ) {
        //         if($('#upnexttile2, #upnexttile3, #upnexttile5').hasClass('focused')){
        //             $('html, body').one().animate({
        //                 scrollLeft: '-='+ scrollWidth
        //             }, 350);
        //         }
        // }
        // if (enterButton && ($('body').hasClass('menu')) && ($('body').hasClass('details-focused'))) {
        //         window.location = "./search.html";
        // }
        
        // if (selectButton && ($('body').hasClass('menu')) && (!$('body').hasClass('details-focused'))) {
        //         $('body button.focused').addClass('selected');
        // }
        // if (enterButton && ($('body').hasClass('top')) && ($('body button#headertile2').hasClass('focused'))) {
        //         window.location = "./introplayer.html";
        //         console.log('thing');
        // }
        
});

    // $(window).on('DOMMouseScroll mousewheel', function (e) {
        
    //     var swipeDown=(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0);
    //     var swipeUp=(e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0);
        
    //     if (swipeUp && ($('body').hasClass('top'))) {
    //         clearTimeout(timeout);
    //         timeout = setTimeout(function() {
    //             $('body').removeClass('top');
    //         }, 40);   
    //     }
    //     if (swipeDown && (!$('body').hasClass('overlay')) && (!$('body').hasClass('bottom')) && (!$('body').hasClass('mtc'))) {
    //             $('body').addClass('top');
    //     } 
        
    //      if (swipeUp && (!$('body').hasClass('overlay')) && (!$('body').hasClass('top')) && (!$('body').hasClass('mtc')))  {
    //         $('body').addClass('bottom');
    //         $('upnexttile').navigate('destroy');
    //     }
    //     if (swipeDown && ($('body').hasClass('bottom')) && (!$('body').hasClass('menu'))) {
    //         clearTimeout(timeout);
    //         timeout = setTimeout(function() {
    //              $('body').removeClass('bottom');
    //         }, 40);
    //     }
        
    //     if (swipeDown && ($('body').hasClass('menu'))) {
    //              $('body').removeClass('menu');
    //     }
        
    //             var eo = e.originalEvent;
    //     if(Math.abs(eo.wheelDeltaY) < 10 && Math.abs(eo.wheelDeltaX) > 2){
    //       e.preventDefault();

    //       if(eo.wheelDeltaX < -100){
    //           // swipe left
    //           console.log('left');
    //       }

    //       if(eo.wheelDeltaX > 100){
    //           // swipe right
    //           console.log('right');
    //       }
    //     }
        
    //     //prevent page fom scrolling
    //     return false;
    // });
      
})(jQuery);
