
$(document).ready(function(){
	
	/*$('img').error(function(){
		var imagem = $(this).attr('src');
		alert('a imagem '+imagem+' existe');
		$(this).attr('src','img/erro.gif');
	});*/
	//$('body').css({orverflow:'hidden', margin:'0'});
	//$('img').width($(window).width()).height($(window).height());

	/*$(window).resize(function(){
		$('img').width($(window).width()).height($(window).height());
	});

	$(window).scroll(function(){
		$('body').css('background', 'red');
		$('img').fadeOut('1000');
	});*/

	$(window).scroll(function(){
		var topo = $(window).scrollTop(); //valor do topo
		if(topo > 300) {
			$('body').css('background', 'red');
			$('img').fadeOut('1000');
		} else {
			$('body').css('background', '#fff');
			$('img').fadeIn('1000');
		}
	});
});

