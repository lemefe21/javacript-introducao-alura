var trsPacientes = document.getElementsByClassName("paciente");

//função imprimeNome recebe seu parâmetro dentro da função
//em que ela é executada, a percorreArray
percorreArray(trsPacientes, imprimeNome);

//pode ser criada como função anônima
function imprimeNome(pacienteTr){
	
	var pacienteAtual = montaPaciente(pacienteTr);
	
	console.log(pacienteAtual.nome);
	
};
