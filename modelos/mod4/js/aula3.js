$(function(){
	var disparar  = $(':button[value="disparar"]');
	var verificar = $(':button[value="verificar"]');
	var exemplo   = $('span');


	/*disparar.click(function(event) {
		exemplo.slideUp("slow");
	})
	.dblclick(function(){
		exemplo.slideDown("slow");
	});*/

	disparar.click(function() {
		exemplo.slideToggle(1500)
	});

	verificar.click(function() {
		if(exemplo.is(':visible')){
			$('body').append('<p style="color:green">Visivel!</p>');
			
		} else if(exemplo.is(':hidden')){
			$('body').append('<p style="color:red">Oculto!</p>');	
		}
		$('p').delay(2500).slideUp('slow'); //slideUp no p do append
	});
});