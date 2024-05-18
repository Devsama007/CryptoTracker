// components/CryptoDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoDetail = ({ match }) => {
  const [cryptoData, setCryptoData] = useState(null);
  const cryptoId = match.params.id;

  useEffect(() => {
    const fetchCryptoData = async () => {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptoId}`);
      setCryptoData(response.data);
    };

    fetchCryptoData();
  }, [cryptoId]);

  if (!cryptoData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{cryptoData.name} ({cryptoData.symbol.toUpperCase()})</h2>
      {/* Render additional information and graphs here */}
    </div>
  );
};

export default CryptoDetail;
