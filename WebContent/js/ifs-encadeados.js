//se salario mensal for maior do que 0 e menor do que 1000 >> 5%
//se não cair na condição anterior e o salario for menor que 2000 >> 10%
//senão cair nas outras duas condições >> 15%

var ehEstagiario = false;
var ehClt = true;

if(ehEstagiario || ehClt){

	var salarioMensal = 2500;

	if(salarioMensal > 0 && salarioMensal < 1000){
		
		var bonus = salarioMensal * 0.05;
		console.log("Bônus 5% - " + bonus);
		
	}else if(salarioMensal < 2000){
		
		var bonus = salarioMensal * 0.1;
		console.log("Bônus 10% - " + bonus);
		
	}else{
		
		var bonus = salarioMensal * 0.15;
		console.log("Bônus 15% - " + bonus);
		
	}
}
