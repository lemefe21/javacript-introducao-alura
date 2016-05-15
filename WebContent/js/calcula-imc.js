var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");

//objeto paciente javascript
var paciente = {
		peso : tdPeso.textContent, 
		altura : tdAltura.textContent
};

//Dot Notation
//paciente.peso
//paciente.altura

//Bracket Notation
//paciente["peso"]

if(altura != 0){
	var imc = paciente.peso / (paciente.altura * paciente.altura);
	console.log("IMC: " + imc);
	
	var tdImc = document.getElementById("imc-2");
	tdImc.textContent = imc;
	
}else{
	console.log("Altura não pode ser igual a zero!");	
}