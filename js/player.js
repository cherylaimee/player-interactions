(function($){

    //   window.onload = function() {
    //         setInterval(function() {
    //           $('body').removeClass('overlay');
    //         }, 3000);
    //          setTimeout(function() {
    //           $(document.body).scrollLeft(0);
    //         }, 5);  
    // };
    
    $(window).keydown(function(e) {
        var scrollWidth = ($(window).width()/3);
        var enterButton = ((e.which == 13) || (e.which === 13))
        var arrowDown = (e.which == 40)
        var arrowUp = (e.which == 38)
        var arrowLeft = (e.which == 37)
        var arrowRight = (e.which == 39)
        var squareButton = (e.which == 83)
        var swipeUp = (e.which == 187)
        var swipeDown = (e.which == 189)

       if (arrowDown && (!$('body').hasClass('mtc-on')) && (!$('body').hasClass('timeline-on')) && (!$('body').hasClass('drawer-on'))) {
                 $('body').addClass('top');
        }

        if (arrowUp && ($('body').hasClass('top'))) {
                 setTimeout(function () {
                    $('body').removeClass('top');
                 }, 5);
        }

        if (arrowRight && (!$('body').hasClass('top')) && (!$('body').hasClass('mtc-on')) && (!$('body').hasClass('timeline-on')) && (!$('body').hasClass('drawer-on'))) {
                 $('body').addClass('end');
        }
        
        if (arrowLeft && ($('body').hasClass('end')) && (!$('body').hasClass('top')) && (!$('body').hasClass('mtc-on')) && (!$('body').hasClass('timeline-on')) && (!$('body').hasClass('drawer-on'))) {
                 setTimeout(function () {
                    $('body').removeClass('end');
                 }, 5);
        }

        if (enterButton && (!$('body').hasClass('top')) && (!$('body').hasClass('mtc-on')) && (!$('body').hasClass('timeline-on')) && (!$('body').hasClass('drawer-on'))) {
                 setTimeout(function () {
                    $('body').addClass('mtc-on');
                 }, 5);
        }
        if (arrowDown && ($('body').hasClass('mtc-on'))) {
                 setTimeout(function () {
                    $('body').addClass('timeline-on');
                    $('body').removeClass('mtc-on');
                 }, 5);
        }
        if (enterButton && (!$('body').hasClass('top')) && ($('body').hasClass('mtc-on')) && (!$('body').hasClass('timeline-on')) && (!$('body').hasClass('drawer-on'))) {
                    $('body').removeClass('mtc-on');
        }
        if (arrowDown && ($('body').hasClass('timeline-on'))) {
                  setTimeout(function () {
                    $('body').addClass('milestones-on');
                  }, 5);
        }
        if (arrowUp && ($('body').hasClass('timeline-on')) && (!$('body').hasClass('milestones-on'))) {
                  setTimeout(function () {
                    $('body').removeClass('timeline-on');
                    $('body').addClass('mtc-on');
                  }, 5);
        }
        if (arrowUp && ($('body').hasClass('milestones-on'))) {
                  setTimeout(function () {
                    $('body').removeClass('milestones-on');
                  }, 5);
        }
        if (arrowDown && ($('body').hasClass('milestones-on'))) {
                  setTimeout(function () {
                    $('body').addClass('drawer-on stats-on');
                    $('body').removeClass('timeline-on');
                    $('body').removeClass('milestones-on');
                  }, 5);
        }
        if (arrowUp && ($('body').hasClass('drawer-on stats-on'))) {
                  setTimeout(function () {
                    $('body').removeClass('drawer-on stats-on');
                    $('body').addClass('timeline-on');
                    $('body').addClass('milestones-on');
                  }, 5);
        }
        if (arrowRight && ($('body').hasClass('stats-on')))  {
                    setTimeout(function () {
                        $('body').addClass('highlights-on');
                    }, 5);
                    $('body').removeClass('stats-on');
        }
        if (arrowRight && ($('body').hasClass('highlights-on')))  {
                    setTimeout(function () {
                        $('body').addClass('boxscore-on');
                    }, 5);
                    $('body').removeClass('highlights-on');
        }
        if (arrowRight && ($('body').hasClass('boxscore-on')))  {
                    setTimeout(function () {
                        $('body').addClass('todaysgames-on');
                    }, 5);
                    $('body').removeClass('boxscore-on');
        }
        if (arrowRight && ($('body').hasClass('todaysgames-on')))  {
                    setTimeout(function () {
                        $('body').addClass('settings-on');
                    }, 5);
                    $('body').removeClass('todaysgames-on');
        }

        
        if (arrowLeft && ($('body').hasClass('highlights-on')))  {
                    setTimeout(function () {
                        $('body').addClass('stats-on');
                    }, 5);
                    $('body').removeClass('highlights-on');
        }
        if (arrowLeft && ($('body').hasClass('boxscore-on')))  {
                    setTimeout(function () {
                        $('body').addClass('highlights-on');
                    }, 5);
                    $('body').removeClass('boxscore-on');
        }
        if (arrowLeft && ($('body').hasClass('todaysgames-on')))  {
                    setTimeout(function () {
                        $('body').addClass('boxscore-on');
                    }, 5);
                    $('body').removeClass('todaysgames-on');
        }
        if (arrowLeft && ($('body').hasClass('settings-on')))  {
                    setTimeout(function () {
                        $('body').addClass('todaysgames-on');
                    }, 5);
                    $('body').removeClass('settings-on');
        }

        if (arrowDown && ($('body').hasClass('boxscore-on')))  {
                    setTimeout(function () {
                        $('body').addClass('boxscore-focused');
                    }, 5);
        }
        if (arrowUp && ($('body').hasClass('boxscore-on')))  {
                    setTimeout(function () {
                        $('body').removeClass('boxscore-focused');
                    }, 5);
        }

        if (squareButton && (!$('body').hasClass('details-focused'))) {
                    $('body').toggleClass('pitcherbox-on');    
        }
        
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
