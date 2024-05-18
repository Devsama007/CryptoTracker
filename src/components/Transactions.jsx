import React, { useState } from 'react';
import Web3 from 'web3';

function Transaction() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const expectedAddress = '0x60744B7169AFA9ebf28c476ff8Db4540A240BB7e'; // Replace this with your MetaMask address

  // Connect MetaMask and retrieve account
  const connectMetaMask = async () => {
    try {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        // Request account access if needed
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const currentAccount = accounts[0];

        if (currentAccount === expectedAddress) {
          setAccount(currentAccount);
        } else {
          console.error('Connected account does not match expected address');
        }
      } else {
        console.log('MetaMask not detected');
      }
    } catch (error) {
      console.error('Error connecting MetaMask:', error);
    }
  };

  // Handle transaction
  const handleTransaction = async () => {
    try {
      if (!web3) {
        console.error('Web3 not initialized');
        return;
      }

      // Your transaction logic here
      console.log('Transaction logic goes here');

    } catch (error) {
      console.error('Transaction error:', error);
    }
  };

  return (
    <div>
      <h2>MetaMask Transaction Example</h2>
      <p>MetaMask Status: {account ? 'Connected' : 'Disconnected'}</p>
      {account && <p>MetaMask Address: {account}</p>}
      {account ? (
        <button onClick={handleTransaction}>Send Transaction</button>
      ) : (
        <button onClick={connectMetaMask}>Connect MetaMask</button>
      )}
    </div>
  );
}

export default Transaction;
