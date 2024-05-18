// components/Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Cryptocurrency Tracker</h2>
      <div className="crypto-container">
        {data && data.map(coin => (
          <Link to={`/crypto/${coin.id}`} key={coin.id}>
            <div className="crypto-card">
              <div className="crypto-info">
                <img src={coin.image} alt={coin.name} className="crypto-image" />
                <h3>{coin.name}</h3>
              </div>
              <p>Price: {coin.current_price} USD</p>
              <p>Market Cap: {coin.market_cap} USD</p>
              <p>24h Change: {coin.price_change_percentage_24h}%</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
