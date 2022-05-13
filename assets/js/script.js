const button = document.getElementById('converter-button')
const select = document.getElementById('select-currency')
const bolivianoDaBolívia = 0.75
const lekAlbanes = 0.045
const dinarKuwaitiano = 16.75
const pesoArgentino = 0.044
const dramArmenio = 0.011
const dolarAustraliano = 3.52
const manatAzeri = 3.03
const rublo = 0.079
const dolarBermudense = 5.14
const marco = 2.74
const levBúlgaro = 0.42
const dolarCanadense = 3.94
const pesoChileno = 0.0059
const yuanChines = 0.76
const pesoColombiano = 0.0012
const colonCostarriquenho = 0.0077 
const kunaCroata = 0.71
const coroaTcheca = 0.21
const coroaDinamarquesa = 0.72
const pesoDominicano = 0.093
const libraEgipcia = 0.28
const lariGeorgiano = 1.69
const quetzalGuatemalteco = 0.67
const lempiraHondurenha = 0.21
const dolarDeHongKong = 0.65
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

    if (select.value === 'Boliviano da Bolívia') {
        convertingValueText.innerHTML = new Intl.NumberFormat('es-BO', {
            style: 'currency',
            currency: 'BOB',
        }).format(inputValue * bolivianoDaBolívia).fixed(2)
    }

    if (select.value === 'Lek albanês') {
        convertingValueText.innerHTML = new Intl.NumberFormat('sq-AL', {
            style: 'currency',
            currency: 'ALL',
        }).format(inputValue / lekAlbanes).fixed(2)
    }

    if (select.value === 'Dinar kuwaitiano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('ar-DZ', {
            style: 'currency',
            currency: 'DZD',
        }).format(inputValue / dinarKuwaitiano).fixed(2)
    }

    if (select.value === 'Peso argentino') {
        convertingValueText.innerHTML = new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
        }).format(inputValue / pesoArgentino).fixed(2)
    }

    if (select.value === 'Dram armênio') {
        convertingValueText.innerHTML = new Intl.NumberFormat('hy-AM', {
            style: 'currency',
            currency: 'AMD',
        }).format(inputValue / dramArmenio).fixed(2)
    }

    if (select.value === 'Dólar australiano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('en-AU', {
            style: 'currency',
            currency: 'AUD',
        }).format(inputValue / dolarAustraliano).fixed(2)
    }

    if (select.value === 'Manat azeri') {
        convertingValueText.innerHTML = new Intl.NumberFormat('az-AZ', {
            style: 'currency',
            currency: 'AZN',
        }).format(inputValue / manatAzeri).fixed(2)
    }

    if (select.value === 'Rublo russo') {
        convertingValueText.innerHTML = new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
        }).format(inputValue / rublo).fixed(2)
    }

    if (select.value === 'Dólar bermudense') {
        convertingValueText.innerHTML = new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
        }).format(inputValue / dolarBermudense).fixed(2)
    }

    if (select.value === 'Marco') {
        convertingValueText.innerHTML = new Intl.NumberFormat('bs-BA', {
            style: 'currency',
            currency: 'BAM',
        }).format(inputValue / marco).fixed(2)
    }

    if (select.value === 'Lev búlgaro') {
        convertingValueText.innerHTML = new Intl.NumberFormat('bg-BG', {
            style: 'currency',
            currency: 'BGN',
        }).format(inputValue / levBúlgaro).fixed(2)
    }

    if (select.value === 'Dólar canadense') {
        convertingValueText.innerHTML = new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'CAD',
        }).format(inputValue / dolarCanadense).fixed(2)
    }

    if (select.value === 'Peso chileno') {
        convertingValueText.innerHTML = new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'CAD',
        }).format(inputValue / pesoChileno).fixed(2)
    }

    if (select.value === 'Yuan chinês') {
        convertingValueText.innerHTML = new Intl.NumberFormat('zh-CN', {
            style: 'currency',
            currency: 'CNY',
        }).format(inputValue / yuanChines).fixed(2)
    }

    if (select.value === 'Peso colombiano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
        }).format(inputValue / pesoColombiano).fixed(2)
    }

    if (select.value === 'Colón costarriquenho') {
        convertingValueText.innerHTML = new Intl.NumberFormat('es-CR', {
            style: 'currency',
            currency: 'CRC',
        }).format(inputValue / colonCostarriquenho).fixed(2)
    }

    if (select.value === 'Kuna croata') {
        convertingValueText.innerHTML = new Intl.NumberFormat('hr-HR', {
            style: 'currency',
            currency: 'HRK',
        }).format(inputValue / kunaCroata).fixed(2)
    }

    if (select.value === 'Coroa tcheca') {
        convertingValueText.innerHTML = new Intl.NumberFormat('cs-CZ', {
            style: 'currency',
            currency: 'CZK',
        }).format(inputValue / coroaTcheca).fixed(2)
    }

    if (select.value === 'Coroa dinamarquesa') {
        convertingValueText.innerHTML = new Intl.NumberFormat('da-DK', {
            style: 'currency',
            currency: 'DKK',
        }).format(inputValue / coroaDinamarquesa).fixed(2)
    }

    if (select.value === 'Peso dominicano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('es-DO', {
            style: 'currency',
            currency: 'DOP',
        }).format(inputValue / pesoDominicano).fixed(2)
    }

    if (select.value === 'Libra egípcia') {
        convertingValueText.innerHTML = new Intl.NumberFormat('ar-EG', {
            style: 'currency',
            currency: 'EGP',
        }).format(inputValue / libraEgipcia).fixed(2)
    }

    if (select.value === 'Lari georgiano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('ka-GE', {
            style: 'currency',
            currency: 'GEL',
        }).format(inputValue / lariGeorgiano).fixed(2)
    }

    if (select.value === 'Quetzal guatemalteco') {
        convertingValueText.innerHTML = new Intl.NumberFormat('es-GT', {
            style: 'currency',
            currency: 'GTQ',
        }).format(inputValue / quetzalGuatemalteco).fixed(2)
    }

    if (select.value === 'Lempira hondurenha') {
        convertingValueText.innerHTML = new Intl.NumberFormat('es-HN', {
            style: 'currency',
            currency: 'HNL',
        }).format(inputValue / lempiraHondurenha).fixed(2)
    }

    if (select.value === 'Dólar de Hong Kong') {
        convertingValueText.innerHTML = new Intl.NumberFormat('zh-HK', {
            style: 'currency',
            currency: 'HKD',
        }).format(inputValue / dolarDeHongKong).fixed(2)
    }

    if (select.value === 'Dólar Americano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputValue / dolar).fixed(2)
    }

    if (select.value === 'Euro') {
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

    if (select.value === 'Boliviano da Bolívia') {
        currencyName.innerHTML = 'Boliviano da Bolívia'
        currencyImg.src = './assets/img/icons8-bolívia-48.png'
    }

    if (select.value === 'Lek albanês') {
        currencyName.innerHTML = 'Lek albanês'
        currencyImg.src = './assets/img/albania.png'
    }

    if (select.value === 'Dinar kuwaitiano') {
        currencyName.innerHTML = 'Dinar kuwaitiano'
        currencyImg.src = './assets/img/icons8-dinar-64.png'
    }

    if (select.value === 'Peso argentino') {
        currencyName.innerHTML = 'Peso argentino'
        currencyImg.src = './assets/img/icons8-argentina-48.png'
    }

    if (select.value === 'Dram armênio') {
        currencyName.innerHTML = 'Dram armênio'
        currencyImg.src = './assets/img/icons8-armênia-48.png'
    }

    if (select.value === 'Dólar australiano') {
        currencyName.innerHTML = 'Dólar australiano'
        currencyImg.src = './assets/img/icons8-australia-48.png'
    }

    if (select.value === 'Manat azeri') {
        currencyName.innerHTML = 'Manat azeri'
        currencyImg.src = './assets/img/icons8-azerbaijão-48.png'
    }

    if (select.value === 'Rublo russo') {
        currencyName.innerHTML = 'Rublo russo'
        currencyImg.src = './assets/img/icons8-federação-russa-48.png'
    }

    if (select.value === 'Dólar bermudense') {
        currencyName.innerHTML = 'Dólar bermudense'
        currencyImg.src = './assets/img/bermuda.png'
    }

    if (select.value === 'Marco') {
        currencyName.innerHTML = 'Marco'
        currencyImg.src = './assets/img/icons8-bósnia-e-herzegovina-48.png'
    }

    if (select.value === 'Lev búlgaro') {
        currencyName.innerHTML = 'Lev búlgaro'
        currencyImg.src = './assets/img/icons8-bulgária-48.png'
    }

    if (select.value === 'Dólar canadense') {
        currencyName.innerHTML = 'Dólar canadense'
        currencyImg.src = './assets/img/icons8-canadá-48.png'
    }

    if (select.value === 'Peso chileno') {
        currencyName.innerHTML = 'Peso chileno'
        currencyImg.src = './assets/img/icons8-chile-48.png'
    }

    if (select.value === 'Yuan chinês') {
        currencyName.innerHTML = 'Yuan chinês'
        currencyImg.src = './assets/img/icons8-china-48.png'
    }

    if (select.value === 'Peso colombiano') {
        currencyName.innerHTML = 'Peso colombiano'
        currencyImg.src = './assets/img/icons8-colombia-48.png'
    }

    if (select.value === 'Colón costarriquenho') {
        currencyName.innerHTML = 'Colón costarriquenho'
        currencyImg.src = './assets/img/icons8-costa-rica-48.png'
    }

    if (select.value === 'Kuna croata') {
        currencyName.innerHTML = 'Kuna croata'
        currencyImg.src = './assets/img/icons8-croácia-48.png'
    }

    if (select.value === 'Coroa tcheca') {
        currencyName.innerHTML = 'Coroa tcheca'
        currencyImg.src = './assets/img/icons8-república-tcheca-48.png'
    }

    if (select.value === 'Coroa dinamarquesa') {
        currencyName.innerHTML = 'Coroa dinamarquesa'
        currencyImg.src = './assets/img/icons8-dinamarca-48.png'
    }

    if (select.value === 'Peso dominicano') {
        currencyName.innerHTML = 'Peso dominicano'
        currencyImg.src = './assets/img/icons8-república-dominicana-48.png'
    }

    if (select.value === 'Libra egípcia') {
        currencyName.innerHTML = 'Libra egípcia'
        currencyImg.src = './assets/img/icons8-egito-48.png'
    }

    if (select.value === 'Lari georgiano') {
        currencyName.innerHTML = 'Lari georgiano'
        currencyImg.src = './assets/img/icons8-georgia-circular-48.png'
    }

    if (select.value === 'Lempira hondurenha') {
        currencyName.innerHTML = 'Lempira hondurenha'
        currencyImg.src = './assets/img/icons8-honduras-48.png'
    }

    if (select.value === 'Dólar de Hong Kong') {
        currencyName.innerHTML = 'Dólar de Hong Kong'
        currencyImg.src = './assets/img/icons8-hongkong-48.png'
    }

    if (select.value === 'Dólar Americano') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = './assets/img/dolar us.png'
    }

    if (select.value === 'Euro') {
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