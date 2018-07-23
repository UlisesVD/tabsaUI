;(function(){
	let sticky = false
	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)
	$(window).scroll(()=>{
		const inBottom = isInBottom()

		if(inBottom && !sticky){
			//mostrar nav sticke
			sticky = true
			stickNavigation()
		}
		if(!inBottom && sticky){
			//ocultar nav sticke
			sticky = false
			unStickNavigation()
		}
	})

	function stickNavigation(){
		$("#description").addClass("fixed").removeClass("absolute")

		$("#navigation").slideUp("fast")
		$("#sticky-navigation").slideDown("fast")
	}

	function unStickNavigation(){
		$("#description").removeClass("fixed").addClass("absolute")

		$("#navigation").slideDown("fast")
		$("#sticky-navigation").slideUp("fast")
	}

	function isInBottom(){
		const $description = $("#description")
		const descriptionHeight = $description.height()

		return $(window).scrollTop() > $(window).height() - (descriptionHeight*1.5)
	}
})()