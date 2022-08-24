let number = null

const getNumber = (element) => {
number = element.value
document.querySelector('#sendMessage').href=`https://wa.me/55${number}/`
}