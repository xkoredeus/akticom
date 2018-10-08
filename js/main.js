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
		$('.image_foot__inner').addClass('samara');
		$('.image_foot__inner').removeClass('moscow');
		
	});

	$('.link_tabs_2').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active')
		$('.content_tabs').css("display", "none");
		$('.content_tabs').css("opacity", "0");
		$('.content_tabs_2').css("display", "block");
		$('.content_tabs_2').animate({opacity: 1}, 300);
		$('.image_foot__inner').addClass('moscow');
		$('.image_foot__inner').removeClass('samara');
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
		speed: 1200,
		prevArrow: $('.slick__arrow-prev_white'),
		nextArrow: $('.slick__arrow-next_white'),
	});

	$(".design__case-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: true,
		speed: 1200,
		prevArrow: $('.slick__arrow-prev'),
		nextArrow: $('.slick__arrow-next'),
	});

	$(document).ready(function () {
		$(".tabs-content__item").hide();
		$(".tabs__container div.tabs-content__item:first-child").show();
	    $('ul.tabs__list > li').click(function () {
	        if (!($(this).hasClass('active'))) {
	            var thisLi = $(this);
	            var numLi = thisLi.index();
	            thisLi.addClass('active').siblings().removeClass('active');
	            thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
	            $('.design__case-slider').slick('reinit');

	        };

	    });
	});
	$(".about-adv__item_8").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: true,
		speed: 1200,
		prevArrow: $('.about-adv__arrows-left'),
		nextArrow: $('.about-adv__arrows-right'),
	});

	$(".supply-cms__cnt").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		prevArrow: $('.slick__arrow-prev_white'),
		nextArrow: $('.slick__arrow-next_white'),
	});
	$('.supply-price__item-more').click(function(){
		$(this).parent('.supply-price__item').toggleClass('active');
	});
	$('.supply-price__item-info-hide').click(function(){
		$(this).parent().parent('.supply-price__item').toggleClass('active');
	});
});
