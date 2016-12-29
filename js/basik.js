$(document).ready(function(){

var $hero = $('#hero'),
$laser = $hero.find('.laser');

function scan(){
	$hero.removeClass('idle').addClass('attack');
	$laser.addClass('laser');


	setTimeout(function(){
		$hero.removeClass('attack').addClass('idle');
		$laser.addClass('laser');
	}, 10000);
}
scan();
setInterval(scan, 20000);


// __________________________________________________________________

   
    $(".accordion p").hide();
 
    $(".accordion h3").click(function(){
 
    $(this).next("p").slideToggle("slow")
       
       
        
     });
  


// пр. Воссоединения 7 а оф 200

// 0974539685 

// 10:30
     
        
   

// ___________________________________________________________________________________





});