const DATE = new Date();

const updateHref = (changeType) => {
	let phoneNumber = getNumber()
	let text = ''

	switch (changeType) {
		case 'phoneNumber':
			let operationType = document.querySelector('#optionSelect').value
			switch (operationType) {
				case 'greetingText':
					text = buildingGreetingMessage()
					break
				case 'customText':
					text = getCustomText()
					break
				case 'companyPresentation':
					text = buildingPresentationMessage()
					break
			}
			break
		case 'greetingText':
			text = buildingGreetingMessage()
			break
		case 'customText':
			text = getCustomText()
			break
		case 'companyPresentation':
			text = buildingPresentationMessage()
			break
		default:
			break
	}

	if (!text) {
		document.querySelector('#sendMessage').href = `https://wa.me/${phoneNumber}/`
		return false
	}

	document.querySelector('#sendMessage').href = `https://wa.me/${phoneNumber}/?text=${text.replaceAll(' ', '%20')}`
}

const getNumber = () => {
	let dddInput = document.querySelector('.ddd-input')
	let phoneNumberInput = document.querySelector('.phone-number-input')
	let phoneNumber = `55${dddInput.value}${phoneNumberInput.value.replace(/[^0-9]/g, '')}`

	if (phoneNumber.length < 12 || phoneNumber.length > 13) {
		document.querySelector('#sendMessage').classList.add('disabled')
		phoneNumberInput.style.borderColor = 'red'
		document.querySelector('.alert-invalid-phone-number').style.display = 'block'
	} else {
		document.querySelector('#sendMessage').classList.remove('disabled')
		phoneNumberInput.style.borderColor = '#191919'
		document.querySelector('.alert-invalid-phone-number').style.display = 'none'
	}

	return phoneNumber
}

const buildingGreetingMessage = () => {
	let element = document.querySelector('#greetingText')
	if (!element.value) return false
	let greetingMessage = `Oi, ${DATE.getHours() > 12 ? 'boa tarde' : 'bom dia'}, tudo bem? Eu falo com o responsável pela empresa ${element.value.toLocaleUpperCase()}?`
	return greetingMessage
}

const getCustomText = () => {
	let element = document.querySelector('#customText')
	if (!element.value) return false
	let customMessage = element.value
	return customMessage
}

const buildingPresentationMessage= () => {
	let element = document.querySelector('#companyPresentation')
	if (!element.value) return false
	let greetingMessage = `Oi, ${DATE.getHours() > 12 ? 'boa tarde' : 'bom dia'}, me chamo ${element.value}, falo da Publisoft Sistemas, tudo bem?
	%0A%0A
	Trabalhamos com um sistema especializado no seguimento de alimentação, e eu gostaria de uma oportunidade de te apresentar nossa solução.
	%0A%0A
	Você teria interesse?`

	return greetingMessage
}

const messageText = (element) => {

	let elements = []
	elements = document.querySelectorAll('.hiddable-div')
	elements.forEach(divElement => {
		divElement.classList.add('hidden')
		divElement.children[divElement.children.length - 1].value = ''
	})

	switch (element.value) {
		case 'greetingText':
			document.querySelector('.div-workplace-name').classList.remove('hidden')
			break
		case 'customText':
			document.querySelector('.div-custom-text').classList.remove('hidden')
			break
		case 'companyPresentation':
			document.querySelector('.div-company-presentation').classList.remove('hidden')
			break
		default:
			return false
	}
}

const clearAllTextInputs = () => {
	if(document.querySelector('#optionSelect').value == 'companyPresentation'){
		document.querySelector('.phone-number-input').value = ''
		return false
	}
	let inputs = []
	inputs = document.querySelectorAll("input[type=text]")
	inputs.forEach(input => input.value = '')
	document.querySelector('.ddd-input').value = '44'
}