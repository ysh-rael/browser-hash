// Informações estáticas do User Agent
const userAgent = navigator.userAgent
const browserName = navigator.appName
const browserVersion = navigator.appVersion
const os = navigator.platform
const deviceType = /Mobile/.test(userAgent) ? 'Mobile' : 'Desktop'
const preferredLanguage = navigator.language

// Informações estáticas sobre o dispositivo
const screenResolution = `${screen.availWidth}x${screen.availHeight}` // resolução da tela
const cpuCores = navigator.hardwareConcurrency // quant. nucleos da cpu
const colorDepth = window.screen.colorDepth // densidade de cores
const pixelDepth = window.screen.pixelDepth // densidade de pixel

// Informações sobre a GPU
const gpuInfo = navigator.gpu ? `${navigator.gpu.deviceName}, ${navigator.gpu.vendorName}` : 'N/A'
const webglVersion = navigator.gpu ? navigator.gpu.webglVersion || 'N/A' : 'N/A'

// Informações do dispositivo móvel
const mobileInfo = {
    model: 'N/A',
    manufacturer: 'N/A',
    os: 'N/A',
    browserVersion: 'N/A',
    screenResolution: 'N/A'
}

if (/Mobile/.test(userAgent)) {
    mobileInfo.model = navigator.platform
    mobileInfo.manufacturer = 'SeuFabricanteAqui' // Substitua pelo fabricante real
    mobileInfo.os = navigator.appVersion
    mobileInfo.browserVersion = 'SeuVersaoAqui' // Substitua pela versão real
    mobileInfo.screenResolution = `${screen.availWidth}x${screen.availHeight}`
}

const htmlVersion = document.doctype ? document.doctype.name : 'Unknown' // Versão do HTML
const userAgentMasked = navigator.userAgent !== userAgent ? 'Masked' : 'Not Masked' // Agente do usuário mascarado ou não
const tlsCompatibility = navigator.userAgent.includes('Chrome') ? 'TLS 1.3' : 'TLS 1.2' // Compatibilidade de TLS/SSL

