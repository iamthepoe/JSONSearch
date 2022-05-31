let products = [
	{name: "guitar", price:520.99},
	{name: "bass", price:200.35},
	{name: "book box", price:199.99},
	{name: "babidi", price: 0},
	{name: "bottle", price:2.99}
];

let main = ()=>{
	let content = document.querySelector('#content');
	content.innerHTML = '';
	let text = '';
	for(let i = 0; i<products.length; i++){
			text+= `
				<hr>
				<h2>Nome do produto: ${products[i].name}</h2>
				<h3>Preço do produto: ${products[i].price}</h3>
				<hr>
			`
	}
	content.innerHTML = text;
}

main();

document.querySelector('#searchInput').addEventListener('input', ()=>{
	let content = document.querySelector('#content');
	content.innerHTML = '';
	let search = document.querySelector('#searchInput').value;
	let text;
	if(search.length<1){
		main();
	}else{
		for(let i = 0; i<products.length; i++){
			if(products[i].name.includes(search)){
				text+= `
					<hr>
					<h2>Nome do produto: ${products[i].name}</h2>
					<h3>Preço do produto: ${products[i].price}</h3>
					<hr>
				`
			}
		}
		content.innerHTML = text;
	}
});