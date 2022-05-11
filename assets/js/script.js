const button = document.getElementById('converter-button')
const select = document.getElementById('select-currency')
const euro = 5.40
const dolar = 5.14
const bitcoin = 148088

convertValues = () => {
    const inputValue = document.getElementById('input-conversion-value').value
    const realValueText = document.getElementById('real-value-text')
    const convertingValueText = document.getElementById('after-converting')

    inputValue.innerHTML = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
    }).format(realValueText)

    if (select.value === 'US$ Dólar Americano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputValue / dolar).fixed(2)
    }

    if (select.value === '€ Euro') {
        convertingValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputValue / euro).fixed(2)
    }

    if (select.value === 'Bitcoin') {
        convertingValueText.innerHTML = (inputValue / bitcoin).toFixed(6)
    }


}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = './assets/img/dolar us.png'
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/img/euro.png'
    }

    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/img/btc.png'
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)