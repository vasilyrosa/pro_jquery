$(function(){

	var exemplo = $('.exemplo');

	$(':button:eq(0)').click(function() {
		exemplo.addClass('adicionar');
	});

	$(':button:eq(1)').click(function() {
		exemplo.removeClass('adicionar');
	});

	$(':button:eq(2)').click(function() {
		exemplo.toggleClass('adicionar');
	});

	$(':button').click(function() {
		if(exemplo.hasClass('adicionar')){
			exemplo.text('Adicionar existe');
		} else {
			exemplo.text('classes existente são: '+ exemplo.attr('class'));
		}
	});

	$(':button:eq(3)').click(function() {
		exemplo.clone().prependTo('body');
	});

	$('body').on('click','div', function(){
		if($(this).hasClass('adicionar')){
			$(this).text('Adicionar existe');
		} else {
			$(this).text('classes existente são: '+ $(this).attr('class'));
		}
	});
});