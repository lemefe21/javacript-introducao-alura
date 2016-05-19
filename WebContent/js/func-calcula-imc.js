var botao = document.getElementById("calcula-imcs");
//botao.onclick = calculaTodosImcs; somente um evento atribuido ao botão

botao.addEventListener("click", function (){
	
	var trsPacientes = document.getElementsByClassName("paciente");
	
	percorreArray(trsPacientes, function(pacienteTr){ //função anônima
		
		var pacienteAtual = montaPaciente(pacienteTr);
		
		var imc = pacienteAtual.pegaImc();
		
		var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
		tdImc.textContent = imc;
		console.log("IMC: " + imc);
		
	});
	
});

botao.addEventListener("click", function(){
	console.log("Calculando imcs...");
});
