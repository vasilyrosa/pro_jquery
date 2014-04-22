<!doctype html>
<html lang="pt">
	<head>
		<meta charset="UTF-8">
		<title>Seletores de Atributos</title>
		<style>
			
		</style>
		<script type="text/javascript" src="../../js/jquery.js"></script>
		<script>
			$(document).ready(function(){
				$('a[rel]').css({
					display: 'block',
					'margin-bottom': '10px'
				});
				$('a[href]').css({
					color: '#E46213'
				});

				//valor do atributo
				$('a[href="#"]').css('font-size', '20px');
				//contem o valor do atributo
				$('a[href*="up"]').css('font-size', '30px');
				//valor do atribyuto é diferente
				$('a[rel!="up1"]').css('color', '#A135AA');

				$('a[title="upinside"]').click(function(){
					alert('Estamos estudando os seletores de atributo !');
				});
			});
		</script>
	</head>
	<body>
			<a href="#" rel="up1">Link 1</a>
			<a href="#" rel="up2">Link 2</a>
			<a href="#up" rel="up3" title="upinside">Link 3</a>
	</body>
</body>
</html>