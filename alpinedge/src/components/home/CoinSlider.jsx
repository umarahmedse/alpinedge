import React, { useEffect } from 'react';

const CoinSlider = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.innerHTML = JSON.stringify({
      "symbols": [
        {
          "description": "EUR/USD",
          "proName": "ACTIVTRADES:EURUSD"
        },
        {
          "description": "TSLA",
          "proName": "NASDAQ:TSLA"
        },
        {
          "description": "BTC/USD",
          "proName": "ACTIVTRADES:BTCUSD"
        },
        {
          "description": "FTSE 100",
          "proName": "ACTIVTRADES:UK100"
        },
        {
          "description": "USD/JPY",
          "proName": "ACTIVTRADES:USDJPY"
        },
        {
          "description": "AAPL",
          "proName": "NASDAQ:AAPL"
        },
        {
          "description": "GBP/USD",
          "proName": "ACTIVTRADES:GBPUSD"
        },
        {
          "description": "S&P 500",
          "proName": "VANTAGE:SP500"
        },
        {
          "description": "ETH/USD",
          "proName": "ACTIVTRADES:ETHUSD"
        }
      ],
      "showSymbolLogo": true,
      "isTransparent": false,
      "displayMode": "adaptive",
      "colorTheme": "light",
      "locale": "en"
    });

    const container = document.querySelector('.tradingview-widget-container__widget'); 
    if (container) {
      container.appendChild(script);
    } else {
      console.error("Container element not found for TradingView ticker tape");
    }

    // Cleanup function to remove script on component unmount
    return () => {
      if (container) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container  flex w-full  justify-start items-center 800px:scale-150 "  >
      <div className="tradingview-widget-container__widget w-full flex"></div> {/* This is the container for the ticker tape */}
      {/* <div className="tradingview-widget-copyright" style={{ marginTop: '10px' }}> */}
        {/* <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a> */}
      {/* </div> */}
    </div>
  );
};

export default CoinSlider;
