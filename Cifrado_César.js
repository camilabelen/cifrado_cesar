/*
Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César 
con el parámetro de desplazamiento de 33 espacios hacia la derecha.

Consideraciones Específicas:
·Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26
·Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher
·El usuario no debe poder ingresar un campo vacío o que contenga números
*/

function  caesarCipher(){
	do{
	var word = prompt("Ingrese una palabra para cifrar o descifrar");//expresión regular
	var wordCondition = /^[A-z\s]*$/;//expresión regular 
		if(!wordCondition.test(word)){
			alert("Ingrese solo caracteres de A-Z")
		}
		if(word == ""){
			alert("Ingrese una palabra con caracteres solo de A-Z")
		}
				
	} while(wordCondition.test(word) == false || word == "");

	do{
	var election = prompt("Para cifrar ingrese: 1 \nPara descifrar ingrese: 2");
		if (election != ""){
			if(election == 1){
				cipher();
			
			} else if(election == 2){
				decipher();
			
			} else {
				alert("Ingrese una opción válida")
			}
		}
	} while (election == "" || (election != "1" && election != "2"));

	//función para cifrar
	function cipher(){
		var newWord = [];
		for(var i = 0; i < word.length; i++){
			var asciiNumber = word.charCodeAt(i);//(x - (nº en ASCII) + n) % 26 + (nº en ASCII)
				if(asciiNumber >= 65 && asciiNumber <= 90){
					var uppercase = (asciiNumber - 65 + 33) % 26 + 65;// variable donde guardar estos numeros para aplicar el metodo String.fromCharCode()
					var caesarCipherString = String.fromCharCode(uppercase);
					newWord.push(caesarCipherString);
				}
				if(asciiNumber >= 97 && asciiNumber <= 122){
					var lowercase = (asciiNumber - 97 + 33) % 26 + 97;// variable donde guardar estos numeros para aplicar el metodo String.fromCharCode()
				 	var caesarCipherString2 = String.fromCharCode(lowercase);
					newWord.push(caesarCipherString2);
				}
				if(asciiNumber == 32){
					newWord.push(" ");
				} 
		} 
		return alert (newWord.join(""));
	}

	//función para descrifrar
	function decipher(){
		var newWord2 = []; //en esta variable se guardaran las nuevas letras por separado
		for(var i = 0; i < word.length; i++){ //recorrerá 
			var asciiNumber1 = word.charCodeAt(i);//(x - (nº en ASCII) + n) % 26 + (nº en ASCII)
				
				if(asciiNumber1 >= 65 && asciiNumber1 <= 90){ //rango de números para las mayúsculas
					var uppercase2 = (asciiNumber1 - 65 - 33 + 26*2) % 26 + 65;// (x - (nº en ASCII) - n + 26(para hacer nº positivo)) % 26 + (nº en ASCII) variable para numeros: aplicar String.fromCharCode()
					var caesarDecipherString = String.fromCharCode(uppercase2);//transformo los números que resultaron en la línea anterior a la letra que le corresponda
					newWord2.push(caesarDecipherString);//agrego cada la letra a un array
				}
				if(asciiNumber1 >= 97 && asciiNumber1 <= 122){
					var lowercase2 = (asciiNumber1 - 97 - 33 + 26*2) % 26 + 97;// variable donde guardar estos numeros para aplicar el metodo String.fromCharCode()
				 	var caesarDecipherString2 = String.fromCharCode(lowercase2);
					newWord2.push(caesarDecipherString2);
				}
				if(asciiNumber1 == 32){
					newWord2.push(" ");
				} 
		} 
		return alert (newWord2.join(""));
	}
}

caesarCipher();