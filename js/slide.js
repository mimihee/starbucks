$(function(){
	var cnt=t=p=0; 
	
		$('.section3-slide-wrap').swipe({   
			swipeLeft: function(){			
				nextSlideCountFn();	
				t=1;
				$('.pausePlayBtn').children().attr('src','./img/main_prom_play.png');
				clearInterval(setId);					
			},
			swipeRight: function(){			
				prevSlideCountFn();	
				t=1;
				$('.pausePlayBtn').children().attr('src','./img/main_prom_play.png');
				clearInterval(setId);					
			}
		});
	
	
		$('.promotionBtn').on({
			click: function(){
				if(p==0){
					$(this).addClass('addCurrent');
					$('#section3').stop().slideDown(300);
					p=1;
					autoPlayfn();
				}
				else{
					$(this).removeClass('addCurrent');
					$('#section3').stop().slideUp(300);
					var cnt=t=p=0;
					clearInterval(setId);
					$('.section3-slide-wrap').stop().animate({left:-(819*cnt)},0);
					$('.section3-slide-wrap .slide').removeClass('addCurrent');
					$('.section3-slide-wrap .slide').eq(cnt).addClass('addCurrent');
					$('.pausePlayBtn img').attr('src','./img/main_prom_play.png');
					pageBtnEventFn(cnt);
				}
			}
		});
		


		$('.pausePlayBtn').on({
			click: function(){
				if( t == 0 ){    
					t = 1;	      
					clearInterval(setId);
					$(this).children().attr('src','./img/main_prom_play.png');
				}
				else{ 		      
					t = 0;    	  
					nextSlideCountFn();	
					autoPlayfn(); 
					$(this).children().attr('src','./img/main_prom_stop.png');
				}
				

			}
		});
	

		function autoPlayfn(){
			setId = setInterval(nextSlideCountFn, 4000);
		}


		$('.pageBtn').each(function(index){
			$(this).on({ 
				click: function(){
					cnt=index;
					mainSlideFn();
					t = 1;	      
					clearInterval(setId);
					$('.pausePlayBtn img').attr('src','./img/main_prom_play.png');
				}
			});
		});

		

		function pageBtnEventFn(z){ 	
			$('.pageBtn').children().attr('src','./img/main_prom_off.png');  
			$('.pageBtn').eq(z).children().attr('src','./img/main_prom_on.png'); 
		}


	
		$('.nextBtn').on({
			click: function(){
				if( !$('.section3-slide-wrap').is(':animated') ){
					nextSlideCountFn();	
				}
				t=1;
				$('.pausePlayBtn').children().attr('src','./img/main_prom_play.png');
				clearInterval(setId);	
			}
		});
			

		$('.prevBtn').on({
			click: function(){
				if( !$('.section3-slide-wrap').is(':animated') ){
					prevSlideCountFn();	
				}
				t=1;
				$('.pausePlayBtn').children().attr('src','./img/main_prom_play.png');
				clearInterval(setId);	
			}
		});
		
		
		
		function nextSlideCountFn(){
			cnt++;
			mainSlideFn();
		}
		
		function prevSlideCountFn(){
			cnt--;
			mainSlideFn();
		}
		
		
				
		
		function mainSlideFn(){
			$('.section3-slide-wrap').stop().animate({left:-(819*cnt)}, 500, function(){
				if(cnt>1){cnt = 0;} 	
				if(cnt<0){cnt = 1;}	
				
				$('.section3-slide-wrap').stop().animate({left:-(819*cnt)},0);
				
				$('.section3-slide-wrap .slide').removeClass('addCurrent');
				$('.section3-slide-wrap .slide').eq(cnt).addClass('addCurrent');
				
			});

			if(cnt>1){
				pageBtnEventFn(0);  
			}
			else{
				pageBtnEventFn(cnt); 
			}
			
		}

});



	
