/*var tdPeso1 = document.getElementById("peso-1");
var tdAltura1 = document.getElementById("altura-1");

//objeto paciente javascript
var paciente1 = {
		peso : tdPeso1.textContent, 
		altura : tdAltura1.textContent
};

var tdPeso2 = document.getElementById("peso-2");
var tdAltura2 = document.getElementById("altura-2");

//objeto paciente javascript
var paciente2 = {
		peso : tdPeso2.textContent, 
		altura : tdAltura2.textContent
};

var pacientes = [paciente1, paciente2];*/

//Dot Notation
//paciente.peso
//paciente.altura

//Bracket Notation
//paciente["peso"]

//retorna todos os <tr class="paciente"> da página como um array de tr
var trsPacientes = document.getElementsByClassName("paciente");

for(var posicaoAtual = 0; posicaoAtual <= trsPacientes.length - 1; posicaoAtual++){
	
	var pacienteTr = trsPacientes[posicaoAtual];
	
	//"getElementsByClassName" devolve sempre um array, <tr> atual
	//array com um elemento <tr> e os seus <td> que buscamos pelo ClassName
	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];// retorna <td>
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
	
	var paciente = {
			nome : tdNome.textContent,
			peso : tdPeso.textContent,
			altura : tdAltura.textContent
	};
	
	if(paciente.altura != 0){
		
		var imc = paciente.peso / (paciente.altura * paciente.altura);
		console.log("IMC: " + imc);
		
		//atualiza o IMC de cada paciente
		var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
		tdImc.textContent = imc;
		
	}else{
		console.log("Altura não pode ser igual a zero!");	
	}
	
}

