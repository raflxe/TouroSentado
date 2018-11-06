var nome = ["AlfaMob Sigma","Alfa Painel S40M136","Alfamob Corporativo"],
tipo = ["Diretor","Diretor","Reunião"],
nomeArquivo = ["AlfaMobSigma.jpg","AlfaPainel.jpg","AlfaMobCorporativo.jpg"],
preco = ["R$ 370,00","R$ 2573,00","R$ 500,00"],
dados = [nome,tipo,nomeArquivo,preco];
function mostra (numero) {
					return dados[numero]; 
					}
function mostraItem (numero) {
	var w = window.open();
	w.document.open("text/html",width=350,height=390);
	w.document.write(
		"<html>
			<head>
				<script type="text/javascript" src="mesas.js"></script>
			</head>
			<body>
				<h1>"+mostra[0]+"</h1><br/>
				<img src="+mostra[2]+"></br>
				<h2>Tipo: "+mostra[1]+"</h2></br>
				<h2>Dimensões: "+mostra[0]+"</h2></br>
				<h2>Preço: "+mostra[3]+"</h2><br/>
				<button type="button" onclick="window.close()">Fechar</button>
			</body>
		</html>"
	);
	w.document.close();
}