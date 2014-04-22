$(document).ready(function(){

	/* validação de formulário */
	
	$('.form').css('display', 'none');
	$('.erro_senha').css('display', 'none');
	$('.erro_email').css('display', 'none');
	

	var regular = /[a-z0-9_\.\-]+@[a-z0-9_\.\-]*[a-z0-9_\.\-]+\.[a-z]{2,4}$/;
	$('.j_btn').click(function(){
		var email = $('input[name=email]').val();
		var senha = $('input[name=senha]').val();

		
		if(email == '') {
			$('.erro_email').fadeIn('fast').text('Informe seu e-mail!');
		}else if(!regular.test(email)){
			$('.erro_email').fadeIn('fast').text('Informe um e-mail válido!');
		} else if(senha == '') {
			$('.erro_senha').fadeIn('fast').text('Informe sua senha!');
		} else if(senha.length < 6 || senha.length > 12){
			$('.erro_senha').fadeIn('fast').text('Senha deve ter entre 6  a 12 digitos!');
		} else {
			$('input[name=email]').css('background', '#B2F1AA');
			$('input[name=senha]').css('background', '#B2F1AA');
		}

		return false;
	});

	/* validação com o blur */
	$('input[name=email]').blur(function(){
		var email = $('input[name=email]').val();
		if(email == '') {
			$('.erro_email').fadeIn('fast').text('Informe seu e-mail!');
		}else if(!regular.test(email)){
			$('.erro_email').fadeIn('fast').text('Informe um e-mail válido!');
		}else {
			$('input[name=email]').css('background', '#B2F1AA');
		}
		return false;
	});

		$('input[name=senha]').blur(function(){
		var senha = $('input[name=senha]').val();
		if(senha == '') {
			$('.erro_senha').fadeIn('fast').text('Informe sua senha!');
		} else if(senha.length < 6 || senha.length > 12){
			$('.erro_senha').fadeIn('fast').text('Senha deve ter entre 6  a 12 digitos!');
		} else {
			$('input[name=senha]').css('background', '#B2F1AA')
			
		}
		return false;
	});
	
	
});

$(window).load(function(){
	$('.carregando').fadeOut('slow',function(){
		$('.form').fadeIn('slow');
	})
	
});

