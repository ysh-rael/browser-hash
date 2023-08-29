document.addEventListener('DOMContentLoaded', () => {

const box_hash = document.querySelector('#hash');

// copiar valor do bttn hash
console.log(box_hash)

// Adiciona um ouvinte de clique ao botão
box_hash.addEventListener('click', function() {
    // Obtém o conteúdo do hash
    const hashValue = this.value

    // Cria um elemento de texto temporário
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = hashValue;

    // Anexa o elemento temporário ao documento
    document.body.appendChild(tempTextArea);

    // Seleciona o conteúdo do elemento de texto temporário
    tempTextArea.select();

    // Copia o conteúdo para a área de transferência
    document.execCommand('copy');
 
    // Remove o elemento de texto temporário
    document.body.removeChild(tempTextArea);

    // Exibe uma mensagem informando que o valor foi copiado
    const abbr = document.querySelector('#abbr')
    const info = document.querySelector('#informa')
    abbr.title = '✔️ Copiado'
    info.style.display = 'flex'
    setTimeout(() => {
        info.style.display = 'none'
        abbr.title = 'Click para copiar'
    }, 2100)
})

})
