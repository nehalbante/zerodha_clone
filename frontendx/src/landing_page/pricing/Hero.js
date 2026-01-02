import React from "react";
function Hero() {
  return (
    <div className="cointainer ">
      <div className="row p-5 border-bottom text-center ">
        <h1 className="mb-3 ">Pricing</h1>
        <p style={{ fontSize: "18px" }} className="text-muted">
          Free equity investments and flat ₹20 traday and F&O trades
        </p>
      </div>
      <div className="row  p-5">
        <div className="col p-5 text-center">
          <img src="Media\pricingEquity.svg" />
          <h2>Free equity delivery</h2>
          <p className="text-muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            minima in atque.
          </p>
        </div>
        <div className="col p-5 text-center">
          <img src="Media\intradayTrades.svg" />
          <h2>Intraday F&O trades</h2>
          <p className="text-muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            minima in atque. Quasi doloremque nostrum consectetur ex harum vitae
            veniam officiis tenetur
          </p>
        </div>
        <div className="col p-5 text-center">
          <img src="Media\pricingEquity.svg" />
          <h2>Free direct MF</h2>
          <p className="text-muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            minima in atque. Quasi doloremque nostrum 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
