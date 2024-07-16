const priceElement = document.getElementById('price');

function updatePrice() {
  fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
    .then(response => response.json())
    .then(data => {
      const price = data.bpi.USD.rate_float;
      priceElement.textContent = `$${price}`;
    });
}

updatePrice();
setInterval(updatePrice, 5000);
