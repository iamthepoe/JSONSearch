

//criando o array de JSONS.
	let products = [{name: "guitar", price: 200.00},
		{name: "bass", price:350.00},
		{name: "acoustic guitar", price:100}
	]; 

//Criando a função pra caçar o produto quando o maluco apertar o botão.
/*DETALHE: esse '()=>' é uma arrow function. É só um jeito diferente de
escrever funções. ()=>{} é como function(){}.
*/

document.querySelector('#searchButton').addEventListener('click', ()=>{
	let input = document.querySelector('#searchInput'); //capturando o input, dessa forma teremos acesso ao valor que o usuário inseriu nele (o produto que será buscado)
	let content = document.querySelector('#content'); //capturando a div de conteúdo para exibir os dados do produto nela futuramente
	for(let i = 0; i<products.length; i++){ //for para percorrer todo o JSON e verificá-lo item por item
		if(input.value==products[i].name){ // aqui a gente vê se o valor inserido pelo usuário coincide com algum nome de um produto do array de JSONS. Caso exista, será exibido.
			content.innerHTML = `Nome: ${products[i].name} | Preço: ${products[i].price}`
		}
	}
});