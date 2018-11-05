<!DOCTYPE html>
<html>
	<head>
		<title>Mesas</title>
		<link href='https://fonts.googleapis.com/css?family=Stoke' rel='stylesheet'>
		<link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'>
		<link href='arquivoDeExtensao.css' rel='stylesheet'>
	</head>
	<body>
		<header>
			<img class="imglogo" src="TouroSentadoLogoPq.png" alt="Touro sentado em formato de logotipo pequeno">
			<address class="ender">
				Av. Cabeza de Vaca, 1559<br>
				Cel: (21) 98765-4321<br>
				contato@tsent.com.br
			</address>
			<script type="javascript">
			:w<!--
			var nome = ["AlfaMob Sigma","Alfa Painel S40M136","Alfamob Corporativo"];
			var tipo = ["Diretor","Diretor","Reunião"];
			var nomeArquivo = ["AlfaMobSigma.jpg","AlfaPainel.jpg","AlfaMobCorporativo.jpg"];
			var preco = ["R$ 370,00","R$ 2573,00","R$ 500,00"];
			var entMesa = [nome,tipo,nomeArquivo,preco];
			function mostraMesa (numMesa) {
				return entMesa[numMesa]; 
			}
			function mostra (numMesa) {
				var w = window.open();
				w.document.open("text/html",width=350,height=390);
				w.document.write("<html><head></head><body><h1>"+mostraMesaR(0)+"</h1><br/><img src="+mostraMesa(2)+"></br><h2>Tipo: "+mostraMesa(1)+"</h2></br><h2>Dimensões: "+mostraMesa(0)+"</h2></br><h2>Preço: "+mostraMesa(3)+"</h2><br/><input type="submit" value="submit" onclick="window.close()"></body></html>");
				w.document.close();
			}		
		--> 
			</script>
		</header>
		<nav>
			<ul>
				<li><a href="TouroSentado.html" target="_blank">Apresentação</a></li>
				<li><a href="Mesas.html" target="_blank">Mesas</a></li>
				<li><a href="Cadeiras.html" target="_blank">Cadeiras</a></li>
				<li><a href="Compras.html" target="_blank">Compras</a></li>
			</ul>
		</nav>
		<section>
			<h3>Mesas</h3>
			<ol class="listaMesas">
				<li>Diretor
					<ul>
						<li><a href="javascript:mostra(0)">Alfamob Sigma</a></li>
						<li><a href="javascript:mostra(1)">Alfa Painel S40M136</a></li>
					</ul>
				</li>
				<li>Reunião
					<ul>
						<li><a href="javascript:mostra(2)">Alfamob Corporativo</a></li>
					</ul>
				</li>
			</ol>
		</section>
	</body>
</html>
