//var tabela = document.getElementByTagName("table")[0];

//para vários - array
//document.querySelectorAll("table");

//textContent - somente para texto
//tabela.textContent = tabela.textContent + pacienteNovo;

//sem o # querySelector reconhece uma tag

var botaoAdicionar = document.querySelector("#adicionar-paciente");

//dentro da tag form o comportamento padrão é submeter o formulário
//navegador é o responsável por mandar o event
botaoAdicionar.addEventListener("click", function(event){
	
	//impede o comportamento padrão
	event.preventDefault();
	
	var inputNome = document.querySelector("#campo-nome");
	var inputPeso = document.querySelector("#campo-peso");
	var inputAltura = document.querySelector("#campo-altura");
	
	//.value pega o valor do input
	
	var pacienteNovo =	"<tr class='paciente'>" +
							"<td class='info-nome'>"+ inputNome.value +"</td>" +
							"<td class='info-peso'>"+ inputPeso.value +"</td>" +
							"<td class='info-altura'>"+ inputAltura.value +"</td>" +
							"<td class='info-imc'></td>" +
						"</tr>";
	
	//sempre pega o primeiro elemento, nessa caso uma tag
	var tabela = document.querySelector("table");
	
	tabela.innerHTML = tabela.innerHTML + pacienteNovo;
	
	inputNome.value = "";
	inputPeso.value = "";
	inputAltura.value = "";
	
});

