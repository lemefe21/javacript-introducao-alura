//função que percorrer o array trsPacientes recebido junto com a função que será executada para cada tr
//func "cidadão de primeira classe" >> função que pode ser passada como parâmetro
function percorreArray(trsPacientes, func){
	
	for(var posicaoAtual = 0; posicaoAtual <= trsPacientes.length - 1; posicaoAtual++){
		
		//pega cada um dos trs e passa para a função recebida como parâmetro
		var pacienteTrAtual = trsPacientes[posicaoAtual];
		
		func(pacienteTrAtual);
		
	};
	
};