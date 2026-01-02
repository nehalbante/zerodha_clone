import React from "react";
function Rightsection({ imageurl, productname, productdecription, learnmore }) {
  return (
    <div className="cointainer">
      <div className="row">
        <div style={{marginTop:"150px"}} className="col-6 p-5 ">
          <h1>{productname}</h1>
          <p style={{ paddingRight: "150px" }}>{productdecription}</p>
          <div>
            <a
              style={{textDecoration: "none" }}
              href={learnmore}
            >
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-6  ">
          <img src={imageurl} />
        </div>
      </div>
    </div>
  );
}

export default Rightsection;
