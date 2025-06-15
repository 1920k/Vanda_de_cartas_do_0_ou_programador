

const btnFiltrar = document.querySelector('.btn-filtar');

btnFiltrar.addEventListener('click', () => {
    const categoriaSelecionada = document.querySelector('#categoria').value.toLowerCase()

    const catas = document.querySelectorAll('.carta');

    catas.forEach(carta => {
        const categoriaCarta = carta.dataset.categoria.toLowerCase();

        if (!categoriaSelecionada || categoriaCarta == categoriaSelecionada) {
            carta.style.display = 'block';
        } else {
            carta.style.display = 'none'
        }
    })
})