/*
 * Adiciona um Evento de Clique ao Botão 'Calcular'
 * 
 * Este bloco de código adiciona um ouvinte de evento de clique ao botão com o ID 'calculate'.
 * Quando o botão é clicado, a função anônima associada é executada para realizar o cálculo de juros compostos.
 */
document.getElementById('calculate').addEventListener('click', function(){
    // Obter os valores dos campos de entrada e converter para números
    const value = parseFloat(document.getElementById('value').value);
    const fee = (parseFloat(document.getElementById('fee').value) / 100);
    const time = parseFloat(document.getElementById('time').value);

    // Verificar se os valores são válidos
    if (isNaN(value) || isNaN(fee) || isNaN(time)) {
        // Exibir um alerta se algum valor inserido não for um número válido
        alert("Por favor, insira valores válidos nos campos.");
        return;
    }

    // Calcular o total usando a fórmula de juros compostos
    const total = value * Math.pow(1 + fee, time);

    // Atualizar o elemento com o resultado formatado
    document.getElementById('total').innerHTML = "R$" + total.toFixed(2).replace('.',',');
});

    
