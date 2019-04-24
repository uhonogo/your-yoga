(function ($) {

	'use strict';

	$(document).ready( function() {
		$('#tab-carousel').owlCarousel({
			loop:true,
			margin:0,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
					nav:true
				},
				980:{
					items:1,
					nav:false
				},
				1201:{
					items:3,
					nav:true,
					loop:false
				}
			}
		});
		$('#gallery-carousel').owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			items:1
		});
	});
	$('.menu_button').on('click', function () {
		$(this).toggleClass('active');
		$('.navbar').toggleClass('active');
	});
})(jQuery);