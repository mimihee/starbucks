$(function(){
	var s7T = 0;

	$(window).scroll(function(){
		if( $(window).scrollTop()>=$('#section6').offset().top-200 ){
			if( s7T==0 ){
				s7T=1;
				sec7AniFn();	
			}
		}
			else {
				s7T = 0;
				sec7AniFormatFn(); 
			}
	});
	
	
	
	function sec7AniFormatFn(){  
		$('.sec7-ani1').stop().animate({left:-1000},1000,'easeOutExpo');
		$('.sec7-ani2').stop().animate({left:-1000},1500,'easeOutExpo');
		$('.sec7-ani3').stop().animate({opacity:0},1500);
	}
	function sec7AniFn(){
		$('.sec7-ani1').stop().animate({left:0},2000,'easeOutExpo');
		$('.sec7-ani2').stop().animate({left:0},2500,'easeOutExpo');
		$('.sec7-ani3').stop().animate({opacity:1},2500);
	}
	
	
});

