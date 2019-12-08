$(() => {
	//Menu fixed - unfixed
	$(window).on('scroll', () => {
		let $header = $('.header > .menu');
		let sc = $(this).scrollTop();
		if (sc > 50 && sc < $(window).height()) {
			$header.fadeOut(500);
     	} else if (sc > $(window).height()) {
     		$header.removeClass('menu_unfixed').addClass('menu_fixed')
     			   .slideDown(400);
     	}
		else {
			$header.removeClass('menu_fixed').addClass('menu_unfixed')
     			   .fadeIn(500);
		};
	});
//LightBox
$('.zoom-gallery').magnificPopup({
	delegate: 'a',
	type: 'image',
	closeBtnInside: false,
	gallery: {
		enabled: true
	},
	zoom: {
		enabled: true,
		duration: 400,
		opener: function(element) {
			return element.find('img');
			}
		}
	});
	//KenBurnsEffect
	let $mainScreen = $('.main-screen');
	$mainScreen.animate({'background-size':'140%'},50000,'linear');
  });













