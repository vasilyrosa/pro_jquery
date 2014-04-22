$(function(){

	var este = $('.exemplo');

	$('input').change(function() {
		var acheck = $(this).attr('checked')+ '  - ' + $(this).attr('name');
		var pcheck = $(this).prop('checked')+ '  - ' + $(this).prop('name');
		var icheck = $(this).is(':checked')+ '  - ' + $(this).is('name'); // o is() pega o atributo com (:)
		este.html("ATTR = "+acheck+ "<br /> Prop = "+pcheck + "<br /> Is = "+icheck);
	});


	$('.remove').click(function() {
		//$(':checkbox').removeAttr('checked');
		$(':checkbox').removeProp('checked');
		$('input').trigger('click');
	});

	$('.edit').click(function() {
		//$('input').attr('name', 'via ATTR');
		$('input').prop('name', 'via PROP');
		$('input').trigger('click'); 
	});



	$('input').trigger('click'); //trigger executa um evento (click) atribuido a um elemento
});