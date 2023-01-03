let ListaDePecas = []

ListaDePecas.push('Disco de Freio')
ListaDePecas.push('Motor')
ListaDePecas.push('Amortecedor')

//ListaDePecas[2] = 'Pastilha'//alterar item da lista pelo indice

if (ListaDePecas.length < 10){
    console.log('É possível cadastrar mais peças')
}
else{
    console.log('Não há mais espaço na caixa')
}

let peso = 150
if (peso <100){
    console.log('A peça deve pesar no mínimo 100g')
}
else{
    console.log('A peça possui o peso adequado')
}

let NomePeca = 'Disco de Freio'

if (NomePeca.length > 3){
    console.log('O nome da peça está adequado')
}
else if(NomePeca.length == 0){
    console.log('O nome da peça não pode ser vazio')
}
else{
    console.log('O nome da peça deve ter mais de 3 caracteres, digite um nome aequado')
}