// Informações do navegador
const supportsWebSockets = 'WebSocket' in window ? 'Supported' : 'Not Supported'
const ecmascriptVersion = (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') ? 'ES6+' : 'ES5'
const supportsServiceWorkers = navigator.onLine ? 'Supported' : 'Not Supported'
const supportsWebWorkers = 'Worker' in window ? 'Supported' : 'Not Supported'
const supportsWebRTC = 'RTCPeerConnection' in window ? 'Supported' : 'Not Supported'
const browserVendor = navigator.vendor // Fabricante do navegador
const browserProduct = navigator.product // Produto do navegador (por exemplo, 'Gecko', 'Presto', 'WebKit')
const browserBuildID = navigator.buildID // ID de compilação do navegador

// Informações sobre a plataforma
const platform = navigator.platform // Plataforma em que o navegador está sendo executado (por exemplo, Win32, MacIntel, Linux x86_64)
const osVersion = navigator.appVersion // Versão específica do sistema operacional



// Informações adicionais
const fonts = (() => {
    const fontList = [];
    const fontTester = document.createElement('span');
    fontTester.style.visibility = 'hidden';
    fontTester.style.position = 'absolute';
    fontTester.style.top = '-9999px';
    document.body.appendChild(fontTester);
    const defaultFonts = fontTester.style.fontFamily;

    const fontData = [
        { name: 'Arial', variations: ['Regular', 'Bold', 'Italic', 'Bold Italic'] },
        { name: 'Arial Black', variations: ['Regular'] },
        { name: 'Book Antiqua', variations: ['Regular', 'Bold', 'Italic', 'Bold Italic'] },
        { name: 'Calibri', variations: ['Regular', 'Bold', 'Italic', 'Bold Italic'] },
        { name: 'Cambria', variations: ['Regular', 'Bold', 'Italic', 'Bold Italic'] },
        { name: 'Candara', variations: ['Regular', 'Bold', 'Italic', 'Bold Italic'] },
        { name: 'Comic Sans MS', variations: ['Regular', 'Bold'] },
        { name: 'Consolas', variations: ['Regular', 'Bold'] },
        { name: 'Courier New', variations: ['Regular', 'Bold', 'Italic', 'Bold Italic'] },
        { name: 'Georgia', variations: ['Regular', 'Bold', 'Italic', 'Bold Italic'] },
        { name: 'Helvetica', variations: ['Regular', 'Bold', 'Italic', 'Bold Italic'] },
        { name: 'Impact', variations: ['Regular'] },
        { name: 'Lucida Console', variations: ['Regular'] },
        { name: 'Lucida Sans Unicode', variations: ['Regular', 'Bold'] },
        { name: 'Microsoft Sans Serif', variations: ['Regular'] },
        { name: 'Monospace', variations: ['Regular'] },
        { name: 'MS Sans Serif', variations: ['Regular'] },
        { name: 'MS Serif', variations: ['Regular'] },
        { name: 'Noto Sans', variations: ['Regular', 'Bold', 'Italic', 'Bold Italic'] },
        { name: 'Open Sans', variations: ['Regular', 'Bold', 'Italic', 'Bold Italic'] },
        { name: 'Palatino Linotype', variations: ['Regular', 'Bold', 'Italic', 'Bold Italic'] },
        { name: 'Roboto', variations: ['Regular', 'Bold', 'Italic', 'Bold Italic'] },
        { name: 'Tahoma', variations: ['Regular', 'Bold'] },
        { name: 'Trebuchet MS', variations: ['Regular', 'Bold', 'Italic', 'Bold Italic'] },
        { name: 'Verdana', variations: ['Regular', 'Bold', 'Italic', 'Bold Italic'] },
        { name: 'Webdings', variations: ['Regular'] },
        { name: 'Wingdings', variations: ['Regular'] },
        { name: 'Yu Gothic', variations: ['Regular', 'Bold'] },
        { name: 'Yu Gothic UI', variations: ['Regular', 'Bold'] },
        { name: 'Yu Gothic UI Semibold', variations: ['Regular'] },
        { name: 'Zapf Dingbats', variations: ['Regular'] },
        { name: 'Webdings', variations: ['Regular'] },
        { name: 'Wingdings', variations: ['Regular'] },
        { name: 'Yu Gothic', variations: ['Regular', 'Bold'] },
        { name: 'Yu Gothic UI', variations: ['Regular', 'Bold'] },
        { name: 'Yu Gothic UI Semibold', variations: ['Regular'] },
        { name: 'Zapf Dingbats', variations: ['Regular'] },
        { name: 'Andale Mono', variations: ['Regular'] },
        { name: 'Courier New', variations: ['Regular', 'Bold', 'Italic', 'Bold Italic'] },
        { name: 'Lucida Console', variations: ['Regular'] },
        { name: 'Lucida Sans Typewriter', variations: ['Regular', 'Bold', 'Italic', 'Bold Italic'] },
        { name: 'Lucida Typewriter', variations: ['Regular', 'Bold', 'Italic', 'Bold Italic'] },
        { name: 'Monaco', variations: ['Regular'] },
        { name: 'OCR-A', variations: ['Regular'] },
        { name: 'OCR-B', variations: ['Regular'] },
        { name: 'Papyrus', variations: ['Regular'] },
        { name: 'Playbill', variations: ['Regular'] },
        { name: 'Symbol', variations: ['Regular'] },
    ];


    fontData.forEach(font => {
        font.variations.forEach(variation => {
            const fullFontName = `${font.name} ${variation}`;
            fontTester.style.fontFamily = `${defaultFonts}, ${fullFontName}`;
            if (fontTester.style.fontFamily !== defaultFonts) {
                fontList.push(fullFontName);
            }
        });
    });

    document.body.removeChild(fontTester);
    return fontList.join(', ');
})();




const domBlockers = (() => {
    const blockList = [
        'AdBlock', 'AdGuard', 'uBlock', 'Adblock Plus', 'NoScript'
        // Adicione outros bloqueadores de DOM aqui
    ]
    const detectedBlockers = blockList.filter(blocker => window[blocker])
    return detectedBlockers.join(', ')
})()

const fontPreferences = (() => {
    const fontPrefs = []
    if (document.fonts && document.fonts.length > 0) {
        document.fonts.forEach(font => {
            fontPrefs.push(`${font.family} ${font.style}`)
        })
    }
    return fontPrefs.join(', ')
})()



// Informações adicionais (continuação)
const audio = 'AudioContext' in window ? 'Supported' : 'Not Supported'
const screenFrame = window.screen.orientation ? 'Supported' : 'Not Supported'
const canvas = (() => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    return context ? 'Supported' : 'Not Supported'
})()
const osCpu = window.navigator.oscpu || 'N/A'
const deviceMemory = window.navigator.deviceMemory || 'N/A'
const hardwareConcurrency = window.navigator.hardwareConcurrency || 'N/A'
const timezone = window.Intl ? window.Intl.DateTimeFormat().resolvedOptions().timeZone : 'N/A'
const sessionStorage = 'sessionStorage' in window ? 'Supported' : 'Not Supported'
const localStorage = 'localStorage' in window ? 'Supported' : 'Not Supported'
const indexedDB = 'indexedDB' in window ? 'Supported' : 'Not Supported'
const openDatabase = 'openDatabase' in window ? 'Supported' : 'Not Supported'
const cpuClass = window.navigator.cpuClass || 'N/A'
const plugins = (() => {
    const pluginList = []
    for (let i = 0; i < navigator.plugins.length; i++) {
        pluginList.push(navigator.plugins[i].name)
    }
    return pluginList.join(', ')
})()
const touchSupport = 'ontouchstart' in window ? 'Supported' : 'Not Supported'
const vendor = window.navigator.vendor || 'N/A'
const vendorFlavors = window.navigator.vendorSub || 'N/A'
const cookiesEnabled = window.navigator.cookieEnabled ? 'Enabled' : 'Disabled'
const colorGamut = window.matchMedia('(color-gamut: srgb)').matches ? 'sRGB' : 'Not sRGB'
const invertedColors = window.matchMedia('(inverted-colors: inverted)').matches ? 'Inverted' : 'Not Inverted'
const forcedColors = window.matchMedia('(forced-colors: active)').matches ? 'Forced' : 'Not Forced'
const monochrome = window.matchMedia('(monochrome)').matches ? 'Monochrome' : 'Not Monochrome'
const contrast = window.matchMedia('(prefers-contrast)').matches ? 'High Contrast' : 'Not High Contrast'
const reducedMotion = window.matchMedia('(prefers-reduced-motion)').matches ? 'Reduced Motion' : 'Not Reduced Motion'
const hdr = window.matchMedia('(prefers-color-scheme: hdr)').matches ? 'HDR' : 'Not HDR'
const math = (() => {
    const mathObject = {
        maxInteger: Number.MAX_SAFE_INTEGER,
        pi: Math.PI,
        sqrt2: Math.SQRT2
    }
    return JSON.stringify(mathObject)
})()
const pdfViewerEnabled = 'PDFViewer' in window ? 'Enabled' : 'Disabled'
const architecture = window.navigator.userAgent.includes('WOW64') ? 'x64' : 'x86'
const applePay = 'ApplePaySession' in window ? 'Supported' : 'Not Supported'
const privateClickMeasurement = 'webkit' in window && 'privateClickMeasurement' in window.webkit ? 'Supported' : 'Not Supported'
const webGlBasics = 'WebGLRenderingContext' in window ? 'Supported' : 'Not Supported'
const webGlExtensions = (() => {
    const extensions = []
    const context = document.createElement('canvas').getContext('webgl') || document.createElement('canvas').getContext('experimental-webgl')
    if (context) {
        const exts = context.getSupportedExtensions()
        for (let i = 0; i < exts.length; i++) {
            extensions.push(exts[i])
        }
    }
    return extensions.join(', ')
})()



