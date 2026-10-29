var listaVinhos = [];

//Função para adicionar no array os vinhos
function adicionaVinho() {
    let nomeVinho = prompt("Digite o nome do vinho:")
    let tipoVinho = prompt("Digite o tipo do vinho (Tinto, branco ou Rosé):")
    let safraVinho = parseInt(prompt("Digite o ano da safra:"))
    let estoqueVinho = parseInt(prompt("Digite a quantidade do estoque do vinho:"))
    listaVinhos.push({
        nome: nomeVinho,
        tipo: tipoVinho,
        safra: safraVinho,
        estoque: estoqueVinho,
    })
}
adicionaVinho()
adicionaVinho()
adicionaVinho()

//Função para mostrar os vinhos cadastrados nos consoles
function mostraNoConsole(){
    listaVinhos.forEach((vinho) => {
        console.log(`------------------`);
        console.log(`Nome: ${vinho.nome}`);
        console.log(`Tipo: ${vinho.tipo}`);
        console.log(`Safra: ${vinho.safra}`);
        console.log(`Estoque: ${vinho.estoque}`);
        console.log(`------------------`);
    })
}