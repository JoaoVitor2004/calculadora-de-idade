const txtDia = document.querySelector('#dia')
const txtMes = document.querySelector('#mes')
const txtAno = document.querySelector('#ano')
const botao = document.querySelector('#btn')
const label1 = document.getElementById('etiqueta1')
const label2 = document.getElementById('etiqueta2')
const label3 = document.getElementById('etiqueta3')
const erro1 = document.querySelector('#erro1')
const erro2 = document.querySelector('#erro2')
const erro3 = document.querySelector('#erro3')

const data = new Date()
const dia = data.getDate()
const mes = data.getMonth() + 1
const ano = data.getFullYear()

botao.addEventListener('click', function() {

    if (txtDia.value <= 0 || txtDia.value > 31 || txtMes.value <= 0 || txtMes.value > 12 || txtAno.value <= 0 || txtAno.value > ano ) {

        const etiquetas = [label1, label2, label3].forEach((etiqueta) => {
            etiqueta.style.color = 'red'
        })
        const erros = [erro1, erro2, erro3].forEach((erros) => {
            erros.classList.toggle('hide')
            erros.style.color = 'red'
        })
        
    } else {

        const etiquetas = [label1, label2, label3].forEach((etiqueta) => {
            etiqueta.style.color = 'black'
        })
        const erros = [erro1, erro2, erro3].forEach((erros) => {
            erros.classList.add('hide')
        })
        let converterDia = Number(txtDia.value)
        let converterMes = Number(txtMes.value)
        let converterAno = Number(txtAno.value)
        const res1 = document.querySelector('#res1')
        const res2 = document.querySelector('#res2')
        const res3 = document.querySelector('#res3')

        const subtrairAno = ano - converterAno
        const subtrairMes = converterMes - mes
        const subtrairDia = converterDia - dia

        res1.innerHTML = subtrairAno
        res2.innerHTML = subtrairMes
        res3.innerHTML = subtrairDia

    }

})