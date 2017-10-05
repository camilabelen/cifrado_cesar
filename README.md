# Cifrado César

__Programa:__ _Transforma una frase con cifrado césar_
__Entrada:__ _Frase del usuario_
__Salida:__ _Frase cifrada o decifrada_



	Función caesarCipher
    	Preguntar frase al usuario
        	La frase debe contener solo letras y espacios
            	SI la frase contiene números o símbolos
                	Mostrar alerta "Ingrese solo caracteres de A-Z"
            	SI la frase es un campo vacío  
                	Mostrar alerta "Ingrese una palabra con caracteres solo de A-Z"
    	Ejecutar hasta que ingrese una frase válida

    	SI la frase anterior es válida preguntar "Para cifrar ingrese: 1 \nPara descifrar ingrese: 2"
        	SI la respuesta no es un campo vacío:
            	SI la respuesta es 1 
                	Ejecutar función cifrar
            	SI la respuesta es 2
                	Ejecutar función decifrar
            	SI la respuesta es cualquier otra menos las opciones dadas 
                	Mostrar alerta "Ingrese una opción válida"
    	Ejecutar mientras la opcion ingresada sea un campo vacio o sea distinta a 1 o 2

        	Función de cifrado
            	Variable vacía para la nueva frase cifrada
                	Recorrer la longitud de la frase ingresada
                    	Variable para obtener los números en ASCII correspondientes a cada letra de la frase ingresada
                        	SI los numeros en ASCII estan entre 65 y 90
                            	Variable donde se ejecuta formula de cifrado para mayusculas
                            	Obtener letra correspondiente segun el cifrado 
                            	Guardar la letra generada en la variable anterior en la variable vacía

                        	SI los numeros en ASCII estan entre 97 y 122
                            	Variable donde se ejecuta formula de cifrado para minúsculas
                            	Obtener letra correspondiente segun el cifrado 
                            	Guardar la letra generada en la variable anterior en la variable vacía  

                        	SI el número de ASCII obtenido corresponde a 32
                            	Guardar en la variable vacía un espacio


                	Retornar alerta con las letras obtenidas unidas como cadena

       		Función de decifrado
            	Variable vacía para la nueva frase decifrada
                	Recorrer la longitud de la frase ingresada
                    	Variable para obtener los números en ASCII correspondientes a cada letra de la frase ingresada
                        	SI los numeros en ASCII estan entre 65 y 90
                            	Variable donde se ejecuta formula de decifrado para mayusculas
                            	Obtener letra correspondiente segun el decifrado 
                            	Guardar la letra generada en la variable anterior en la variable vacía

                        	SI los numeros en ASCII están entre 97 y 122
                            	Variable donde se ejecuta la fórmula de decifrado para minúsculas
                            	Obtener letra correspondiente segun el decifrado 
                            	Guardar la letra generada en la variable anterior en la variable vacía  

                        	SI el número de ASCII obtenido corresponde a 32
                            	Guardar un espacio en la variable vacía 


                	Retornar alerta con las letras obtenidas unidas como cadena
              	


 
