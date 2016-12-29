$(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 450 && $(this).scrollTop() < 1000  ){
              // console.log($(this).scrollTop());
              $('.about__dialog__photo').addClass('den22');
		}

		if ($(this).scrollTop() > 2701 && $(this).scrollTop() < 3000  ){
             $('.employment2__slide1__window__photo').addClass('employment2__slide1__window__photo__animate');
		}
	});

});