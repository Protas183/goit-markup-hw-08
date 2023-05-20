const refs = {
    licenseCheckbox: document.querySelector('.check_input'),
    btnCheck: document.querySelector('.btn_form')
};

refs.licenseCheckbox.addEventListener('change', onChecked);

function onChecked(event) {
    console.log(event.currentTarget.checked);
    refs.btnCheck.disabled = !event.currentTarget.checked;
};


refs.btnCheck.addEventListener('click', onClickBtnForm);

function onClickBtnForm(event) {
    console.log("Hello!")
};

