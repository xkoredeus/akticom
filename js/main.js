$(function() {

	


	$(".carousel_head").owlCarousel({
		loop: true,
		items: 1,
		nav: false,
		dots: true
	});

	$(".toggle_menu").click(function() {
		$(this).toggleClass("on");
		$(this).next(".menu").slideToggle();
		return false;
	});

	$('.link_tabs_1').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active')
		$('.content_tabs').css("display", "none");
		$('.content_tabs').css("opacity", "0");
		$('.content_tabs_1').css("display", "block");
		$('.content_tabs_1').animate({opacity: 1}, 300);
	});

	$('.link_tabs_2').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active')
		$('.content_tabs').css("display", "none");
		$('.content_tabs').css("opacity", "0");
		$('.content_tabs_2').css("display", "block");
		$('.content_tabs_2').animate({opacity: 1}, 300);
	});

	$('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      //infinite: false,
      centerMode: true,
      focusOnSelect: true,
      vertical: true
    });

    $('.carousel_promotion').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      fade: false
    });

    $(".case__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		appendDots:$('.slick__dots-wrp'),
		fade: true,
		prevArrow: $('.slick__arrow-prev_white'),
		nextArrow: $('.slick__arrow-next_white'),
	});

});


 