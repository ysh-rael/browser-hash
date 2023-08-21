// Informações estáticas do User Agent
const userAgent = navigator.userAgent;
const browserName = navigator.appName;
const browserVersion = navigator.appVersion;
const os = navigator.platform;
const deviceType = /Mobile/.test(userAgent) ? 'Mobile' : 'Desktop';
const preferredLanguage = navigator.language;

console.log('userAgent: ' + userAgent);
console.log('browserName: ' + browserName);
console.log('browserVersion: ' + browserVersion);
console.log('os: ' + os);
console.log('deviceType: ' + deviceType);
console.log('preferredLanguage: ' + preferredLanguage);

// Informações estáticas sobre o dispositivo
const screenResolution = `${window.screen.width}x${window.screen.height}`; // resolução da tela
const cpuCores = navigator.hardwareConcurrency; // quant. nucleos da cpu
const colorDepth = window.screen.colorDepth; // densidade de cores
const pixelDepth = window.screen.pixelDepth; // densidade de pixel

console.log('screenResolution: ' + screenResolution);
console.log('cpuCores: ' + cpuCores);
console.log('colorDepth: ' + colorDepth);
console.log('pixelDepth: ' + pixelDepth);

// Informações sobre a GPU
let gpuInfo = 'N/A';
if (navigator.gpu)  gpuInfo = `${navigator.gpu.deviceName}, ${navigator.gpu.vendorName}`;
   
console.log('gpuInfo: ' + gpuInfo);

// Combina todas as informações estáticas em uma string
const combinedData = browserName + browserVersion + os + deviceType + preferredLanguage + screenResolution + cpuCores + colorDepth + pixelDepth + gpuInfo;

// Calcula o hash SHA-256
SHA256(combinedData).then(hash => {
    // Exibe o hash resultante no console
    console.log("Hash resultante: " + hash);

    // Exibe o hash em um elemento HTML
    const box_hash = document.querySelector('#hash');
    box_hash.innerHTML = hash;
    box_hash.value = hash
});

