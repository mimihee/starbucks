$(function(){
	var s2Cnt = 0;

		function noticeFn(){
			$('.notice').animate({top:29},0).css({zIndex:2});
			$('.notice').eq(s2Cnt==0?4:s2Cnt-1).animate({top:0},0).css({zIndex:1});
			$('.notice').eq(s2Cnt).animate({top:29},0).animate({top:0},600);
		}		

		function noticeCountFn(){
			s2Cnt++;
			if(s2Cnt>4){
			   s2Cnt=0;
			}
			noticeFn();
		}
		setInterval(noticeCountFn, 3000);


});


