export default function fetchBitcoin(url, target) {
    // async function fetchBitcoin(URL) {
    //     const bitcoinResponse = await fetch(URL);
    //     const bitcoinJSON = await bitcoinResponse.json();

    //     console.log(bitcoinJSON);
    // }

    // fetchBitcoin('https://blockchain.info/ticker')

    fetch(url)
        .then((response) => response.json())
        .then((bitcoin) => {
            const btcPreco = document.querySelector(target);
            btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
        })
        .catch((erro) => {
            console.log(Error(erro));
        });
}
