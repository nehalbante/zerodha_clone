import React from "react";
function Leftsection({
  imageurl,
  productname,
  productdecription,
  trydemo,
  learnmore,
  googleplay,
  appstore,
}) {
  return (
    <div className="cointainer">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <img src={imageurl} />
        </div>
        <div style={{marginTop:"150px"}} className="col-6 ">
          <h1>{productname}</h1>
          <p style={{paddingRight:"150px"}}>{productdecription}</p>
          <div>
            <a style={{textDecoration:"none"}}  href={trydemo}>Try demo <i class="fa-solid fa-arrow-right"></i></a>
            <a style={{marginLeft:"110px",textDecoration:"none"}} href={learnmore}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="mt-3">
            <a href={googleplay}>
              <img src="Media\googlePlayBadge.svg" />
            </a>
            <a style={{marginLeft:"50px"}} href={appstore}>
              <img src="Media\appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftsection;
