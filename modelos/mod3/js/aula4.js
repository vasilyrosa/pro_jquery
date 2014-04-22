$(document).ready(function() {

	var contar = 0;
	var ex = $('.exemplo');

	/*$('.j_input').focus(function() {
		contar ++;
		ex.text($(this).val()+' - ('+contar+')');
	}).keyup(function() {
		contar ++;
		ex.text($(this).val()+' - ('+contar+')');
	}).mouseover(function() {
		contar ++;
		ex.text($(this).val()+' - ('+contar+')');
	});*/

	/* função bind agrupa um conjunto 
	de funções para realizar objetivos*/

	function count(){
		contar ++;
		ex.text($(this).val()+' - ('+contar+')');
	}

	/*$('.j_input').bind('focus keyup mouseover', count);

	$('.j_input').bind('focus keyup mouseover', function(){
		if(contar >= 10) {
			$(this).unbind();
		}
	});
	
	$('.j_input').bind({
		keyup: count,
		focus: function(){
			ex.text('Focus');
		},
		blur: function(){
			ex.text('Blur');
		}

	});*/

	function escreve(){
		ex.text($(this).val());
	}

	function dafocus(){
		ex.text('Focus');
	}
	function dablur(){
		ex.text('Blur');
	}

	$('.j_input').bind({
		keyup: escreve,
		focus: dafocus,
		blur: dablur,
		mouseover: count
	});
	
	
});