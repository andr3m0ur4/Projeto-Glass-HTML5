// Função para mudar a foto de cada página
function mudarFoto(foto) {
	document.getElementById('icone').src = foto
}

// Função para extrair o nome do arquivo
function extrairArquivo(caminho){
	caminho	= caminho.replace("/\/g", '/')
	let arquivo = caminho.substring(caminho.lastIndexOf('/') + 1)
	
	return arquivo
}

// Função para calcular o total
function calc_total() {
	let qtd = parseInt(document.getElementById('qtd').value)
	tot = qtd * 1500
	document.getElementById('tot').value = tot
}

// Função para adicionar um evento no li
function carregar(arquivo) {
	if (arquivo === 'home' || arquivo === '') {
		padrao = 'glass-oculos-preto-peq'
	}

	if (arquivo === 'specs') {
		padrao = 'especificacoes'
	}

	if (arquivo === 'fotos') {
		padrao = 'fotos'
	}

	if (arquivo === 'multimidia') {
		padrao = 'multimidia'
	}

	if (arquivo === 'fale-conosco') {
		padrao = 'contato'

		let contato = document.getElementById('contato')
		contato.addEventListener('input', calc_total, false)
	}

	let index = document.getElementById('index')
	index.addEventListener('mouseover', () => mudarFoto('./images/home.png'), false)
	index.addEventListener('mouseout', () => mudarFoto(`./images/${padrao}.png`), false)

	let specs = document.getElementById('specs')
	specs.addEventListener('mouseover', () => mudarFoto('./images/especificacoes.png'), false)
	specs.addEventListener('mouseout', () => mudarFoto(`./images/${padrao}.png`), false)

	let fotos = document.getElementById('fotos')
	fotos.addEventListener('mouseover', () => mudarFoto('./images/fotos.png'), false)
	fotos.addEventListener('mouseout', () => mudarFoto(`./images/${padrao}.png`), false)

	let multimidia = document.getElementById('multimidia')
	multimidia.addEventListener('mouseover', () => mudarFoto('./images/multimidia.png'), false)
	multimidia.addEventListener('mouseout', () => mudarFoto(`./images/${padrao}.png`), false)

	let fale_conosco = document.getElementById('fale-conosco')
	fale_conosco.addEventListener('mouseover', () => mudarFoto('./images/contato.png'), false)
	fale_conosco.addEventListener('mouseout', () => mudarFoto(`./images/${padrao}.png`), false)
}

let caminho = window.location.pathname
let arquivo = extrairArquivo(caminho)

document.addEventListener('DOMContentLoaded', () => carregar(arquivo), false)
