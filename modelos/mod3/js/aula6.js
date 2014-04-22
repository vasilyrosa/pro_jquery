$(document).ready(function(){
	var  ex = $('.j_exe');

	$(':text').focusin(function() {
		var texto = $(this).val();
		ex.text(texto);
	});

	$('.j_disparar').click(function() {
		$(':text').trigger('focusin');//força um evento atribuido acima a ser executado
		$('form[name="campos_dinamicos"]').submit();
	});

	$('.j_add').click(function() {
		$('.campos').append('<input type="text" name="texto[]" /> ');
	});

	$('.j_anexo').click(function() {
		$('.campos').prepend('<input type="file" class="file" name="img[]" multiple="multiple"/>');
		$(this).unbind('click').fadeOut('slow');
	});

	$('.j_clear').click(function() {
		$('pre').fadeOut();
	});


});