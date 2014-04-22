<!doctype html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<script type="text/javascript" src="../../js/jquery.js"></script>
		<script>
			//carrega o dom
			$(document).ready(function(){
				/*
				$('h1').css('color','#069');
				$('h1').hide();
				$('h1').delay('2000');
				$('h1').fadeIn('slow');
				$('h1').text('Tecnologia');
				*/
				/*
				$('h1')
				.css('color','blue').
				hide().delay('1000').
				fadeIn('slow')
				.text('Ola Mundo !')
				.click(function(){
					$('body').css('background','pink');

				});*/
			$('a').css({color: 'red',display: 'block'});
				$('.2').css('color','black');
				$('#3').css('color','green');
				$('*').css('padding','10px');
				$('h1, #3').css('border','solid 1px red');
			});

		</script>
	</head>
	<body>
		<h1>Estudando jquery na Upinside !</h1>
		<a href="#">Link 1</a>
		<a href="#" class="2">Link 2</a>
		<a href="#" id="3">Link 3</a>
	</body>
	</html>	
