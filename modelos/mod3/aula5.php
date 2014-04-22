<!doctype html>
	<html lang="pt-BR">
	<head>
		<meta charset="UTF-8">
		<title>Eventos de mouse</title>
		<link rel="stylesheet" href="css/style.css" type="text/css">
		<script type="text/javascript" src="../../js/jquery.js"></script>
		<script type="text/javascript" src="js/aula5.js"></script>
	</head>
	<body>
		<div class="carregando">
			<img src="img/load.gif" alt="carregando" title="carregando" /> Aguarde carregando !
		</div>

		<img src="img/foto.jpg" height="768" width="1024" alt="">

		<div class="form">

			<?php
			if(!empty($_POST)){
				echo '<pre>';
				print_r($_POST);
				echo '</pre>';
			}
			?>
			<form action="" method="post">
				<label for="">
					<div class="field">E-mail</div>
					<input type="text" name="email" />
					<span class="erro_email">Erro e-mail</span>
				</label>

				<label for="">
					<div class="field">Senha</div>
					<input type="password" name="senha" />
					<span class="erro_senha">Erro senha</span>
				</label>

				<input type="submit" value="Logar-se" name="ok" class="j_btn"/>
			</form>
		</div>
		

	</body>
	</html>	