const txtDia = document.querySelector('#dia')
const txtMes = document.querySelector('#mes')
const txtAno = document.querySelector('#ano')
const botao = document.querySelector('#btn')

const colorErro: string = 'red'
const classHide: string = 'hide'

const labels = [
    document.getElementById('etiqueta1') as HTMLElement | null,
    document.getElementById('etiqueta2') as HTMLElement | null,
    document.getElementById('etiqueta3') as HTMLElement | null
]

const erros = [
    document.querySelector('#erro1') as HTMLElement | null,
    document.querySelector('#erro2') as HTMLElement | null,
    document.querySelector('#erro3') as HTMLElement | null
]

function exibirErro():void {
    if (labels) labels.forEach((label) => label?.style.color = 'red')
    if (erros) erros.forEach((erro) => erro?.classList.remove('hide'))
}

function limparErro():void {
    if (labels) labels.forEach((label) => label?.style.color = 'black')
    if (erros) erros.forEach((erro) => erro?.classList.add('hide'))
}

const data = new Date()
const diaAtual = data.getDate()
const mesAtual = data.getMonth() + 1
const anoAtual = data.getFullYear()

botao?.addEventListener('click', () => {

    if ((txtDia?.value <= 0 || txtDia?.value > 31) || (txtMes?.value <= 0 || txtMes?.value > 12) || (txtAno?.value <= 0 || txtAno?.value > anoAtual) ) {
        exibirErro()        
    } else {
        limparErro()
        const res1 = document.querySelector('#res1') as HTMLElement | null
        const res2 = document.querySelector('#res2') as HTMLElement | null
        const res3 = document.querySelector('#res3') as HTMLElement | null

        const subtrairAno = anoAtual - Number(txtAno?.value)
        const subtrairMes = Number(txtMes?.value) - mesAtual
        const subtrairDia = diaAtual - Number(txtDia?.value)

        if (res1) res1.innerHTML = subtrairAno.toString()
        if (res2) res2.innerHTML = subtrairMes.toString()
        if (res3) res3.innerHTML = subtrairDia.toString()
    }

})