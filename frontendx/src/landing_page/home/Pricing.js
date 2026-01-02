import React from "react";
function Pricing() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-4 fs-2">Unbeatable pricing</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            similique nulla. Lorem ipsum dolor
          </p>
          <a style={{ textDecoration: "none" }} href="">
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mb-5">
          <div className="row text-center">
            <div className="col border py-4 p-3">
                <h1>₹0</h1>
                <p>Free equity delivery <br/> and direct mutual funds</p>
            </div>
            <div className="col border py-4 p-3">
                <h1>₹20</h1>
                <p className="">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
