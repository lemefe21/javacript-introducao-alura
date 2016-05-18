var trsPacientes = document.getElementsByClassName("paciente");

percorreArray(trsPacientes, function(pacienteTr){ //função anônima
	
	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
	
	var pacienteAtual = {
			nome : tdNome.textContent,
			peso : tdPeso.textContent,
			altura : tdAltura.textContent,
			pegaImc : function(){ //função anônima
				
				//this - representa o objeto onde a função está sendo chamanda
				if(this.altura != 0){
					
					var imc = this.peso / (this.altura * this.altura);
					return imc;
					
				}else{
					console.log("Altura não pode ser igual a zero!");	
				}
				
			}
	};
	
	var imc = pacienteAtual.pegaImc();
	
	var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
	tdImc.textContent = imc;
	console.log("IMC: " + imc);
	
});