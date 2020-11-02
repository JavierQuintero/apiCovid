		//Render
		let $pais = document.getElementById('pais'); 
		let $contenido = document.getElementById('contenido');
		let $dNConfirm =document.getElementById('dNConfirm');
		let $dTDeaths =document.getElementById('dTDeaths');
		let $dTRecovered =document.getElementById('dTRecovered');

		function renderText(html, t){
			html.textContent = t
		}

			//Peticion
		fetch('https://api.covid19api.com/summary')
		.then(covidData => covidData.json())
		.then(pais => pais.Countries[36])//Colombia = 36
		.then(data => {
			debugger
			renderText($pais, data.Country)
			renderText($contenido, data.TotalConfirmed)
			
			renderText($dNConfirm, data.NewConfirmed)
			renderText($dTDeaths, data.TotalDeaths)
			renderText($dTRecovered, data.TotalRecovered)

		})
		.catch(e => console.log(e));	