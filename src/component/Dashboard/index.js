import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const StocksContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const HoldingsContainer = styled(StocksContainer)``;

const StockList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StockItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const Button = styled.button`
  padding: 6px 12px;
  border: none;
  background-color: #4caf50;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #45a049;
  }
`;

function Dashboard() {
  const [stocks, setStocks] = useState([]);
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    const mockStocks = [
      { id: 1, name: 'AAPL', price: 150 },
      { id: 2, name: 'GOOGL', price: 2800 },
      { id: 3, name: 'TSLA', price: 720 },
    ];
    setStocks(mockStocks);
  }, []);

  const handleBuy = (stock) => {
    if(holdings.includes(stock)){
        return;
    }
    setHoldings([...holdings, stock]);
  };

  const handleSell = (stockId) => {
    setHoldings(holdings.filter(stock => stock.id !== stockId));
  };

  function buyStock(stock) {
    return function() {
      handleBuy(stock);
    };
  }

  function sellStock(stockId) {
    return function() {
      handleSell(stockId);
    };
  }

  return (
    <DashboardContainer>
      <h1>Stock Market Dashboard</h1>
      <StocksContainer>
        <h2>Available Stocks</h2>
        <StockList>
          {stocks.map(stock => (
            <StockItem key={stock.id}>
              <span>{stock.name}: ${stock.price}</span>
              <Button onClick={buyStock(stock)}>Buy</Button>
            </StockItem>
          ))}
        </StockList>
      </StocksContainer>
      <HoldingsContainer>
        <h2>Your Holdings</h2>
        <StockList>
          {holdings.map(stock => (
            <StockItem key={stock.id}>
              <span>{stock.name}: ${stock.price}</span>
              <Button onClick={sellStock(stock.id)}>Sell</Button>
            </StockItem>
          ))}
        </StockList>
      </HoldingsContainer>
    </DashboardContainer>
  );
}

export default Dashboard;
