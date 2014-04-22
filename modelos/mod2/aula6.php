<!doctype html>
<html lang="pt">
	<head>
		<meta charset="UTF-8">
		<title>Filtros de Conteúdo</title>
		<style>
			
		</style>
		<script type="text/javascript" src="../../js/jquery.js"></script>
		<script>
			$(document).ready(function(){
				//elemento que contem o string pesquisado!
				$('li:contains("tecnologia")').css('background','#CB3434');
				//elemento que contem elemento pesquisado!
				$('li:has("span")').css('background', '#457341');

				//elemento que não contem conteudo
				$('li:empty').css('background','#4F345D');

				//parent e a mesma coisa que no()
				//$('li:not(li:empty)').css('border','3px solid #3E79C6');
				$('li:parent').css('border','3px solid #3E79C6');
			});
		</script>
	</head>
	<body>
			<ul>
				<li>Upinside tecnologia</li>
				<li>Portal <span>de</span> interatividade</li>
				<li></li>
				<li>Cursos em <span>video aulas</span> de Ti</li>
				<li></li>
				<li>tudo o que vc precisa de tecnologia</li>
			</ul>
	</body>
</body>
</html>