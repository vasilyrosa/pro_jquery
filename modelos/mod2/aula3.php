<!doctype html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Seletores Hierárquicos</title>
		<script type="text/javascript" src="../../js/jquery.js"></script>
		<script>
			$(function(){
				$('h2').css('margin','0');
				$('.exemplo').css({'margin-bottom':'20px',background: "#ccc",});
				$('p').css({margin:'0',color:'blue'});

				//FILHAS	
				$('.exemplo span').hide().delay('1000').fadeIn(1000).css('color', 'red');
				$('.exemplo h2').hide().delay('1000').fadeIn(800).css('font-size', '30px');

				$('.exemplo > p > span').css('color', 'green');

				//PRIMEIRO ELEMENTO APOS O SELECIONADO
				$('p:eq(3)').css('font-size', '25px');
				$('p:gt(3)').css('color', 'orange');
			});
		</script>
	</head>
	<body>
		<div class="exemplo">
			<h2>h2 dentro de exemplo</h2>
			<p>P dentro de exemplo</p>
			<p><span>Span dentro de exemplo</span></p>
			<span>Span filho direto da div exemplo</span>
		</div>
			<p class="irmao_1">p fora de exemplo</p>
			<p class="irmao_2">P fora de exemplo</p>
			<p class="irmao_3">p fora de exemplo</p>
		
	</body>
	</html>	