export default function initFetchBitcoin() {
    
    // async function fetchBitcoin(URL) {
    //     const bitcoinResponse = await fetch(URL);
    //     const bitcoinJSON = await bitcoinResponse.json();

    //     console.log(bitcoinJSON);
    // }

    // fetchBitcoin('https://blockchain.info/ticker')

    fetch('https://blockchain.info/ticker')
        .then(response => response.json())
        .then(bitcoin => {
            const btcPreco = document.querySelector('.btc-preco');
            btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
        })
        .catch(erro => {
            console.log(Error(erro));
        })
}



