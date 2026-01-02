import React from "react";
import Hero from "./Hero";
import Leftsection from "./Leftsection";
import Rightsection from "./Rightsection";
import Universe from "./Universe";
function Productpage() {
  return (
    <>
      <Hero />
      <Leftsection
        imageurl="Media\kite.png"
        productname="Kite"
        productdecription=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            similique nulla. Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit."
        trydemo=""
        learnmore=""
        googleplay=""
        appstore=""
      />
      <Rightsection
        imageurl="Media\console.png"
        productname="Console"
        productdecription=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            similique nulla. Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit."
        learnmore=""
      />
      <Leftsection
        imageurl="Media\coin.png"
        productname="coin"
        productdecription=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            similique nulla. Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit."
        trydemo=""
        learnmore=""
        googleplay=""
        appstore=""
      />
      <Rightsection
        imageurl="Media\kiteconnect.png"
        productname="Kite Connect API"
        productdecription=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            similique nulla. Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit."
        learnmore=""
      />
      <Leftsection
        imageurl="Media\varsity.png"
        productname="Varsity"
        productdecription=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            similique nulla. Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit."
        trydemo=""
        learnmore=""
        googleplay=""
        appstore=""
      />
      <Universe/>
    </>
  );
}

export default Productpage;
