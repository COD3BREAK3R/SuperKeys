const opcionesLicencia = document.querySelectorAll(
  ".usuario__OpcionTipoLicencia"
);

/*=============================================
=           MARK:Cambiar Color Input          =
=============================================*/

function cambiarFondoInputRadio(event) {
  const radioButton = event.currentTarget.querySelector('input[type="radio"]');

  if (radioButton) {
    if (event.target !== radioButton) {
      radioButton.checked = true;

      radioButton.dispatchEvent(new Event("change"));
    }
  }

  opcionesLicencia.forEach((opcion) => {
    opcion.classList.remove("usuario__OpcionTipoLicencia--active");
  });

  event.currentTarget.classList.add("usuario__OpcionTipoLicencia--active");
}

/*============  End of Cambiar Color Input  =============*/

opcionesLicencia.forEach((element) => {
  const radioButton = element.querySelector('input[type="radio"]');
  radioButton.addEventListener("change", cambiarFondoInputRadio);
});

opcionesLicencia.forEach((element) => {
  element.addEventListener("click", cambiarFondoInputRadio);
});
