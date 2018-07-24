;(function(){
	let sticky = false
	let currentP = $("[data-name='image-counter']").attr("content")

	const imageCounter = 2
	const email = "uli_vra@hotmail.com"

	$("#contact-form").on("submit",function(ev){
		ev.preventDefault()
		sendForm($(this))
		return false
	})


	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)
	checkScroll()
	isOpen()

	$("#menu-opener").on("click",toggleNav)

	$(".menu-link").on("click",toggleNav)

	setInterval(()=>{
		if (currentP < imageCounter) {
			currentP++
		}else{
			currentP=0
		}
		$("#gallery .inner").css({
			left: "-"+currentP*100+"%"
		})
	},4000)

	$(window).scroll(checkScroll)

	function checkScroll(){
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
	}

	function isOpen(){
		let date = new Date()
		const current_hour = date.getHours()
		if (current_hour < 8 || current_hour> 20) {
			
			$("#is_open .text").html("Cerrado ahora <br> Abierto de 8am a 9pm")
		}
	}
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

	function toggleNav(){
		$("#responsible-nav ul").toggleClass("active")
		$("#menu-opener").toggleClass("glyphicon-menu-hamburger")
	}
})()