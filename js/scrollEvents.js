$(function(){
  
$(window).scroll(function() {
    if ($(this).scrollTop() > 600 && $(this).scrollTop() < 1100 ) {
     
         $('.top__menu .r1').css({"color": "red" ,"transition": "0.5s" } );
         

         
    }  else {
    	 $('.top__menu .r1').css({"color": "white" ,"transition": "0.5s" });
    	 

    }

 if ($(this).scrollTop() > 1300 && $(this).scrollTop() < 2100 ) {
     
         $('.top__menu .r2').css({"color": "red" ,"transition": "0.5s" });
          
        

    }  else {
    	 $('.top__menu .r2').css({"color": "white" ,"transition": "0.5s" });

    }

 if ($(this).scrollTop() > 2200 && $(this).scrollTop() < 2700 ) {
     
         $('.top__menu .r3').css({"color": "red" ,"transition": "0.5s" });
    }  else {
    	 $('.top__menu .r3').css({"color": "white" ,"transition": "0.5s" });

    }

 if ($(this).scrollTop() > 2701 && $(this).scrollTop() < 3200 ) {
     
         $('.top__menu .r4').css({"color": "red" ,"transition": "0.5s" });
    }  else {
    	 $('.top__menu .r4').css({"color": "white" ,"transition": "0.5s" });

    }

 if ($(this).scrollTop() > 3201 && $(this).scrollTop() < 3450 ) {
     
         $('.top__menu .r5').css({"color": "red" ,"transition": "0.5s" });
    }  else {
    	 $('.top__menu .r5').css({"color": "white" ,"transition": "0.5s" });

    }

 if ($(this).scrollTop() > 3480 && $(this).scrollTop() < 5000 ) {
     
         $('.top__menu .r6').css({"color": "red" ,"transition": "0.5s" });
    }  else {
    	 $('.top__menu .r6').css({"color": "white" ,"transition": "0.5s" });

    }

if ($(this).scrollTop() > 100 && $(this).scrollTop() < 5000 ){
      $('.top').css({"background-color": "rgba(155, 142, 220, 0.9)" });
} else{
	$('.top').css({"background-color": "rgba(155, 142, 220, 0.4)" , "transition": "1s"});
}
 



if ($(this).scrollTop() > 500  ) {
    $('.about__dialog__window__list li').css({"list-style-image": "url(img/checked.png)"   }); 

    }     
         
 


    $(".top__menu a").hover(function(){
    	$(this).css({"color": "red" });

    } , function(){
    	$(this).css({"color": "white" });
    })



});

 

});