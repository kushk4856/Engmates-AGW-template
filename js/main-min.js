// JavaScript Document
(function($) {
	'use strict';	
			$('#foo4').carouFredSel({
					prev: '#prev4',
					next: '#next4',
					auto: false,
					responsive: true,
					width: '100%',
					scroll: 1,
					items: {
						width: 400,
					height: 'auto',	//	optionally resize item-height
						visible: {
							min: 1,
							max: 8
						}
					}
				});
})(jQuery);

(function($) {
	'use strict';
      $('.flexslider').flexslider({
        animation: "fade",
		directionNav: false,
		controlNav: true,
		slideshow: true, 
      });
})(jQuery);

(function($){
	'use strict';
		
	$(".screenshot:first a[data-pretty^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'pp_default',slideshow:3000, autoplay_slideshow: false});
	$(".screenshot:gt(0) a[data-pretty^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
		
})(jQuery);

/* List Ticker by Alex Fish 
// www.alexefish.com
//
// options:
//
// effect: fade/slide
// speed: milliseconds
*/

(function($){
	'use strict';
  $.fn.list_ticker = function(options){
    
    var defaults = {
      speed:4000,
	  effect:'fade'
    };
    
    var options = $.extend(defaults, options);
    
    return this.each(function(){
      
      var obj = $(this);
      var list = obj.children();
      list.not(':first').hide();
      
      setInterval(function(){
        
        list = obj.children();
        list.not(':first').hide();
        
        var first_li = list.eq(0)
        var second_li = list.eq(1)
		
		if(options.effect == 'slide'){
			first_li.slideUp();
			second_li.slideDown(function(){
				first_li.remove().appendTo(obj);
			});
		} else if(options.effect == 'fade'){
			first_li.fadeOut(function(){
				second_li.fadeIn();
				first_li.remove().appendTo(obj);
			});
		}
      }, options.speed)
    });
  };
})(jQuery);

(function($) {
	'use strict';
	$('.ticker').list_ticker({
			speed:5000,
			effect:'fade'
	});	
})(jQuery);

	$(document).ready(function() {
			$().UItoTop({ easingType: 'easeOutQuart' });
		});
		
		/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

(function () {
  'use strict';
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }
})();