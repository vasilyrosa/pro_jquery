$(document).ready(function(){

	/* placeholder focusin e focusout */
	$('.j_place').each(function() {
		 var place = $(this).attr('title');
		 var input = $(this);
		
		 input
			 .val(place)
			 .css('color','#ccc')
			 .focusin(function(){
			 	input.css('color', '#000');
			 	if(input.val() == place){
			 		input.val('');
			 	}
		 }).focusout(function() {
		 	if(input.val() == ''){
		 		input.css('color','#ccc');
		 		input.val(place);
		 	}
		 });
	});


	 var exemplo = $('.exemplo');
	/*$('.j_texto').keypress(function() {
		exemplo.text($(this).val());
	});*/
	
	$('.j_um').focus(function() {
		exemplo.text($(this).attr('title'));
	}).keyup(function() {
		if($(this).val() == 'Everton') {
			$('.j_dois').focus();
		}
	});

	/*$('.j_um').blur(function() {
		exemplo.text('Você saiu do campo '+$(this).attr('name'));
	});*/

	$('.j_um').change(function() {
		exemplo.text('Voce alterou o valor do campo: '
			+ $(this).val());
	});

	$(':button').click(function() {
		$('form').submit();
		$('.j_texto').select();
	});

	$('form').submit(function() {
		
		return false;
	});
	
});
