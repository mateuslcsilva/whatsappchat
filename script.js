const getNumber = (e, element) => {
  document.querySelector(
    "#sendMessage"
  ).href = `https://wa.me/55${element.value}/`;
};
