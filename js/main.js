$(document).ready(function() {
    console.log ("Script initiated");
    $('.burger-icon').click(function() {
        $('.main-menu').toggleClass('menu-open');
        $('.burger-icon').toggleClass('close-icon');
        // $('.header__navigation').slideToggle();
        // $(".main-menu").css('height',setHeight+'px !important');
    });


    var $animationElems = $('.animation-element');
    var $window = $(window);

    function checkIfInView(element, fullyInView) {
        var windowHeight = $window.height();
        var windowTopPosition = $window.scrollTop();
        var windowBottomPosition = (windowTopPosition + windowHeight);

        $.each($animationElems, function() {
            var $element = $(this);
            var elementHeight = $element.outerHeight();
            var elementTopPosition = $element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

            // Check if this current section is within viewport
            if( (elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition) ) {
                $element.addClass('in-view');
            }
        });
    }

    function checkIfInViewInit() {
        $window.on('scroll resize', checkIfInView);
        $window.trigger('scroll');
    }
    
    checkIfInViewInit();

});