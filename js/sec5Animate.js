$(function(){
	var s5T = 0;

	$(window).scroll(function(){
		if($(window).scrollTop()>=300){ 
			if( s5T===0 ){		
				s5T=1;			
				sec5AnimationFn();	
			}
		}
		else{	
			s5T=0;
			sec5AnimationFormatFn();
		}
	});

	
	
	function sec5AnimationFormatFn(){
		$('.sec5-ani1').stop().animate({left:-800, opacity:0 },1000);
		$('.sec5-ani2').stop().animate({right:-800, opacity:0},1500);	
		
	}	

	function sec5AnimationFn(){
		$('.sec5-ani1').stop().animate({left:0, opacity:1},1000);
		$('.sec5-ani2').stop().animate({right:0, opacity:1},1500);	
	}	
	
});
