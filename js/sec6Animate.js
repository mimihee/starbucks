$(function(){
	var s6T = 0;
	
	$(window).scroll(function(){							
		if( $(window).scrollTop() >= $('#section4').offset().top ){
			if( s6T==0 ){
				s6T=1;
				sec6AniFn();	
			}
		}
		else{ 
			s6T=0;
			sec6AniFormatFn();
			
		}
	});


	function sec6AniFormatFn(){
		$('.sec6-ani').stop().animate({ opacity:0 },1000);
	}
	function sec6AniFn(){
		$('.sec6-ani').stop().animate({ opacity:1 },2000);
	}
	
	
	
});

