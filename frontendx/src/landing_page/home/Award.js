import React from "react";

function Award() {
  return (
    <div className="cointainer ">
      <div className="row ">
        <div className="col-1"></div>
        <div className="col-5 p-5 ">
          <img src="Media\largestBroker.svg" />
        </div>
        <div className="col-6 p-5">
          <h1 className="mt-5">Largest stock broker in India</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet caa consectetur adipisicing elit. Eius,
            similique nulla. Quaerat rem enim eligendi. Culpa asperiores quo
            ipsam adipisci velit?
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Comodative derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks and IPO</p>
                </li>
                <li>
                  <p>Direct Mutual funds</p>
                </li>
                <li>
                  <p>Bonds and goverment securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img style={{ width: "90%" }} src="Media\pressLogos.png" />
        </div>
      </div>
    </div>
  );
}

export default Award;
