const DATE = new Date();

const updateHref  = (changeType) => {
	let phoneNumber = getNumber()
	let text = ''
	switch (changeType){
		case 'otherText':
			return false
		case 'messageText':
			text = buildingGreetingMessage()
			break
		default:
		return
	}

	if(!text){
		document.querySelector('#sendMessage').href=`https://wa.me/${phoneNumber}/` 
		return false
	}

	document.querySelector('#sendMessage').href=`https://wa.me/${phoneNumber}/?text=${text.replaceAll(' ', '%20')}` 

}

const getNumber = () => {
	let element = document.querySelector('.input')
	let phoneNumber = `55${element.value.replace(/[^0-9]/g, '')}`

	if(phoneNumber.length != 13){
	document.querySelector('#sendMessage').classList.add('disabled')
	element.style.borderColor = 'red'
	document.querySelector('.alert-invalid-phone-number').style.display = 'block'
	} else{
	document.querySelector('#sendMessage').classList.remove('disabled')
	element.style.borderColor = '#191919'
	document.querySelector('.alert-invalid-phone-number').style.display = 'none'
	}

	return phoneNumber
}

const buildingGreetingMessage = () =>  {
	let element = document.querySelector('#workplaceName')
	let greetingMessage = `Oi, ${DATE.getHours()? 'boa tarde' : 'bom dia'}, tudo bem? Eu falo com o responsável pela empresa ${element.value.toLocaleUpperCase()}?`
	return greetingMessage
}

const messageText = (element) => {
	switch (element.value){
		case 'none':
			document.querySelector('.div-workplace-name').style.maxWidth = '0'
			document.querySelector('.div-workplace-name').style.height = '0'
			document.querySelector('.workplace-name').setAttribute('disabled', 'true')
			break
		case 'greeting':
			document.querySelector('.div-workplace-name').style.maxWidth = '20vw'
			document.querySelector('.div-workplace-name').style.height = '25px'
			document.querySelector('.workplace-name').removeAttribute('disabled')
			break
		default:
			return false
	}
}

const clearAllTextInputs = () => {
	let inputs = []
	inputs = document.querySelectorAll("input[type=text]")
	inputs.forEach(input => input.value = '')
	document.querySelector('.input').value = '44'
}