// Combina todas as informações estáticas em uma string
const combinedData =
    browserName +
    browserVersion +
    os +
    deviceType +
    preferredLanguage +
    screenResolution +
    cpuCores +
    colorDepth +
    pixelDepth +
    gpuInfo +
    webglVersion +
    mobileInfo +
    htmlVersion +
    userAgentMasked +
    tlsCompatibility +
    supportsWebSockets +
    ecmascriptVersion +
    supportsWebRTC +
    supportsWebWorkers +
    supportsServiceWorkers + // alterado para dar suporte a aba anônima no fire fox
    platform +
    osVersion +
    browserVendor +
    browserProduct +
    browserBuildID +
    fonts +
    domBlockers +
    fontPreferences +
    audio +
    screenFrame +
    canvas +
    osCpu +
    deviceMemory +
    hardwareConcurrency +
    timezone +
    sessionStorage +
    localStorage +
    indexedDB +
    openDatabase +
    cpuClass +
    plugins +
    touchSupport +
    vendor +
    vendorFlavors +
    cookiesEnabled +
    colorGamut +
    invertedColors +
    forcedColors +
    monochrome +
    contrast +
    reducedMotion +
    hdr +
    math +
    pdfViewerEnabled +
    architecture +
    applePay +
    privateClickMeasurement +
    webGlBasics +
    webGlExtensions

// Calcula o hash SHA-256
SHA256(combinedData).then(hash => {
    // Exibe o hash resultante no console
    console.log("Hash resultante: " + hash)

    // Exibe o hash em um elemento HTML
    const box_hash = document.querySelector('#hash')
    box_hash.innerHTML = hash
    box_hash.value = hash
})



