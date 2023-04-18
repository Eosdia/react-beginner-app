import { useEffect, useState } from "react";

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoin(json);
        // coin api를 가지고 오면 loading 을 false로 설정해야 한다.
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `( ${coin.length} )`}</h1>
      {/* loading이 true 이면 loading 을 보여주고 false 이면 loading은 사라진다. */}
      {loading ? (
        <stron>Loading...</stron>
      ) : (
        <select>
          {coin.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price}USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
export default Coin;
