$(function(){
	/*$('span').css({
		display: 'block',
		margin: '0 0 5px 0'
	});*/

	var estilo = {
		border: 	'3px solid #ccc',
		display: 	'block',
		padding: 	'5px',
		color:   	'#fff',
		margin:   	 '0 0 5px 0',
	    'text-align':'center'
	}

	$('span').css(estilo);

	/*$('span').click(function() {
		var bg = $(this).css('background-color');

		if($(this).hasClass('ativo')){
			$(this).removeClass('ativo');
			$('.j_result').css('background', '#ccc').text('Debug aqui');
		} else {
			$('span').removeClass('ativo');
			$(this).addClass('ativo');
			$('.j_result').text(bg).css('background', bg);
		}

		
	});*/


	$(':button').click(function() {
		
		var span = $('span:first');
		var ex = $('.j_result');

		var span_width = span.width();
		var span_inner_width = span.innerWidth();
		var span_outer_width = span.outerWidth();

		var span_height = span.height();
		var span_inner_height= span.innerHeight();
		var span_outer_height = span.outerHeight();
		var janela = $(window).height(); //janela é o que vc vê e o document e o tamanho real do documento



		ex.html(
         "Width: "+span_width+"<br />"+
         "Inner Width: "+span_inner_width+"<br />"+
         "Outer Width: "+span_outer_width+"<br />"+
         "<hr />"+
        "Height: "+span_height+"<br />"+
          "Inner Height: "+span_inner_height+"<br />"+
         "Outer Height: "+span_outer_height+"<br />"+
         "Janela: "+janela+"<br />"

			);
	});
});
