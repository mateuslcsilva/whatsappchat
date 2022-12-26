const updateHref  = (phoneNumber) => {
	document.querySelector('#sendMessage').href=`https://wa.me/${phoneNumber}/`
}

const getNumber = (element) => {
	let phoneNumber = `55${element.value.replace(/[^0-9]/g, '')}`
	updateHref(phoneNumber)

	if(element.value.replace(/[^0-9]/g, '').length != 11){
	document.querySelector('#sendMessage').classList.add('disabled')
	element.style.borderColor = 'red'
	document.querySelector('.alert-invalid-phone-number').style.display = 'block'
	} else{
	document.querySelector('#sendMessage').classList.remove('disabled')
	element.style.borderColor = '#191919'
	document.querySelector('.alert-invalid-phone-number').style.display = 'none'
	}
}