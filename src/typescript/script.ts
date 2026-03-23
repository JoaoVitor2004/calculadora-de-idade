const txtDia = document.querySelector('#dia') as HTMLInputElement
const txtMes = document.querySelector('#mes') as HTMLInputElement
const txtAno = document.querySelector('#ano') as HTMLInputElement
const botao = document.querySelector('#btn')

const labels = document.querySelectorAll(".etiqueta") as NodeListOf<HTMLLabelElement>
const errors = document.querySelectorAll(".erro") as NodeListOf<HTMLSpanElement>

const colorErro: string = 'red'
const classHide: string = 'hide'

function exibirErro(): void {
    if (labels) labels.forEach((label) => label.style.color = 'red')
    if (errors) errors.forEach((erro) => erro?.classList.remove('hide'))
}

function limparErro(): void {
    if (labels) labels.forEach((label) => label.style.color = 'black')
    if (errors) errors.forEach((erro) => erro?.classList.add('hide'))
}

const data = new Date()
const diaAtual = data.getDate()
const mesAtual = data.getMonth() + 1
const anoAtual = data.getFullYear()

botao?.addEventListener('click', () => {

    if ((Number(txtDia?.value) <= 0 || Number(txtDia?.value) > 31) || (Number(txtMes?.value) <= 0 || Number(txtMes?.value) > 12) || (Number(txtAno?.value) <= 0 || Number(txtAno?.value) > anoAtual)) {
        exibirErro()
    } else {

        limparErro()

        const datas = document.querySelectorAll(".data") as NodeListOf<HTMLSpanElement>

        if (datas) {
            const subtrairAno = anoAtual - Number(txtAno?.value)
            const realYear = mesAtual < Number(txtMes.value) ? subtrairAno - 1 : subtrairAno
            const subtrairMes =  mesAtual - Number(txtMes?.value)
            const subtrairDia = diaAtual - Number(txtDia?.value)

            datas.forEach((data, index) => {

                if (index === 0) {
                    data.innerHTML = String(realYear)
                }

                if (index === 1) {
                    data.innerHTML = String(subtrairMes)
                }

                if (index === 2) {
                    data.innerHTML = String(subtrairDia)
                }
            })
        }
    }

})