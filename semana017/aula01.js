var input = document.getElementsByName('array[]')
var k = 'Elementos contidos no array: '
    
var Criar = () => {
    for (var i = 0; i < input.length; i++) {
        var a  = input[i]
        k += `array [${i}].value = ${a.value} `
    }

    document.getElementById('m2').innerHTML = k
    document.getElementById('m1').innerHTML = "Saída:"
}

var Limpar = () => {
    document.getElementById('en').reset()
}

var soma = 0
var SomarTodos = () => {
    for (var i = 0; i < input.length; i++) {
        var a = input[i]
        soma += parseInt(a.value)
    }

    alert(soma)
}