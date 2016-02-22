$(window).scroll(function() {
	var scrolled = $(this).scrollTop();
	if (scrolled < 40) {
		$('.nav--wrap').css('top','');
	} else if (scrolled) {
		$('.nav--wrap').css('top','0');
	}
});

$(document).ready(function() {

	// Gallery Pop-up
	$('.gallery__item').click(function() {
		$('.wrap').css('display','block');
		$('.item__info').css('display','block');
	});

	$('#close div').click(function() {
		$('.wrap').css('display','none');
		$('.item__info').css('display','none');
	});

	$('.wrap').click(function() {
		$('.wrap').css('display','none');
		$('.item__info').css('display','none');
	});

	//Mobile navigation Pop-Up
	$('.mobile--search').click(function() {
		$('.search--wrap').toggleClass('shown');
		$(this).toggleClass('opa');
	});

	$('.mobile--menu').click(function() {
		$('.nav--wrap').toggleClass('shown');
		$(this).toggleClass('open');
		$(this).toggleClass('closed');
	});
});
