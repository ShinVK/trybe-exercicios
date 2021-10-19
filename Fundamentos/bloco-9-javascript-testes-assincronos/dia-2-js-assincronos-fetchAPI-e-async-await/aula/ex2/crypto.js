const cryptoCoin = () => {
  const API_COINS = `https://api.coincap.io/v2/assets`;
  const coins = fetch(API_COINS)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());
  return coins;
};

const fetchDolarReal = async () => {
  const dolarToReal = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.usd)
    .catch((error) => console.log(error));

  return dolarToReal;
};

const formatAndPost = async () => {
  const coins = await cryptoCoin();
  const coinsList = document.getElementById('top5crypto');
  const dolarToReal = await fetchDolarReal();

  coins
    .filter((coin) => coin.rank < 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');
      const usdPrice = Number(coin.priceUsd);
      const brlPrice = usdPrice * dolarToReal.brl;

      newLi.innerText = `${coin.name}(${coin.symbol}): ${usdPrice.toFixed(2)}`;
      coinsList.appendChild(newLi);
    });
};

const url =
  'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';

fetchDolarReal();
window.onload = () => formatAndPost();

// 0: {id: 'bitcoin', rank: '1', symbol: 'BTC', name: 'Bitcoin', supply: '18847481.0000000000000000', …}
// 1: {id: 'ethereum', rank: '2', symbol: 'ETH', name: 'Ethereum', supply: '117981127.6865000000000000', …}
// 2: {id: 'binance-coin', rank: '3', symbol: 'BNB', name: 'Binance Coin', supply: '166801148.0000000000000000', …}
// 3: {id: 'cardano', rank: '4', symbol: 'ADA', name: 'Cardano', supply: '32904527668.6660000000000000', …}
// 4: {id: 'tether', rank: '5', symbol: 'USDT', name: 'Tether', supply: '69036070054.1316000000000000', …}
// 5: {id: 'xrp', rank: '6', symbol: 'XRP', name: 'XRP', supply: '45404028640.0000000000000000', …}
// 6: {id: 'solana', rank: '7', symbol: 'SOL', name: 'Solana', supply: '300538253.2305941600000000', …}
// 7: {id: 'polkadot', rank: '8', symbol: 'DOT', name: 'Polkadot', supply: '1041306941.5275600000000000', …}
// 8: {id: 'usd-coin', rank: '9', symbol: 'USDC', name: 'USD Coin', supply: '32721938874.7312550000000000', …}
