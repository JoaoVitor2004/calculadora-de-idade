"use strict";
const txtDia = document.querySelector('#dia');
const txtMes = document.querySelector('#mes');
const txtAno = document.querySelector('#ano');
const botao = document.querySelector('#btn');
const labels = document.querySelectorAll(".etiqueta");
const errors = document.querySelectorAll(".erro");
const colorErro = 'red';
const classHide = 'hide';
function exibirErro() {
    if (labels)
        labels.forEach((label) => label.style.color = 'red');
    if (errors)
        errors.forEach((erro) => erro === null || erro === void 0 ? void 0 : erro.classList.remove('hide'));
}
function limparErro() {
    if (labels)
        labels.forEach((label) => label.style.color = 'black');
    if (errors)
        errors.forEach((erro) => erro === null || erro === void 0 ? void 0 : erro.classList.add('hide'));
}
const data = new Date();
const diaAtual = data.getDate();
const mesAtual = data.getMonth() + 1;
const anoAtual = data.getFullYear();
botao === null || botao === void 0 ? void 0 : botao.addEventListener('click', () => {
    if ((Number(txtDia === null || txtDia === void 0 ? void 0 : txtDia.value) <= 0 || Number(txtDia === null || txtDia === void 0 ? void 0 : txtDia.value) > 31) || (Number(txtMes === null || txtMes === void 0 ? void 0 : txtMes.value) <= 0 || Number(txtMes === null || txtMes === void 0 ? void 0 : txtMes.value) > 12) || (Number(txtAno === null || txtAno === void 0 ? void 0 : txtAno.value) <= 0 || Number(txtAno === null || txtAno === void 0 ? void 0 : txtAno.value) > anoAtual)) {
        exibirErro();
    }
    else {
        limparErro();
        const datas = document.querySelectorAll(".data");
        if (datas) {
            const subtrairAno = anoAtual - Number(txtAno === null || txtAno === void 0 ? void 0 : txtAno.value);
            const realYear = mesAtual < Number(txtMes.value) ? subtrairAno - 1 : subtrairAno;
            const subtrairMes = mesAtual - Number(txtMes === null || txtMes === void 0 ? void 0 : txtMes.value);
            const subtrairDia = diaAtual - Number(txtDia === null || txtDia === void 0 ? void 0 : txtDia.value);
            datas.forEach((data, index) => {
                if (index === 0) {
                    data.innerHTML = String(realYear);
                }
                if (index === 1) {
                    data.innerHTML = String(subtrairMes);
                }
                if (index === 2) {
                    data.innerHTML = String(subtrairDia);
                }
            });
        }
    }
});
