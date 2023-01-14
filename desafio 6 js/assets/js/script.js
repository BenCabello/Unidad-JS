
const arrayDivisas = ["uf", "ivp", "dolar", "dolar_intercambio", "euro", "ipc", "utm", "imacec", "tpm", "libra_cobre", "tasa_desempleo", "bitcoin"]

const selectDivisas = document.getElementById ("selectDivisa")
const textResultado = document.getElementById ("resultado")
const buttonConvert = document.getElementById ("convertirDivisa")
const inputConvertir = document.getElementById("montoConvertir")
const chartContainer = document.getElementById("chartContainer")

function createChart (dataObject){
    chartContainer.innerHTML = '<canvas id="chart"></canvas>'
    canvas = document.getElementById("chart")

    const data = {
        type: "line",
        data: {
            labels: dataObject.dates,
            datasets:[
                {
                    label: 'ultimos 10 dias',
                    data: dataObject.data,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }
            ]
        }
    }

    new Chart (canvas,data)
}

async function convertMoney(){
    try {

        divisa = selectDivisas.value
        result = await fetch (`https://mindicador.cl/api/${divisa}`)
        resultJson = await result.json()
        divisaCLP = resultJson.serie[0].valor
        convertCLP = +inputConvertir.value

        console.log(divisaCLP,convertCLP);

        textResultado.innerText = (convertCLP/divisaCLP).toFixed(2)


        const lastDays = {}

        lastDays.data = resultJson.serie.slice(0,10).map(val => val.valor).reverse()
        lastDays.dates = resultJson.serie.slice(0,10).map(val => dayjs(val.fecha).format('DD-MM-YYYY')).reverse()
        createChart (lastDays)

    } catch (error) {

    }
}

selectHTML = selectDivisas.innerHTML

arrayDivisas.forEach(val=> selectHTML += `
    <option value=${val}>${val}</option>
`)

selectDivisas.innerHTML = selectHTML

buttonConvert.addEventListener('click', convertMoney)