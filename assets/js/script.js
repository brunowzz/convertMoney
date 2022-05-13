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
const florimHungaro = 0.014
const coroaIslandesa = 0.038
const rupiaIndiana = 0.066
const rupiaIndonesia = 0.00035
const dinarIraquiano = 0.0035
const novoShekelIsraelense = 1.49
const dolarJamaicano = 0.033
const ieneJapones = 0.039
const dinarJordaniano = 7.20
const tengeCazaque = 0.012
const xelimQueniano = 0.044
const wonSulCoreano = 0.0040
const somQuirguiz = 0.061
const libraLibanesa = 0.0033
const dinarLíbio = 1.05
const francoSuico = 5.08
const pataca = 0.63
const ariaryMalgaxe = 0.0013
const kwachaMalauiana = 0.0062
const ringgitMalaio = 1.16
const rupiaMaldivia = 0.33
const ouguiyaMauritana = 0.14
const rupiaMauriciana = 0.12
const pesoMexicano = 0.25
const leuMoldavio = 0.27
const dirhamMarroquino = 0.50
const meticalMocambicano = 0.079
const dolarNamibiano = 0.31
const quiate = 0.0027
const dolarNeolandes = 3.18
const cordobaNicaraguense = 0.14
const nairaNigeriana = 0.012
const dinarMacedonico = 0.085
const coroaNorueguesa = 0.52
const rialOmanense = 13.11
const rupiaPasquitanesa = 0.026
const balboaPanamenho = 5.06
const kinaPapuasia = 1.44
const guaraniParaguaio = 0.00074
const novoSolPeruano = 1.34
const pesoFilipino = 0.097
const zlotyPolones = 1.12
const rialCatariano = 1.39
const leuRomeno = 1.06
const francoRuandes = 0.0050
const dolarDoCaribeOriental = 1.87
const riyalSaudita = 1.35
const francoCfaOcidental = 0.0081
const dinarServio = 0.045
const dolarSingarupiano = 3.63
const rupiaCingalesa = 0.014
const lilangeniSuazi = 0.31
const coroaSueca = 0.50
const novoDolarTaiwanes = 0.17
const somoni = 0.40
const xelimTanzaniano = 0.0022
const bahtTailandes = 0.15
const dolarDeTrinidadETobago = 0.75
const dinarTunisiano = 1.63
const liraTurca = 0.33
const manatTurcomano = 1.45
const xelimUngandes = 0.0014
const khryvniaUcraniano = 0.17
const dirhamDosEmiradosArabesUnidos = 1.37
const libraEsterlina = 6.18
const pesoUruguaio = 0.12
const somUzbeque = 0.00045
const bolivarVenezuelano = 0.000010717755
const dongVietnamita = 0.00022
const kwachaZambiano = 0.30
const dolarZimbabuano = 0.013966894
const euro = 5.40
const dolar = 5.14
const bitcoin = 148088

