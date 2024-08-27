"use strict";
const txtDia = document.querySelector('#dia');
const txtMes = document.querySelector('#mes');
const txtAno = document.querySelector('#ano');
const botao = document.querySelector('#btn');
const colorErro = 'red';
const classHide = 'hide';
const labels = [
    document.getElementById('etiqueta1'),
    document.getElementById('etiqueta2'),
    document.getElementById('etiqueta3')
];
const erros = [
    document.querySelector('#erro1'),
    document.querySelector('#erro2'),
    document.querySelector('#erro3')
];
function exibirErro() {
    if (labels)
        labels.forEach((label) => label === null || label === void 0 ? void 0 : label.style.color = 'red');
    if (erros)
        erros.forEach((erro) => erro === null || erro === void 0 ? void 0 : erro.classList.remove('hide'));
}
function limparErro() {
    if (labels)
        labels.forEach((label) => label === null || label === void 0 ? void 0 : label.style.color = 'black');
    if (erros)
        erros.forEach((erro) => erro === null || erro === void 0 ? void 0 : erro.classList.add('hide'));
}
const data = new Date();
const diaAtual = data.getDate();
const mesAtual = data.getMonth() + 1;
const anoAtual = data.getFullYear();
botao === null || botao === void 0 ? void 0 : botao.addEventListener('click', () => {
    if (((txtDia === null || txtDia === void 0 ? void 0 : txtDia.value) <= 0 || (txtDia === null || txtDia === void 0 ? void 0 : txtDia.value) > 31) || ((txtMes === null || txtMes === void 0 ? void 0 : txtMes.value) <= 0 || (txtMes === null || txtMes === void 0 ? void 0 : txtMes.value) > 12) || ((txtAno === null || txtAno === void 0 ? void 0 : txtAno.value) <= 0 || (txtAno === null || txtAno === void 0 ? void 0 : txtAno.value) > anoAtual)) {
        exibirErro();
    }
    else {
        limparErro();
        const res1 = document.querySelector('#res1');
        const res2 = document.querySelector('#res2');
        const res3 = document.querySelector('#res3');
        const subtrairAno = anoAtual - Number(txtAno === null || txtAno === void 0 ? void 0 : txtAno.value);
        const subtrairMes = Number(txtMes === null || txtMes === void 0 ? void 0 : txtMes.value) - mesAtual;
        const subtrairDia = diaAtual - Number(txtDia === null || txtDia === void 0 ? void 0 : txtDia.value);
        if (res1)
            res1.innerHTML = subtrairAno.toString();
        if (res2)
            res2.innerHTML = subtrairMes.toString();
        if (res3)
            res3.innerHTML = subtrairDia.toString();
    }
});
