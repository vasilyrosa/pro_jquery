<!doctype html>
	<html lang="pt-BR">
	<head>
		<meta charset="UTF-8">
		<title>Eventos de mouse</title>
		<link rel="stylesheet" href="css/style.css" type="text/css">
		<script type="text/javascript" src="../../js/jquery.js"></script>
		<script type="text/javascript" src="js/aula6.js"></script>
	</head>
	<style>
		span{display: block; padding: 10px; background: #09f; color: #fff;
			font: "Trebuchet MS", Arial, Helvetica, sans-serif; 
			margin-bottom: 5px;}
			.campos{display: block; margin-bottom: 8px;}
			.acao{margin-top: 10px;}
			input{padding: 4px; margin-bottom: 5px;}
			#container{width: 400px; border: solid 2px #827D7D;
				background: #E4E4EA}

	</style>
	<body>
	
<div id="container">

	<span class="j_exe">
		DEBUG AQUI
	</span>

	<?php
		if(!empty($_POST)){
			echo '<pre>';
			print_r($_POST);
			echo '</pre>';
		}
		?>

		<form action="" method="post" name="campos_dinamicos" />
		
		<input type="text" name="texto[]" /> *
		
		<div class="campos"></div>
		
		<div class="acao">
			
			<input type="button" class="j_disparar" value="disparar"/>
			<input type="button" class="j_add" value="+"/>
			<input type="button" class="j_anexo" value="&"/>
			<input type="button" class="j_clear" value="x"/>
		</div>
	</form>
</div>
	</body>
	</html>	