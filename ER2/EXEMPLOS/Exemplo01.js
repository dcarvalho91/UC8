/* regras para operadores de comparação
ao comparar duas coisas o resultado é booleano, portanto, true or false
= (é utilizado para atribuição)
== para comparação (verifica se é igual)
=== para comparação (verifica se é identico, portanto mesmo tipo de dado e valor)
! diferente
< menor que
> maior que
<= menor ou igual
>=maior ou igual

*/

/* Operadores de atribuição
= atribuição
+= (x+=y) é a mesma coisa que (x= x+y)
-= (x-=y) é a mesma coisa que (x= x-y)
*= (x*=y) é a mesma coisa que (x= x*y)
/= (x/=y) é a mesma coisa que (x= x/y)

*/

/* Operadores Lógicos
&& (e)
││ (ou)
! (negação)

Operador E
V && V = V
V && F = F
F && F = F
F && V = F
Posso Definir que com o operador E, a resposta apenas será verdadeira
se ambas a proposições forem verdadeiras.

Operador OU
V ││ V = V 
V ││ F = V
F ││ F = F
F ││ V = V
Posso definir que com o operador OU, a resposta apenas será FALSA se
ambas as proposições forem falsas.


*/

let x = true
//let y = true
let resultado = (!x)
console.log(resultado)
