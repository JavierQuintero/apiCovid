// btn Peticion

let $btn = document.getElementById('btnCode'); 

$btn.addEventListener("click", () => {
		
		let numberPais = document.getElementById("numberPais").value;
		console.log(numberPais);
		if(numberPais>189){
			alert('No hay tantos paises datados!')
		}



	//Render

	let $pais = document.getElementById('pais'); 
	let $contenido = document.getElementById('contenido');
	let $dNConfirm =document.getElementById('dNConfirm');
	let $dTDeaths =document.getElementById('dTDeaths');
	let $dTRecovered =document.getElementById('dTRecovered');

		const renderText = (html, t) => html.textContent = t

		//Peticion
	fetch('https://api.covid19api.com/summary')
	.then(covidData => covidData.json())
	.then(pais => pais.Countries[numberPais])//Colombia = 36
	.then(data => {
		
		renderText($pais, data.Country)
		renderText($contenido, data.TotalConfirmed)
		renderText($dNConfirm, data.NewConfirmed)
		renderText($dTDeaths, data.TotalDeaths)
		renderText($dTRecovered, data.TotalRecovered)


	})
	.catch(e => console.log(e));	

});