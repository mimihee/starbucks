$(function(){



	$('.mainBtn').on({			
		mouseenter:function(){
			$('.sub').stop().slideUp(0);
			$(this).next().stop().slideDown(400);
			$('.mainBtn').removeClass('addMainBtn');
			$(this).addClass('addMainBtn');
									
		},
		focusin:		function(){      
			$('.sub').stop().slideUp(0);
			$(this).next().stop().slideDown(400);
			$('.mainBtn').removeClass('addMainBtn');
			$(this).addClass('addMainBtn');
			
		}
	});
	


	$('nav').on({
		mouseleave:function(){		
			$('.sub').slideUp(400);
			$('.mainBtn').removeClass('addMainBtn');
			
		},
		focusout:	function(){  
			$('.sub').slideUp(400);
			$('.mainBtn').removeClass('addMainBtn');
			
		}
	});
	
	$('.link-1').on({
		focusin:	function(){
			$('.sub').slideUp(400);
			$('.mainBtn').removeClass('addMainBtn');
			
		}
	});
	
	
});






