<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Seletores Hierárquicos</title>
		<style>
			input{display: block; padding: 3px;};
		
		</style>
		<script type="text/javascript" src="../../js/jquery.js"></script>
		<script>
			$(document).ready(function(){
				$('form').hide()
				.css({ 
							padding:'15px',
							background: '#f8f8f8',
							width: 		'500px',
							height:     '500px',
							position:   'relative'
							
						})
				.fadeIn(4000);

				$('.tt').css({
					display: 'block',
					'margin-bottom': '3px',
					'font-family': '"Comic Sans MS", cursive'
				});

				$('form :text, form :password').css({
					display: 	'block',
					'margin-bottom': '10px',
					padding:        '5px',
					background: 'pink',
					border: '0',
					width: '200'
				});

				$('form :text').hide().delay(500).fadeIn('slow');
				$('form :password').hide().delay(1000).fadeIn('slow');
				$('form :checkbox').hide().delay(1000).fadeIn('slow');

				$('form :radio').hide().delay(1000).fadeIn('slow');
				$('form :file').hide().delay(2000).fadeIn('slow');
				$('form :submit').hide().delay(3000).fadeIn('slow');
				//$('form :teste').hide().delay(3000).fadeIn('slow');
				$('form :image').hide().delay(5000).fadeIn('slow');

				$('form :reset').click(function(){
					$('form').slideUp('2000');
				});

				


			});
		</script>
	</head>
<body>
	<form action="" name="teste" method="post">
		<label for="">
			<span class="tt">Campo texto:</span>
			<input type="text" name="texto" disabled="disabled" />
		</label>
		
		<label for="">
			<span class="tt">Campo senha:</span>
			<input type="password" name="texto"  />
		</label>

		<label for="checkbox">
			<input type="checkbox"  checked="checked" value="1" /> Check 1
			<input type="checkbox"   value="2" /> Check 2
		</label>

		<label>
			<input type="radio"  checked="checked" value="1" /> Radio 1
			<input type="radio"   value="2" /> Radio 2
		</label>
		
		<label>
			<input type="file" name="arquivo"/>
		</label>

		<label for="radio">
			<input type="submit" value="enviar" name="enviar"/>
			<input type="reset" value="limpar" />
		</label>

		<label>
			<select name="teste" class="select">
				<option value="1">Select</option>
		</select>

		<label for="">
			<input type="image" src="http://www.confianca.com.br/confianca/pt/img/btn/btn_enviar.gif" 
			/>
		</label>

		</label>



	</form>
</body>
</html>