$(function(){

	 debuga = $('.resposta');
	 enviar = $('form[name="cadastro"]');
	 action = 'php/php1.php';

	 /*enviar.submit(function(){

	 	var nome = $('input[name="nome"]').val();
	 	var mail = $('input[name="email"]').val();

	 	$.post(action,{nome:nome, email: mail}, function( valores ){
	 		alert(valores);
	 	});
	 	return false;
	 });*/

	function resposta(data) {
		//alert(datas);
		debuga.empty().html('<pre>'+data+'</pre>');
	}


	/*enviar.submit(function(){

	 	$.post(action,$(this).serialize(),resposta);
	 	return false;
	 }); */

	/*enviar.submit(function(){
		var  postar = $.post(action, $(this).serialize());
		
		postar.done( resposta );
		postar.fail( resposta('Erro: ao enviar!') );
	 
	 	return false;
	 });*/

	enviar.submit(function(){
		var postar = $.post(action,$(this).serialize());
		postar.progress( resposta('<img src="load.gif" width="20" /> Carregando...') );
		postar.done( resposta );
		postar.fail(function(){
			resposta('Erro ao enviar');
		});
		return false;	
	});
});