import React from "react";
function Universe() {
  return (
    <div className="cointainer">
      <div className="row text-center mt-5">
        <p>
          want to know more about our technology stack? checkout the
          zerodha.tech
        </p>
        <h1 className="mt-5">The zerodha Universe</h1>
        <p>
          Extend our trading and investment experience even future with our
          partner platform
        </p>
        <div className="row mb-5 mt-5">
          <div className="col p-3 ">
            <img src="Media\smallcaseLogo.png" />
            <p className="mt-2 text-small text-muted">
              Thematic investment plan
            </p>
            <img
              style={{ width: "150px" }}
              className="mt-5"
              src="Media\zerodhaFundhouse.png"
            />
            <p className="mt-2 text-small text-muted">Asset managemet</p>
          </div>
          <div className="col p-3 ">
            <img style={{ width: "120px" }} src="Media\streakLogo.png" />
            <p className="mt-2 text-small text-muted">
              Algo & stagergy platform
            </p>
            <img
              style={{ width: "150px" }}
              className="mt-5"
              src="Media\goldenpiLogo.png"
            />
            <p className="mt-2 text-small text-muted">Bonds trading platform</p>
          </div>
          <div className="col p-3 ">
            <img style={{ width: "150px" }} src="Media\sensibullLogo.svg" />
            <p className="mt-2 text-small text-muted">
              Options trading platform
            </p>
            <img
              style={{ width: "120px" }}
              className="mt-5"
              src="Media\dittoLogo.png"
            />
            <p className="mt-2 text-small text-muted">Insurence</p>
          </div>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