convertValues = () => {
    const inputValue = document.getElementById('input-conversion-value').value
    const realValueText = document.getElementById('real-value-text')
    const convertingValueText = document.getElementById('after-converting')

    realValueText.innerHTML = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputValue)

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

    if (select.value === 'Florim húngaro') {
        convertingValueText.innerHTML = new Intl.NumberFormat('hu-HU', {
            style: 'currency',
            currency: 'HUF',
        }).format(inputValue / florimHungaro).fixed(2)
    }

    if (select.value === 'Dólar de Hong Kong') {
        convertingValueText.innerHTML = new Intl.NumberFormat('zh-HK', {
            style: 'currency',
            currency: 'HKD',
        }).format(inputValue / dolarDeHongKong).fixed(2)
    }

    if (select.value === 'Coroa islandesa') {
        convertingValueText.innerHTML = new Intl.NumberFormat('is-IS', {
            style: 'currency',
            currency: 'ISK',
        }).format(inputValue / coroaIslandesa).fixed(2)
    }

    if (select.value === 'Rupia indiana') {
        convertingValueText.innerHTML = new Intl.NumberFormat('kn-IN', {
            style: 'currency',
            currency: 'INR',
        }).format(inputValue / rupiaIndiana).fixed(2)
    }

    if (select.value === 'Rupia indonésia') {
        convertingValueText.innerHTML = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(inputValue / rupiaIndonesia).fixed(2)
    }

    if (select.value === 'Dinar iraquiano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'IQD',
        }).format(inputValue / dinarIraquiano).fixed(2)
    }

    if (select.value === 'Novo shekel israelense') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'ILS',
        }).format(inputValue / novoShekelIsraelense).fixed(2)
    }

    if (select.value === 'Dólar jamaicano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('en-JM', {
            style: 'currency',
            currency: 'JMD',
        }).format(inputValue / dolarJamaicano).fixed(2)
    }

    if (select.value === 'Dinar jordaniano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('ar-JO', {
            style: 'currency',
            currency: 'JOD',
        }).format(inputValue / dinarJordaniano).fixed(2)
    }

    if (select.value === 'Tenge cazaque') {
        convertingValueText.innerHTML = new Intl.NumberFormat('kk-KZ', {
            style: 'currency',
            currency: 'KZT',
        }).format(inputValue / tengeCazaque).fixed(2)
    }

    if (select.value === 'Xelim queniano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('sw-KE', {
            style: 'currency',
            currency: 'KES',
        }).format(inputValue / xelimQueniano).fixed(2)
    }

    if (select.value === 'Won sul-coreano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('ko-KR', {
            style: 'currency',
            currency: 'KRW',
        }).format(inputValue / wonSulCoreano).fixed(2)
    }

    if (select.value === 'Som quirguiz') {
        convertingValueText.innerHTML = new Intl.NumberFormat('ky-KG', {
            style: 'currency',
            currency: 'KGS',
        }).format(inputValue / somQuirguiz).fixed(2)
    }

    if (select.value === 'Dinar líbio') {
        convertingValueText.innerHTML = new Intl.NumberFormat('ar-LY', {
            style: 'currency',
            currency: 'LYD',
        }).format(inputValue / dinarLíbio).fixed(2)
    }

    if (select.value === 'Franco Suíço') {
        convertingValueText.innerHTML = new Intl.NumberFormat('de-LI', {
            style: 'currency',
            currency: 'CHF',
        }).format(inputValue / francoSuico).fixed(2)
    }

    if (select.value === 'Pataca') {
        convertingValueText.innerHTML = new Intl.NumberFormat('zh-MO', {
            style: 'currency',
            currency: 'MOP',
        }).format(inputValue / pataca).fixed(2)
    }

    if (select.value === 'Ariary malgaxe') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'MGA',
        }).format(inputValue / ariaryMalgaxe).fixed(2)
    }

    if (select.value === 'Kwacha malauiana') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'MWK',
        }).format(inputValue / kwachaMalauiana).fixed(2)
    }

    if (select.value === 'Ringgit malaio') {
        convertingValueText.innerHTML = new Intl.NumberFormat('ms-MY', {
            style: 'currency',
            currency: 'MYR',
        }).format(inputValue / ringgitMalaio).fixed(2)
    }

    if (select.value === 'Rupia maldívia') {
        convertingValueText.innerHTML = new Intl.NumberFormat('dv-MV', {
            style: 'currency',
            currency: 'MVR',
        }).format(inputValue / ringgitMalaio).fixed(2)
    }

    if (select.value === 'Ouguiya mauritana') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'MRU',
        }).format(inputValue / ouguiyaMauritana).fixed(2)
    }

    if (select.value === 'Rupia Mauriciana') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'MUR',
        }).format(inputValue / rupiaMauriciana).fixed(2)
    }

    if (select.value === 'Peso mexicano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN',
        }).format(inputValue / pesoMexicano).fixed(2)
    }

    if (select.value === 'Leu moldávio') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'MDL',
        }).format(inputValue / leuMoldavio).fixed(2)
    }

    if (select.value === 'Dirham marroquino') {
        convertingValueText.innerHTML = new Intl.NumberFormat('ar-MA', {
            style: 'currency',
            currency: 'MAD',
        }).format(inputValue / dirhamMarroquino).fixed(2)
    }

    if (select.value === 'Metical moçambicano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'MZN',
        }).format(inputValue / meticalMocambicano).fixed(2)
    }

    if (select.value === 'Quiate') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'MMK',
        }).format(inputValue / quiate).fixed(2)
    }

    if (select.value === 'Dólar namibiano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'NAD',
        }).format(inputValue / dolarNamibiano).fixed(2)
    }

    if (select.value === 'Dólar neozelandês') {
        convertingValueText.innerHTML = new Intl.NumberFormat('en-NZ', {
            style: 'currency',
            currency: 'NZD',
        }).format(inputValue / dolarNeolandes).fixed(2)
    }

    if (select.value === 'Córdoba nicaraguense') {
        convertingValueText.innerHTML = new Intl.NumberFormat('es-NI', {
            style: 'currency',
            currency: 'NIO',
        }).format(inputValue / cordobaNicaraguense).fixed(2)
    }

    if (select.value === 'Naira nigeriana') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'NGN',
        }).format(inputValue / nairaNigeriana).fixed(2)
    }

    if (select.value === 'Dinar macedônio') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'MKD',
        }).format(inputValue / dinarMacedonico).fixed(2)
    }

    if (select.value === 'Coroa norueguesa') {
        convertingValueText.innerHTML = new Intl.NumberFormat('nb-NO', {
            style: 'currency',
            currency: 'NOK',
        }).format(inputValue / coroaNorueguesa).fixed(2)
    }

    if (select.value === 'Rial omanense') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'OMR',
        }).format(inputValue / rialOmanense).fixed(2)
    }

    if (select.value === 'Rúpia Paquistanesa') {
        convertingValueText.innerHTML = new Intl.NumberFormat('ur-PK', {
            style: 'currency',
            currency: 'PKR',
        }).format(inputValue / rupiaPasquitanesa).fixed(2)
    }

    if (select.value === 'Balboa panamenho') {
        convertingValueText.innerHTML = new Intl.NumberFormat('es-PA', {
            style: 'currency',
            currency: 'PAB',
        }).format(inputValue / balboaPanamenho).fixed(2)
    }

    if (select.value === 'Kina papuásia') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'PGK',
        }).format(inputValue / kinaPapuasia).fixed(2)
    }

    if (select.value === 'Guarani paraguaio') {
        convertingValueText.innerHTML = new Intl.NumberFormat('es-PY', {
            style: 'currency',
            currency: 'PYG',
        }).format(inputValue / guaraniParaguaio).fixed(2)
    }

    if (select.value === 'Novo sol peruano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('qu-PE', {
            style: 'currency',
            currency: 'PEN',
        }).format(inputValue / novoSolPeruano).fixed(2)
    }

    if (select.value === 'Peso filipino') {
        convertingValueText.innerHTML = new Intl.NumberFormat('tl-PH', {
            style: 'currency',
            currency: 'PHP',
        }).format(inputValue / pesoFilipino).fixed(2)
    }

    if (select.value === 'Zloty polonês') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pl-PL', {
            style: 'currency',
            currency: 'PLN',
        }).format(inputValue / zlotyPolones).fixed(2)
    }

    if (select.value === 'Rial catariano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'QAR',
        }).format(inputValue / rialCatariano).fixed(2)
    }

    if (select.value === 'Leu romeno') {
        convertingValueText.innerHTML = new Intl.NumberFormat('ro-RO', {
            style: 'currency',
            currency: 'RON',
        }).format(inputValue / leuRomeno).fixed(2)
    }

    if (select.value === 'Franco ruandês') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'RWF',
        }).format(inputValue / francoRuandes).fixed(2)
    }

    if (select.value === 'Dólar do Caribe Oriental') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'XCD',
        }).format(inputValue / dolarDoCaribeOriental).fixed(2)
    }

    if (select.value === 'Riyal saudita') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'SAR',
        }).format(inputValue / riyalSaudita).fixed(2)
    }

    if (select.value === 'Franco CFA ocidental') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'XOF',
        }).format(inputValue / francoCfaOcidental).fixed(2)
    }

    if (select.value === 'Dinar sérvio') {
        convertingValueText.innerHTML = new Intl.NumberFormat('sr-SP', {
            style: 'currency',
            currency: 'RSD',
        }).format(inputValue / dinarServio).fixed(2)
    }

    if (select.value === 'Dólar singapuriano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('zh-SG', {
            style: 'currency',
            currency: 'SGD',
        }).format(inputValue / dolarSingarupiano).fixed(2)
    }

    if (select.value === 'Rupia cingalesa') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'LKR',
        }).format(inputValue / rupiaCingalesa).fixed(2)
    }

    if (select.value === 'Lilangeni suazi') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'SZL',
        }).format(inputValue / lilangeniSuazi).fixed(2)
    }

    if (select.value === 'Coroa sueca') {
        convertingValueText.innerHTML = new Intl.NumberFormat('sv-SE', {
            style: 'currency',
            currency: 'SEK',
        }).format(inputValue / coroaSueca).fixed(2)
    }

    if (select.value === 'Novo dólar taiwanês') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'TWD',
        }).format(inputValue / novoDolarTaiwanes).fixed(2)
    }

    if (select.value === 'Somoni') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'TJS',
        }).format(inputValue / somoni).fixed(2)
    }

    if (select.value === 'Xelim tanzaniano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'TZS',
        }).format(inputValue / xelimTanzaniano).fixed(2)
    }

    if (select.value === 'Baht tailandês') {
        convertingValueText.innerHTML = new Intl.NumberFormat('th-TH', {
            style: 'currency',
            currency: 'THB',
        }).format(inputValue / bahtTailandes).fixed(2)
    }

    if (select.value === 'Dólar de Trinidad e Tobago') {
        convertingValueText.innerHTML = new Intl.NumberFormat('en-TT', {
            style: 'currency',
            currency: 'TTD',
        }).format(inputValue / dolarDeTrinidadETobago).fixed(2)
    }

    if (select.value === 'Dinar tunisiano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'TND',
        }).format(inputValue / dinarTunisiano).fixed(2)
    }

    if (select.value === 'Lira turca') {
        convertingValueText.innerHTML = new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
        }).format(inputValue / liraTurca).fixed(2)
    }

    if (select.value === 'Manat turcomano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'TMT',
        }).format(inputValue / manatTurcomano).fixed(2)
    }

    if (select.value === 'Xelim Ugandês') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'UGX',
        }).format(inputValue / xelimUngandes).fixed(2)
    }

    if (select.value === 'Hryvnia ucraniano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('uk-UA', {
            style: 'currency',
            currency: 'UAH',
        }).format(inputValue / khryvniaUcraniano).fixed(2)
    }

    if (select.value === 'Dirham dos Emirados Árabes Unidos') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'AED',
        }).format(inputValue / dirhamDosEmiradosArabesUnidos).fixed(2)
    }

    if (select.value === 'Libra esterlina') {
        convertingValueText.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
        }).format(inputValue / libraEsterlina).fixed(2)
    }

    if (select.value === 'Peso uruguaio') {
        convertingValueText.innerHTML = new Intl.NumberFormat('es-UY', {
            style: 'currency',
            currency: 'UYU',
        }).format(inputValue / pesoUruguaio).fixed(2)
    }

    if (select.value === 'Som uzbeque') {
        convertingValueText.innerHTML = new Intl.NumberFormat('es-UY', {
            style: 'currency',
            currency: 'UZS',
        }).format(inputValue / somUzbeque).fixed(2)
    }

    if (select.value === 'Bolívar venezuelano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('es-VE', {
            style: 'currency',
            currency: 'VEF',
        }).format(inputValue / bolivarVenezuelano).fixed(2)
    }

    if (select.value === 'Dong vietnamita') {
        convertingValueText.innerHTML = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(inputValue / dongVietnamita).fixed(2)
    }

    if (select.value === 'Kwacha zambiano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'VND',
        }).format(inputValue / kwachaZambiano).fixed(2)
    }

    if (select.value === 'Dólar zimbabuano') {
        convertingValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'ZWD',
        }).format(inputValue / dolarZimbabuano).fixed(2)
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

    if (select.value === 'Florim húngaro') {
        currencyName.innerHTML = 'Florim húngaro'
        currencyImg.src = './assets/img/icons8-hungary-48.png'
    }

    if (select.value === 'Coroa islandesa') {
        currencyName.innerHTML = 'Coroa islandesa'
        currencyImg.src = './assets/img/icons8-islândia-48.png'
    }

    if (select.value === 'Rupia indiana') {
        currencyName.innerHTML = 'Rupia indiana'
        currencyImg.src = './assets/img/icons8-india-48.png'
    }

    if (select.value === 'Rupia indonésia') {
        currencyName.innerHTML = 'Rupia indonésia'
        currencyImg.src = './assets/img/icons8-indonesia-48.png'
    }

    if (select.value === 'Dinar iraquiano') {
        currencyName.innerHTML = 'Dinar iraquiano'
        currencyImg.src = './assets/img/icons8-indonesia-48.png'
    }

    if (select.value === 'Novo shekel israelense') {
        currencyName.innerHTML = 'Novo shekel israelense'
        currencyImg.src = './assets/img/icons8-israel-48.png'
    }

    if (select.value === 'Iene japonês') {
        currencyName.innerHTML = 'Iene japonês'
        currencyImg.src = './assets/img/icons8-japão-48.png'
    }

    if (select.value === 'Dinar jordaniano') {
        currencyName.innerHTML = 'Dinar jordaniano'
        currencyImg.src = './assets/img/icons8-jordan-48.png'
    }

    if (select.value === 'Tenge cazaque') {
        currencyName.innerHTML = 'Tenge cazaque'
        currencyImg.src = './assets/img/icons8-kazakhstan-48.png'
    }

    if (select.value === 'Xelim queniano') {
        currencyName.innerHTML = 'Xelim queniano'
        currencyImg.src = './assets/img/icons8-quênia-48.png'
    }

    if (select.value === 'Won sul-coreano') {
        currencyName.innerHTML = 'Won sul-coreano'
        currencyImg.src = './assets/img/icons8-coreia-do-sul-48.png'
    }

    if (select.value === 'Som quirguiz') {
        currencyName.innerHTML = 'Som quirguiz'
        currencyImg.src = './assets/img/icons8-kyrgyzstan-48.png'
    }

    if (select.value === 'Libra libanesa') {
        currencyName.innerHTML = 'Libra libanesa'
        currencyImg.src = './assets/img/icons8-líbano-48.png'
    }

    if (select.value === 'Dinar líbio') {
        currencyName.innerHTML = 'Dinar líbio'
        currencyImg.src = './assets/img/icons8-libya-48.png'
    }

    if (select.value === 'Franco Suíço') {
        currencyName.innerHTML = 'Franco Suíço'
        currencyImg.src = './assets/img/icons8-switzerland-48.png'
    }

    if (select.value === 'Pataca') {
        currencyName.innerHTML = 'Pataca'
        currencyImg.src = './assets/img/icons8-macao-circular-48.png'
    }

    if (select.value === 'Ariary malgaxe') {
        currencyName.innerHTML = 'Ariary malgaxe'
        currencyImg.src = './assets/img/icons8-madagascar-48.png'
    }

    if (select.value === 'Kwacha malauiana') {
        currencyName.innerHTML = 'Kwacha malauiana'
        currencyImg.src = './assets/img/icons8-madagascar-48.png'
    }

    if (select.value === 'Ringgit malaio') {
        currencyName.innerHTML = 'Ringgit malaio'
        currencyImg.src = './assets/img/icons8-malásia-48.png'
    }

    if (select.value === 'Rupia maldívia') {
        currencyName.innerHTML = 'Rupia maldívia'
        currencyImg.src = './assets/img/icons8-maldives-circular-48.png'
    }

    if (select.value === 'Ouguiya mauritana') {
        currencyName.innerHTML = 'Ouguiya mauritana'
        currencyImg.src = './assets/img/icons8-mauritania-48.png'
    }

    if (select.value === 'Rupia Mauriciana') {
        currencyName.innerHTML = 'Rupia Mauriciana'
        currencyImg.src = './assets/img/icons8-maurícia-48.png'
    }

    if (select.value === 'Peso mexicano') {
        currencyName.innerHTML = 'Peso mexicano'
        currencyImg.src = './assets/img/icons8-mexico-48.png'
    }

    if (select.value === 'Leu moldávio') {
        currencyName.innerHTML = 'Leu moldávio'
        currencyImg.src = './assets/img/icons8-moldova-circular-48.png'
    }

    if (select.value === 'Dirham marroquino') {
        currencyName.innerHTML = 'Dirham marroquino'
        currencyImg.src = './assets/img/icons8-marrocos-48.png'
    }

    if (select.value === 'Metical moçambicano') {
        currencyName.innerHTML = 'Metical moçambicano'
        currencyImg.src = './assets/img/icons8-mozambique-48.png'
    }

    if (select.value === 'Quiate') {
        currencyName.innerHTML = 'Quiate'
        currencyImg.src = './assets/img/icons8-myanmar-48.png'
    }

    if (select.value === 'Dólar namibiano') {
        currencyName.innerHTML = 'Dólar namibiano'
        currencyImg.src = './assets/img/icons8-namibia-48.png'
    }

    if (select.value === 'Dólar neozelandês') {
        currencyName.innerHTML = 'Dólar neozelandês'
        currencyImg.src = './assets/img/icons8-new-zealand-48.png'
    }

    if (select.value === 'Córdoba nicaraguense') {
        currencyName.innerHTML = 'Córdoba nicaraguense'
        currencyImg.src = './assets/img/icons8-nicaragua-circular-48.png'
    }

    if (select.value === 'Naira nigeriana') {
        currencyName.innerHTML = 'Naira nigeriana'
        currencyImg.src = './assets/img/icons8-nigeria-48.png'
    }

    if (select.value === 'Dinar macedônio') {
        currencyName.innerHTML = 'Dinar macedônio'
        currencyImg.src = './assets/img/icons8-macedonia-48.png'
    }

    if (select.value === 'Coroa norueguesa') {
        currencyName.innerHTML = 'Coroa norueguesa'
        currencyImg.src = './assets/img/icons8-norway-48.png'
    }

    if (select.value === 'Rial omanense') {
        currencyName.innerHTML = 'Rial omanense'
        currencyImg.src = './assets/img/icons8-oman-48.png'
    }

    if (select.value === 'Rúpia Paquistanesa') {
        currencyName.innerHTML = 'Rúpia Paquistanesa'
        currencyImg.src = './assets/img/icons8-pakistan-48.png'
    }

    if (select.value === 'Balboa panamenho') {
        currencyName.innerHTML = 'Balboa panamenho'
        currencyImg.src = './assets/img/icons8-panamá-48.png'
    }

    if (select.value === 'Kina papuásia') {
        currencyName.innerHTML = 'Kina papuásia'
        currencyImg.src = './assets/img/icons8-papua-new-guinea-48.png'
    }

    if (select.value === 'Guarani paraguaio') {
        currencyName.innerHTML = 'Guarani paraguaio'
        currencyImg.src = './assets/img/icons8-paraguay-circular-48.png'
    }

    if (select.value === 'Peso filipino') {
        currencyName.innerHTML = 'Peso filipino'
        currencyImg.src = './assets/img/icons8-philippines-48.png'
    }

    if (select.value === 'Zloty polonês') {
        currencyName.innerHTML = 'Zloty polonês'
        currencyImg.src = './assets/img/icons8-polônia-48.png'
    }

    if (select.value === 'Rial catariano') {
        currencyName.innerHTML = 'Rial catariano'
        currencyImg.src = './assets/img/icons8-qatar-48.png'
    }

    if (select.value === 'Leu romeno') {
        currencyName.innerHTML = 'Leu romeno'
        currencyImg.src = './assets/img/icons8-romênia-48.png'
    }

    if (select.value === 'Franco ruandês') {
        currencyName.innerHTML = 'Franco ruandês'
        currencyImg.src = './assets/img/icons8-rwanda-circular-48.png'
    }

    if (select.value === 'Dólar do Caribe Oriental') {
        currencyName.innerHTML = 'Dólar do Caribe Oriental'
        currencyImg.src = './assets/img/icons8-saint-lucia-circular-48.png'
    }

    if (select.value === 'Riyal saudita') {
        currencyName.innerHTML = 'Riyal saudita'
        currencyImg.src = './assets/img/icons8-saudi-arabia-48.png'
    }

    if (select.value === 'Franco CFA ocidental') {
        currencyName.innerHTML = 'Franco CFA ocidental'
        currencyImg.src = './assets/img/icons8-senegal-circular-48.png'
    }

    if (select.value === 'Dinar sérvio') {
        currencyName.innerHTML = 'Dinar sérvio'
        currencyImg.src = './assets/img/icons8-serbia-48.png'
    }

    if (select.value === 'Rupia cingalesa') {
        currencyName.innerHTML = 'Rupia cingalesa'
        currencyImg.src = './assets/img/icons8-sri-lanka-48.png'
    }

    if (select.value === 'Lilangeni suazi') {
        currencyName.innerHTML = 'Lilangeni suazi'
        currencyImg.src = './assets/img/icons8-swaziland-48.png'
    }

    if (select.value === 'Coroa sueca') {
        currencyName.innerHTML = 'Coroa sueca'
        currencyImg.src = './assets/img/icons8-sweden-48.png'
    }

    if (select.value === 'Novo dólar taiwanês') {
        currencyName.innerHTML = 'Novo dólar taiwanês'
        currencyImg.src = './assets/img/icons8-country-64.png'
    }

    if (select.value === 'Somoni') {
        currencyName.innerHTML = 'Somoni'
        currencyImg.src = './assets/img/icons8-tajiquistão-48.png'
    }

    if (select.value === 'Xelim tanzaniano') {
        currencyName.innerHTML = 'Xelim tanzaniano'
        currencyImg.src = './assets/img/icons8-tanzania-48.png'
    }

    if (select.value === 'Baht tailandês') {
        currencyName.innerHTML = 'Baht tailandês'
        currencyImg.src = './assets/img/icons8-thailand-48.png'
    }

    if (select.value === 'Dólar de Trinidad e Tobago') {
        currencyName.innerHTML = 'Dólar de Trinidad e Tobago'
        currencyImg.src = './assets/img/icons8-trinidad-and-tobago-48.png'
    }

    if (select.value === 'Dinar tunisiano') {
        currencyName.innerHTML = 'Dinar tunisiano'
        currencyImg.src = './assets/img/icons8-tunisia-48.png'
    }

    if (select.value === 'Lira turca') {
        currencyName.innerHTML = 'Lira turca'
        currencyImg.src = './assets/img/icons8-turkey-48.png'
    }

    if (select.value === 'Manat turcomano') {
        currencyName.innerHTML = 'Manat turcomano'
        currencyImg.src = './assets/img/icons8-turkmenistan-circular-48.png'
    }

    if (select.value === 'Xelim Ugandês') {
        currencyName.innerHTML = 'Xelim Ugandês'
        currencyImg.src = './assets/img/icons8-uganda-48.png'
    }

    if (select.value === 'Hryvnia ucraniano') {
        currencyName.innerHTML = 'Hryvnia ucraniano'
        currencyImg.src = './assets/img/icons8-ukraine-48.png'
    }

    if (select.value === 'Dirham dos Emirados Árabes Unidos') {
        currencyName.innerHTML = 'Dirham dos Emirados Árabes Unidos'
        currencyImg.src = './assets/img/icons8-united-arab-emirates-48.png'
    }

    if (select.value === 'Libra esterlina') {
        currencyName.innerHTML = 'Libra esterlina'
        currencyImg.src = './assets/img/icons8-england-circular-48.png'
    }

    if (select.value === 'Peso uruguaio') {
        currencyName.innerHTML = 'Peso uruguaio'
        currencyImg.src = './assets/img/icons8-uruguay-48.png'
    }

    if (select.value === 'Som uzbeque') {
        currencyName.innerHTML = 'Som uzbeque'
        currencyImg.src = './assets/img/icons8-uzbekistan-48.png'
    }

    if (select.value === 'Bolívar venezuelano') {
        currencyName.innerHTML = 'Bolívar venezuelano'
        currencyImg.src = './assets/img/icons8-venezuela-48.png'
    }

    if (select.value === 'Dong vietnamita') {
        currencyName.innerHTML = 'Dong vietnamita'
        currencyImg.src = './assets/img/icons8-vietnam-48.png'
    }

    if (select.value === 'Kwacha zambiano') {
        currencyName.innerHTML = 'Kwacha zambiano'
        currencyImg.src = './assets/img/icons8-zambia-circular-48.png'
    }

    if (select.value === 'Dólar zimbabuano') {
        currencyName.innerHTML = 'Dólar zimbabuano'
        currencyImg.src = './assets/img/icons8-zimbabwe-48.png'
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