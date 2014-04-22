$(function() {

	var este = $("strong");

	este.click(function() {
		$(this).toggleClass('off')
	});

	$(':button:eq(0)').click(function() {
		este.prependTo('.exemplo'); //prependTo moce um elemento existente pra dentro da div
	});

	$(':button:eq(1)').click(function() {
		este.detach();
	});

	$(':button:eq(2)').click(function() {
		este.remove();
	});

	$(':button:eq(3)').click(function() {
		este.empty();
	});
});