$(function(){
	var este = $('.exemplo');

	$('#start').click(function() {
		/*
		este.animate({top: '200px'},2000, function(){
			$(this).css('background', 'red');
		});
		*/

		este.animate({top: '200px'},2000);
		este.queue(function(){  //queue função de espera no final da fila
			$(this).css('background', 'red').dequeue(); //dequeue saia da fila
		});
		este.animate({top: '35px'},2000);
		este.queue(function(){
			$(this).css('background', '#09f').dequeue();
		});
		
		este.fadeOut(100);

		este.queue(function(){
			location.reload(); //reset na página
		});
	});

	$('#stop').click(function() {
		//este.clearQueue();  //parar a fila
		//este.stop();  // para a fila e vai pro final
		este.finish();
	});

	$.fx.interval = 13; //velocidade do efeito
	//$.fx.off = true; //retira os efeitos
});