(function($) {
    'use strict';
    $(function() {
        if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
           $('a[href^="tel:"]').css('cursor','default')
            .on('click', function(e){
                e.preventDefault();
            });
        }
    });
})(jQuery);