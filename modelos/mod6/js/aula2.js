$(function(){

	 debuga = $('.resposta');
	 enviar = $('form[name="cadastro"]');
	 action = 'php/php2.php';

	 function resposta(data){
	 	debuga.empty().html('<pre>' +data+ '</pre>');
	 }

	 /*
	 enviar.submit(function(){
	 	var dados = $(this).serialize();
	 	var envia = $.get(action,dados);
	 	envia.then(resposta, function(){
	 		resposta('Erro ao enviar')
	 	}, resposta('<img src="img/load.gif" width="20" /> Carregando...')); 

	 	return false;
	 });

	enviar.submit(function(){
	 	var dados = $(this).serialize();
	 
	 $.get(action,dados, function(data){
	 	debuga.empty().html(

	 		"Nome : "+data.nome+"<br />"+
	 		"Email : "+ data.email
	 		);
	 },'json');
	 	
	 	return false;
	 });*/
	
	enviar.submit(function(){
	 	var dados = $(this).serialize();
	 
		$.getJSON(action, dados, function(data) {
			/*debuga.empty().html(

	 		"Nome : "+data.nome+"<br />"+
	 		"Email : "+ data.email
	 		);*/
			debuga.empty().html('<ul></ul>');
			$.each(data, function(key, value) {
				$('ul').append('<li>'+key+ ' : ' +value+'</li>')
			});
		});
	 	
	 	return false;
	 });

		debuga.click(function() {
			$(this).empty().load('http://localhost/pro_jquery/modelos/mod5/aula2.php');
		});
});
