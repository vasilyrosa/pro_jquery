$(function(){
	/*$('.scroll').click(function() {

		var ex = $('.j_result');
		var offset = $(this).offset();
		var position = $(this).position();

		ex.html(
			"OFFSET: "+offset.left+" px left / "+offset.top+ " px top<br />"+
			"POSITION: "+position.left+" px left / "+position.top+ " px top<br />"
			).css({
				'color': 'white',
				'font-size': '16px',
				'font-weight': 'bold'
			});

});*/

		var ex = $('.scroll');
		var documento = $(document).height();
		var winJanela = $(window).height();
		var maxScroll = documento - winJanela;

		ex.text("Scroll: " + maxScroll);

		$(document).scroll(function() {
			var meuScroll = $(document).scrollTop();
			var janela = maxScroll - meuScroll;
			

			if(janela == 0) {
				ex.html("Scroll: "+ janela+ " | <span class='back'>Voltar ao topo</span>")
			} else {
				ex.text("Scroll: "+ janela);
			}
		});
	

	$('body').on('click','.back', function(){
		$('body, html').animate({scrollTop: 0}, 1000);
	});
});

