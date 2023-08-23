# Browser Hash - Identificador de Navegador

O Browser Hash é uma ferramenta poderosa para suprir a necessidade de identificação da máquina do cliente, utilizando informações do navegador utilizado. Ele gera um ID (hash) exclusivo que identifica o navegador, mesmo quando utilizado em uma aba anônima ou através de uma VPN, embora possa apresentar algumas limitações em cenários específicos.

## Funcionamento

O Browser Hash coleta uma ampla gama de informações estáticas e dinâmicas do navegador e do dispositivo em que está sendo executado. Essas informações incluem detalhes sobre o navegador, sistema operacional, hardware e recursos disponíveis. A combinação meticulosa dessas informações é usada para gerar um hash único, efetivamente criando uma "impressão digital" do navegador.

## Informações Capturadas

O Browser Hash captura uma variedade de informações, incluindo:

- Detalhes do navegador (nome, versão, fabricante, etc.)
- Informações do dispositivo (resolução de tela, núcleos da CPU, densidade de cores, etc.)
- Detalhes da GPU (nome do dispositivo e fornecedor, versão do WebGL)
- Informações sobre dispositivos móveis (modelo, fabricante, sistema operacional, versão do navegador, resolução de tela)
- Versão do HTML
- Agente do usuário (com e sem máscara)
- Compatibilidade de TLS/SSL
- Suporte a recursos como WebSockets, Service Workers, WebRTC, Web Workers, etc.
- Detalhes sobre a plataforma (plataforma, versão do sistema operacional, etc.)
- Lista de fontes instaladas no dispositivo
- Presença de bloqueadores de DOM
- Preferências de fonte
- Suporte a áudio
- Taxa de atualização do monitor
- Uso de canvas
- Informações sobre a CPU e sistema operacional
- Idiomas preferenciais do usuário
- Tamanho da tela, memória do dispositivo e outros detalhes de hardware
- Fuso horário
- Suporte a armazenamento local (sessionStorage, localStorage, indexedDB, openDatabase)
- Classes da CPU
- Plugins do navegador
- Suporte a dispositivos de toque
- Fornecedor e variações
- Configurações de cores (profundidade de cores, suporte a gamut, cores invertidas, etc.)
- Suporte a recursos de acessibilidade (cores forçadas, monocromático, redução de movimento, etc.)
- Suporte a recursos matemáticos e PDF
- Detalhes de arquitetura e recursos de pagamento (Apple Pay)
- Suporte a recursos de privacidade (Private Click Measurement)
- Extensões e recursos WebGL

## Utilização

Para implementar o Browser Hash:

1. Inclua o código fornecido no seu projeto.
2. Certifique-se de que o código seja carregado em um ambiente de navegador (ele não funcionará fora de um navegador web).
3. Execute o código e capture o hash gerado.
4. O hash resultante pode ser utilizado como uma "impressão digital" do navegador para fins de identificação.

**Importante:** Lembre-se de que a precisão e a estabilidade da identificação podem variar de acordo com os navegadores, dispositivos e cenários de uso. O Browser Hash não é 100% infalível e pode apresentar falhas em certas situações.

## Contribuições

Contribuições são bem-vindas! Se você identificar problemas, tiver sugestões de melhorias ou quiser adicionar mais informações relevantes para a identificação do navegador, sinta-se à vontade para enviar um pull request.

## Autor

- [Ysh-rael](https://github.com/Ysh-rael)
- Email de Contato: ysp.rael@gmail.com

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

## Aviso Legal

Este projeto é fornecido apenas como uma ferramenta de identificação e não deve ser usado para fins maliciosos ou ilegais. Respeite a privacidade dos usuários e esteja ciente das implicações legais ao coletar informações dos usuários.

---
