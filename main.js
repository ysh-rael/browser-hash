// Informações estáticas do User Agent
const userAgent = navigator.userAgent
const browserName = navigator.appName
const browserVersion = navigator.appVersion
const os = navigator.platform
const deviceType = /Mobile/.test(userAgent) ? 'Mobile' : 'Desktop'
const preferredLanguage = navigator.language

// Informações estáticas sobre o dispositivo
const screenResolution = `${window.screen.width}x${window.screen.height}` // resolução da tela
const cpuCores = navigator.hardwareConcurrency // quant. nucleos da cpu
const colorDepth = window.screen.colorDepth // densidade de cores
const pixelDepth = window.screen.pixelDepth // densidade de pixel

// Informações sobre a GPU
const gpuInfo = navigator.gpu ? `${navigator.gpu.deviceName}, ${navigator.gpu.vendorName}` : 'N/A'
const webglVersion = navigator.gpu ? navigator.gpu.webglVersion || 'N/A' : 'N/A'
const totalRam = navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'N/A'

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
    mobileInfo.screenResolution = `${window.screen.width}x${window.screen.height}`
}

const htmlVersion = document.doctype ? document.doctype.name : 'Unknown' // Versão do HTML
const userAgentMasked = navigator.userAgent !== userAgent ? 'Masked' : 'Not Masked' // Agente do usuário mascarado ou não
const tlsCompatibility = navigator.userAgent.includes('Chrome') ? 'TLS 1.3' : 'TLS 1.2' // Compatibilidade de TLS/SSL

// Informações do navegador
const supportsWebSockets = 'WebSocket' in window ? 'Supported' : 'Not Supported'
const ecmascriptVersion = (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') ? 'ES6+' : 'ES5'
const supportsServiceWorkers = 'serviceWorker' in navigator ? 'Supported' : 'Not Supported'
const supportsWebWorkers = 'Worker' in window ? 'Supported' : 'Not Supported'
const supportsWebRTC = 'RTCPeerConnection' in window ? 'Supported' : 'Not Supported'

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
    totalRam +
    mobileInfo +
    htmlVersion +
    userAgentMasked +
    tlsCompatibility +
    supportsWebSockets +
    ecmascriptVersion +
    supportsWebRTC +
    supportsWebWorkers +
    supportsServiceWorkers

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
console.log(`BROWSERNAME: ${browserName}\n\n`)
console.log(`BROWSERVERSION: ${browserVersion}\n\n`)
console.log(`COLORDEPTH: ${colorDepth}\n\n`)
console.log(`CPUCORES: ${cpuCores}\n\n`)
console.log(`DEVICETYPE: ${deviceType}\n\n`)
console.log(`GPINFO: ${gpuInfo}\n\n`)
console.log(`HTMLVERSION: ${htmlVersion}\n\n`)
console.log(`MOBILEINFO: ${mobileInfo}\n\n`)
console.log(`OS: ${os}\n\n`)
console.log(`PREFERREDLANGUAGE: ${preferredLanguage}\n\n`)
console.log(`PIXELDEPTH: ${pixelDepth}\n\n`)
console.log(`SCREENRESOLUTION: ${screenResolution}\n\n`)
console.log(`SUPPORTSSERVICETWORKERS: ${supportsServiceWorkers}\n\n`)
console.log(`SUPPORTSWEBRTC: ${supportsWebRTC}\n\n`)
console.log(`SUPPORTSWEBWORKERS: ${supportsWebWorkers}\n\n`)
console.log(`TLSCOMPATIBILITY: ${tlsCompatibility}\n\n`)
console.log(`TOTALRAM: ${totalRam}\n\n`)
console.log(`USERAGENT: ${userAgent}\n\n`)
console.log(`USERAGENTMASKED: ${userAgentMasked}\n\n`)
console.log(`WEBGLVERSION: ${webglVersion}\n\n`)
