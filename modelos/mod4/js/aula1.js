$(function(){
	var exe = $('.exemplo');

	$('.j_hide').click(function(){
		exe.hide('slow');
	}).css('cursor', 'pointer');;

	$('.j_show').click(function() {
		exe.show('slow');
	}).css('cursor', 'pointer');;

	$('.j_toggle').click(function() {
		exe.toggle('slow');
	}).css('cursor', 'pointer');

	$(':text').keyup(function() {
		var valor = $(this).val(); //recupera o valor escrito no campo
		
		if(valor == 'hide'){
			exe.hide('hide');
		} else if(valor == 'show') {
			exe.show('show');
		} else if(valor == 'toggle'){
			exe.toggle('toogle');
		} else {
			exe.text(valor);
		}
	});
	
	$(':reset').click(function(){
			exe.empty();
			$('#evento').empty();
	});
});

