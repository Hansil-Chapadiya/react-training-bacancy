document.addEventListener('DOMContentLoaded', () => { // Because DOM is not ready that's why

    const body = document.body;
    const div = document.createElement('div');
    body.appendChild(div);


    const form = document.createElement('form');

    form.style.display = 'flex';
    form.style.flexDirection = 'column';


    const labelName = document.createElement('label');
    const labelPass = document.createElement('label');

    labelPass.innerText = "Enter Password: ";
    labelName.innerText = "Enter name: ";


    const inputTypeText = document.createElement('input');
    inputTypeText.setAttribute('type', 'text');

    const inputTypePass = document.createElement('input');
    inputTypePass.setAttribute('type', 'password');

    const submit = document.createElement('button');
    submit.innerText = "Submit";

    form.appendChild(labelName);
    form.appendChild(labelPass);
    form.appendChild(inputTypeText);
    form.appendChild(inputTypePass);
    form.appendChild(submit);

    div.append(form);


})
