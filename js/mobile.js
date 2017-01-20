(function() {
    "use strict";
    jQuery(document).ready(function(){ 
        if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
           jQuery('a[href^="tel:"]').on('click', function(e){
                e.preventDefault();
            });
        }
    });
})();