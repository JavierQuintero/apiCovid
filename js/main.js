// btn Peticion

let $btn = document.getElementById('btnCode'); 

$btn.addEventListener("click", () => {
		
		let $num = document.getElementById("numberPais");
		let $numberPais = $num.value;

					
		if($numberPais < 0 
		|| $numberPais > 189)
		{
			alert(`No hay ${$numberPais} paises datados! `)
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
	.then(pais => pais.Countries[$numberPais])//Colombia = 36
		
	.then(data => {
		renderText($pais, data.Country)
		renderText($contenido, data.TotalConfirmed)
		renderText($dNConfirm, data.NewConfirmed)
		renderText($dTDeaths, data.TotalDeaths)
		renderText($dTRecovered, data.TotalRecovered)


	})
	.catch(e => console.log(e));	

});