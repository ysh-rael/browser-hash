document.addEventListener('DOMContentLoaded', () => {

const box_hash = document.querySelector('#hash');

// copiar valor do bttn hash
console.log(box_hash)

// Adiciona um ouvinte de clique ao botão
box_hash.addEventListener('click', function() {
    // Obtém o conteúdo do hash
    const hashValue = this.value
    console.log('hashValue: ' + hashValue)

    // Cria um elemento de texto temporário
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = hashValue;
    console.log('tempTextArea: ' + tempTextArea)


    // Anexa o elemento temporário ao documento
    document.body.appendChild(tempTextArea);

    // Seleciona o conteúdo do elemento de texto temporário
    tempTextArea.select();

    // Copia o conteúdo para a área de transferência
    document.execCommand('copy');

    // Remove o elemento de texto temporário
    document.body.removeChild(tempTextArea);

    // Exibe uma mensagem informando que o valor foi copiado
    alert('Valor do hash copiado para a área de transferência!');
})

})
