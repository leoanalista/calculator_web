//call button
document.getElementById("calculate-button").onclick = function() {
    //Pegando os valores inseridos nos elementos
    let elem1 = document.getElementById('elem-1');
    let elem2 = document.getElementById('elem-2');
    
    //Convertendo o tipo de varável
    let val1 = parseInt(elem1.value);
    let val2 = parseInt(elem2.value);
    
    //Chamando a função de validação
    isNumber(val1,val2);

    //Função de validação de Campos nulos
    function isNumber (num1,num2) {
    	if (isNaN(num1 && num2)) {

    		alert('Preencha os dois campos, Parça!');
    	} else {
 	//Pegando o botão selecionado dentro do grupo "operation"
 	let choice = document.querySelector('input[name="operation"]:checked');
 	let operation = choice.value;

    //Mostrando o resultado no elemento (h2) "Resultado"
    let resultElement = document.getElementById('result');
    resultElement.innerText = getResult(val1,val2,operation);
		}
	}
	
    //Função para calculos
    function getResult (n1, n2, operation) {

    	if (operation === '+') {
    		return n1 + n2;
    	} else if (operation === '-') {
    		return n1 - n2;
    	} else if (operation === '*') {
    		return n1 * n2;
    	} else if (operation === '/') {
    		return n1 / n2;
    	}
    }
}
