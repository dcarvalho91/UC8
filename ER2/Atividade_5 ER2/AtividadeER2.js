/*
Avidade Card 9 - Atividade 5 - Encontro Remoto 2

Considere a quantidade de alunos presentes na sala, percorra 
do zero até o número total e retornar os seguintes resultados:

- Se o número for par, escreva ‘par’ e o número correspondente
- Se o número for ímpar, escreva ‘impar’ e o número correspondente 
- Se o número for zero, escreva ‘zero’ 
*/


//Primeira Solução
/*
let Número_de_Alunos = 10;

for(let contador = 0; contador <= Número_de_Alunos; contador++)
{
        if(contador == 0){
        console.log(`${contador} - ZERO`) //iterpolação
        //console.log(contador + " - ZERO") //concatenação
    }
        else if ((contador % 2) == 0){
            console.log(`${contador} - PAR`)
    }
    else {
        console.log(`${contador} - ÍMPAR`)
    }
}
*/
 
// Segunda Resolução
/*let Número_de_Alunos = 10;
let contador = 0
while(contador <= Número_de_Alunos)

{
        if(contador == 0){
        console.log(`${contador} - ZERO`) //iterpolação
        //console.log(contador + " - ZERO") //concatenação
    }
        else if ((contador % 2) == 0){
            console.log(`${contador} - PAR`)
    }
    else {
        console.log(`${contador} - ÍMPAR`)
    }
    contador ++
}
*/

let Número_de_Alunos = 10;
let contador = 0
do
{
        if(contador == 0){
        console.log(`${contador} - ZERO`) //iterpolação
        //console.log(contador + " - ZERO") //concatenação
    }
        else if ((contador % 2) == 0){
            console.log(`${contador} - PAR`)
    }
    else {
        console.log(`${contador} - ÍMPAR`)
    }
    contador ++
}while(contador <= Número_de_Alunos)

