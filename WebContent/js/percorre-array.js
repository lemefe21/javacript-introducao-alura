//recebe um array como argumento e uma função que será executada para cada elemento
//func é um "cidadão de primeira classe" >> função que pode ser passada como parâmetro
function percorreArray(trsPacientes, func){
	
	for(var posicaoAtual = 0; posicaoAtual <= trsPacientes.length - 1; posicaoAtual++){
		
		//pega cada um dos trs e passa para a função recebida como parâmetro
		var pacienteTrAtual = trsPacientes[posicaoAtual];
		
		func(pacienteTrAtual);//função é executada
		
	};
	
};