$(function () {
	          $('div[data-content-show="new_section"]').on('click', function(){
          		// collapse already opened sections:
          		var n_sects = $('.show_new_section');
          		n_sects.each(function() {
					$(this).fadeOut(400, function() {
						$(this).removeClass('show_new_section');
					});
          			
          		});
          		
          		// toggle this:
           		var cnt = $(this).find('.jprt-content');
           		
           		if(cnt.hasClass('new_section_shown')) {
					$(cnt).fadeOut(400, function() {
							cnt.removeClass('new_section_shown');setGrid(obj);
					});
           		
           		} else {
					$(cnt).fadeIn( 400, function() {
						           			cnt.addClass('show_new_section');
           			cnt.addClass('new_section_shown');setGrid(obj);
					});

           		}
           	setGrid(obj);
           		

           });
	var filterList = {
	
		init: function () {
		
			// MixItUp plugin
			// http://mixitup.io
			$('#portfoliolist').mixitup({
				targetSelector: '.portfolio',
				filterSelector: '.filter',
				effects: ['fade'],
				easing: 'snap',
				// call the hover effect
				onMixEnd: filterList.hoverEffect()
			});				
		
		},
		
		hoverEffect: function () {
		
			// Simple parallax effect
			$('#portfoliolist .portfolio').hover(
				function () {
					$(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
					$(this).find('img').stop().animate({top: -40}, 500, 'easeOutQuad');				
				},
				function () {
				    
					$(this).find('.label').stop().animate({bottom: -50}, 200, 'easeInQuad');
					$(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');								
				}		
			);				
		
		}

	};
	
	// Run the show!
	filterList.init();
	
});