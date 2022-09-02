let nome = document.querySelector('#nome')
let alimentacao = document.querySelector('#alimentacao')

function cadastrar(){
    let listaAnimais = localStorage.getItem('listaAnimais')
    
    let linha = `<tr>`
        linha  += `<td>${nome.value}</td>`
        linha += `<td>${nomecientifico.value}</td>`
        linha += `<td>${especie.value}</td>`
        linha += `<td>${qtd.value}</td>`
        linha += `<td>${peso.value}</td>`
        linha += `<td>${alimentacao.value}</td>`

        linha += `</tr>`

    if(listaAnimais == null){
         listaAnimais = linha
    }else{
        listaAnimais += linha
    }

    localStorage.setItem(`listaAnimais`,listaAnimais)
msgSucesso.innerHTML = '<strong>Cadastrado com Sucesso....</strong>'
setTimeout(() => {
    document.location.reload(true)

}, 2000);













}