import React, { useState, useEffect } from 'react';

const WalletPage = () => {
  const [balance, setBalance] = useState(0);
  const [promotions, setPromotions] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState('');

  // Fetch wallet balance
  useEffect(() => {
    fetch('/api/wallet-balance')
      .then((response) => response.json())
      .then((data) => setBalance(data.balance))
      .catch((error) => console.error('Error fetching wallet balance:', error));
  }, []);

  // Fetch promotions
  useEffect(() => {
    fetch('/api/promotions')
      .then((response) => response.json())
      .then((data) => setPromotions(data.promotions))
      .catch((error) => console.error('Error fetching promotions:', error));
  }, []);

  // Fetch transactions
  useEffect(() => {
    fetch('/api/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data.transactions))
      .catch((error) => console.error('Error fetching transactions:', error));
  }, []);

  // Handle add funds
  const handleAddFunds = () => {
    if (amount) {
      // Code to send amount to the backend
      console.log(`Added ${amount} to the wallet`);
      setBalance((prevBalance) => prevBalance + parseFloat(amount));
      setShowModal(false);
      setAmount('');
    }
  };

  return (
    <div className="h-[40vw] bg-gray-100 p-8">
      {/* Wallet Balance Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md relative">
          <img src="https://placehold.co/100x100" alt="Wallet icon" className="absolute top-4 left-4 w-16 h-16" />
          <div className="flex items-center justify-between mt-16">
            <div>
              <div className="text-lg">
                Total Balance <i className="fas fa-info-circle"></i>
              </div>
              <div className="text-4xl font-bold">${balance.toFixed(2)}</div>
            </div>
            <button onClick={() => setShowModal(true)} className="font-bold text-white-500  rounded-full p-2 shadow-md">
              <i className="fas fa-plus"></i>
              Add funds +
            </button>
          </div>
        </div>

        {/* Promotion Cards */}
        <div className="col-span-2">
          <div className="grid grid-cols-1 h-[12vw] md:grid-cols-2 gap-4">
            {/* First promotion */}
            <div className="border border-green-500 p-4 rounded-lg shadow-md">
              <div className="text-green-500 font-bold">Ad $500 Get 30% Extra</div>
              <div className="text-gray-500">Valid till Feb 19, 2025</div>
              <div className="text-green-500">
                You have to add min $500.00 fund to get max of $300.00
              </div>
            </div>

            {/* Second promotion */}
            <div className="border border-green-500 p-4 rounded-lg shadow-md">
              <div className="text-green-500 font-bold">Add $100 Get 10% Extras</div>
              <div className="text-gray-500">Valid till Jul 20, 2027</div>
              <div className="text-green-500">
                You have to add min $100.00 fund to get max of $200.00
              </div>
            </div>

            {/* Additional dynamic promotions from API */}
            {promotions.map((promo) => (
              <div key={promo.id} className="border border-green-500 p-4 rounded-lg shadow-md">
                <div className="text-green-500 font-bold">{promo.title}</div>
                <div className="text-gray-500">Valid till {promo.validTill}</div>
                <div className="text-green-500">{promo.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features & Transaction History */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Features List */}
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">
                <i className="fas fa-circle"></i>
              </span>
              <span className="text-gray-500">
                Earn money to your wallet by completing offers & challenges
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">
                <i className="fas fa-circle"></i>
              </span>
              <span className="text-gray-500">
                Convert your loyalty points into wallet money
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">
                <i className="fas fa-circle"></i>
              </span>
              <span className="text-gray-500">
                Admin also rewards top customers with wallet money
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">
                <i className="fas fa-circle"></i>
              </span>
              <span className="text-gray-500">
                Use your wallet money during orders
              </span>
            </li>
          </ul>
        </div>

        {/* Transaction History */}
        <div className="col-span-2">
          <div className="bg-white p-6  h-[20vw] rounded-lg shadow-md">
            <div className="text-gray-700 font-bold text-lg mb-4">Transaction History</div>
            {transactions.length > 0 ? (
              transactions.map((transaction) => (
                <div key={transaction.id} className="flex justify-between items-center mb-4">
                  <div className="text-gray-500">{transaction.date}</div>
                  <div className="text-gray-700">{transaction.amount}</div>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center">
                <div className="text-gray-500">No transactions found</div>
                <img src="https://placehold.co/100x100" alt="No transactions illustration" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Funds Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Add Funds</h2>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border p-2 w-full mb-4"
            />
            <button onClick={handleAddFunds} className="bg-green-500 text-white p-2 rounded-lg">
              Add
            </button>
            <button onClick={() => setShowModal(false)} className="ml-4 p-2 rounded-lg bg-red-500 text-white">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletPage;
