import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; // Assuming you're using framer-motion for animations

const CoinSlider = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    const container = document.querySelector('.tradingview-widget-container__widget'); // Target your container element
    if (container) {
      script.text = JSON.stringify({
        "symbols": [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500 Index"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100 Cash CFD"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR to USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          }
        ],
        "showSymbolLogo": true,
        "isTransparent": true,
        "displayMode": "adaptive",
        "colorTheme": "light",
        "locale": "en"
      });
      container.appendChild(script);
    } else {
      console.error("Container element not found for TradingView ticker tape");
    }

    // Cleanup function to remove script on component unmount (optional)
    return () => {
      if (container) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" id='section2'>
      <div className="tradingview-widget-container__widget"></div> {/* This is the container for the ticker tape */}
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
};

export default CoinSlider;
