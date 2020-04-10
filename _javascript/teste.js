let quebrada = false

// Função para mudar a lâmpada
function mudarLampada(tipo) {
	if (!quebrada) {
		document.getElementById('lampada').src = `./_imagens/lampada-${tipo}.jpg`
		if (tipo === 'quebrada') {
			quebrada = true
		}
	}
}

// Função para adicionar uma espera de evento na imagem
function carregar() {
	let lampada = document.getElementById('lampada')
	lampada.addEventListener('mousemove', () => mudarLampada('acesa'), false)
	lampada.addEventListener('mouseleave', () => mudarLampada('apagada'), false)
	lampada.addEventListener('click', () => mudarLampada('quebrada'), false)
}

document.addEventListener('DOMContentLoaded', carregar, false)
