;(function(){
	class 	UserLocation{
		static get(callback){
			if(navigator.geolocation){
				navigator.geolocation.getCurrentPosition((location)=>{
					callback({
						lat: location.coords.latitude ,
						lng: location.coords.longitude
					})
				})

			}else{
				alert("No se pudo detectar tu ubicacion")
			}

		}

	}

	const my_place = {
			 		lat: 19.4317717 ,
			 		lng: -100.3572851
			 		}

	google.maps.event.addDomListener(window,"load",()=>{
		const map = new google.maps.Map(
			document.getElementById("map"),
			 {
			 	center: my_place,
			 	zoom: 15
			 }
			)

			const market = new google.maps.Marker({
				map:map,
				position: my_place,
				title:"Tabsa Express",
				visible:true
			}) 

		UserLocation.get((coords)=>{
			let origen = new google.maps.LatLng(coords.lat,coords.lng)
			let destino = new google.maps.LatLng(my_place.lat,my_place.lng)

			let service = new google.maps.DistanceMatrixService()
			service.getDistanceMatrix({
					origins: [origen],
					destinations: [destino],
					travelMode: google.maps.TravelMode.DRIVING
				},(response,status)=>{
					if(status === google.maps.DistanceMatrixStatus.OK){
						const duration_element = response.rows[0].elements[0]
						const duracion_viaje = duration_element.duration.text
						
						document.querySelector("#message").innerHTML = `
						Estas a ${duracion_viaje} de la sucursal 
						`

					}

				})	
		})
	})
})()