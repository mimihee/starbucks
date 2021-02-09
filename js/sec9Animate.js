$(function(){
	var s9T = 0;
	
	$(window).scroll(function(){
		if( $(this).scrollTop() >= $('#section8').offset().top-150 ){
			if( s9T==0 ){
				s9T=1;
				sec9AniFn();
			}
		}
		else{
			s9T=0;
			sec9AniFormatFn();
		}
		
	});


	function sec9AniFormatFn(){
		$('.sec9-right-title-1').stop().animate({ left:800, opacity:0 },2000);
		$('.sec9-right-title-2').stop().animate({ left:800, opacity:0 },2500);
		$('.sec9-right-ani3')	.stop().animate({ left:800, opacity:0 },3000);
		$('.fadeIn-img')	    .stop().animate({           opacity:0 },3000);
	
	}
	
	function sec9AniFn(){
		$('.sec9-right-title-1').stop().animate({ left:0, opacity:1 },2000);
		$('.sec9-right-title-2').stop().animate({ left:0, opacity:1 },2500);
		$('.sec9-right-ani3')	.stop().animate({ left:0, opacity:1 },3000);
		$('.fadeIn-img')	    .stop().animate({         opacity:1 },3000);
	}

});
