$(function(){
	var contar = 0;
	/*$('p').click(function() {
		contar++
		$('body').append('<p>Clique novamente: '+contar+'</p>');	
	});*/

/* on e off */

	$('body').on('click', 'p', function(){
		contar++
		$('body').append('<p>Clique novamente: '+contar+'</p>');
		if( contar >= 3 ){
			$('body').off('click','p');
		}
	});

	$('#container').on({
		click: function() {
		$(this).append('<p>Clique novamente:</p>');	
		}
	});
});