/**
* Eventos do Mouse
* e todos os seus exemplos.
*
**/


$(document).ready(function(){

	var ex = $('.exemplo');

	$('.j_um').click(function(){
		$(this).css('background', '#ccc');
		ex.text('Você clickou !');
	});

	$('.j_dois').dblclick(function(){
		$(this).css('background', '#ccc');
		ex.text('Você deu 2 clicks !');
	});

	$('.j_tres').focusin(function(){
		$(this).css('background', '#932A2A');
		ex.text('Você deu foco !');
	}).focusout(function() {
		$(this).css('background', '#ccc');
		ex.text('Você tirou o foco !');
	});

	$('.j_quatro').hover(function() {

		$(this).css('background', '#ccc');
		ex.text('Você passou o mouse !');
	});

	$('.j_cinco').mousedown(function() {
		$(this).css('background', '#932A2A');
		ex.text('Você apertou o botão do mouse !');
	}).mouseup(function() {
		$(this).css('background', '#ccc');
		ex.text('Você soltou o botão do mouse !');
	});

/* $(this).css('background', '#ccc');
ex.text('Você soltou o botão do mouse !'); */
	
	var a = 0;

	$('.j_seis').mouseenter(function() {
		a += 1;

		ex.text('Mouse Enter: '+a);
	}).mouseout(function(event) {
		ex.text('Mouse Out: ');
	});

	var b = 0;
	$('.j_sete').mouseover(function() {
		b += 1;
		ex.text('Mouse Over: '+b);
		
	}).mouseleave(function() {
		ex.text('Mouse Leave: ');
	});

	$('.j_oito').mousemove(function(move) {
		var localx = move.pageX;
		var localy = move.pageY;
		ex.text('Movendo X: '+localx+' - Movendo Y: '+localy);
	});
});