//função que cria um objeto paciente
function montaPaciente(pacienteTr){
	
	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
	
	var paciente = {
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
	
	return paciente;
	
}