// Depuração console:
function debug() {
    console.log(`APPLEPAY: ${applePay}\n\n`)
    console.log(`ARCHITECTURE: ${architecture}\n\n`)
    console.log(`AUDIO: ${audio}\n\n`)
    console.log(`BROWSERBUILDID: ${browserBuildID}\n\n`)
    console.log(`BROWSERNAME: ${browserName}\n\n`)
    console.log(`BROWSERPRODUCT: ${browserProduct}\n\n`)
    console.log(`BROWSERVERSION: ${browserVersion}\n\n`)
    console.log(`BROWSERVENDOR: ${browserVendor}\n\n`)
    console.log(`CANVAS: ${canvas}\n\n`)
    console.log(`COLORDEPTH: ${colorDepth}\n\n`)
    console.log(`COLORGAMUT: ${colorGamut}\n\n`)
    console.log(`CONTRAST: ${contrast}\n\n`)
    console.log(`COOKIESENABLED: ${cookiesEnabled}\n\n`)
    console.log(`CPUCORES: ${cpuCores}\n\n`)
    console.log(`CPUCLASS: ${cpuClass}\n\n`)
    console.log(`DEVICEMEMORY: ${deviceMemory}\n\n`)
    console.log(`DEVICETYPE: ${deviceType}\n\n`)
    console.log(`DOMBLOCKERS: ${domBlockers}\n\n`)
    console.log(`ECMASCRIPTVERSION: ${ecmascriptVersion}\n\n`)
    console.log(`FONTS: ${fonts}\n\n`)
    console.log(`FONTPREFERENCES: ${fontPreferences}\n\n`)
    console.log(`FORCEDCOLORS: ${forcedColors}\n\n`)
    console.log(`GPUINFO: ${gpuInfo}\n\n`)
    console.log(`HARDWARECONCURRENCY: ${hardwareConcurrency}\n\n`)
    console.log(`HDR: ${hdr}\n\n`)
    console.log(`HTMLVERSION: ${htmlVersion}\n\n`)
    console.log(`INDEXEDDB: ${indexedDB}\n\n`)
    console.log(`INVERTEDCOLORS: ${invertedColors}\n\n`)
    console.log(`LOCALSTORAGE: ${localStorage}\n\n`)
    console.log(`MATH: ${math}\n\n`)
    console.log(`MOBILEINFO: ${JSON.stringify(mobileInfo)}\n\n`)
    console.log(`MONOCHROME: ${monochrome}\n\n`)
    console.log(`OPENDATABASE: ${openDatabase}\n\n`)
    console.log(`OS: ${os}\n\n`)
    console.log(`OSCPU: ${osCpu}\n\n`)
    console.log(`OSVERSION: ${osVersion}\n\n`)
    console.log(`PDFVIEWERENABLED: ${pdfViewerEnabled}\n\n`)
    console.log(`PREFERREDLANGUAGE: ${preferredLanguage}\n\n`)
    console.log(`PLATFORM: ${platform}\n\n`)
    console.log(`PLUGINS: ${plugins}\n\n`)
    console.log(`PRIVATECLICKMEASUREMENT: ${privateClickMeasurement}\n\n`)
    console.log(`REDUCEDMOTION: ${reducedMotion}\n\n`)
    console.log(`SCREENFRAME: ${screenFrame}\n\n`)
    console.log(`SCREENRESOLUTION: ${screenResolution}\n\n`)
    console.log(`SESSIONSTORAGE: ${sessionStorage}\n\n`)
    console.log(`SUPPORTSSERVICEWORKERS: ${supportsServiceWorkers}\n\n`)
    console.log(`SUPPORTSWEBRTC: ${supportsWebRTC}\n\n`)
    console.log(`SUPPORTSWEBSCOKETS: ${supportsWebSockets}\n\n`)
    console.log(`SUPPORTSWEBWORKERS: ${supportsWebWorkers}\n\n`)
    console.log(`TIMEZONE: ${timezone}\n\n`)
    console.log(`TOUCHSUPPORT: ${touchSupport}\n\n`)
    console.log(`TLS_COMPATIBILITY: ${tlsCompatibility}\n\n`)
    console.log(`USERAGENT: ${userAgent}\n\n`)
    console.log(`USERAGENTMASKED: ${userAgentMasked}\n\n`)
    console.log(`VENDOR: ${vendor}\n\n`)
    console.log(`VENDORFLAVORS: ${vendorFlavors}\n\n`)
    console.log(`WEBGLBASICS: ${webGlBasics}\n\n`)
    console.log(`WEBGLEXTENSIONS: ${webGlExtensions}\n\n`)
}
