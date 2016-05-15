var peso = 100;
var altura = 2.0;

if(altura != 0){
	var imc = peso / (altura * altura);
	console.log("IMC: " + imc);
}else{
	console.log("Não executei porque altura é igual a zero!");	
}