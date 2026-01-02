import React from "react";
function Team() {
  return (
    <div className="cointainer">
      <div className="row p-5 mt-5">
        <h1 className=" text-center">People</h1>
      </div>
      <div
        className="row border-bottom text-muted p-5   "
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 text-center ">
          <img
            style={{ borderRadius: "100%", width: "50%" }}
            src="Media\nithinKamath.jpg"
          />
          <h4 className="mt-3">Nithin Kamath</h4>
          <h5>Founder, CEO</h5>
        </div>
        <div className="col-6 mt-5">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            minima in atque. Quasi doloremque nostrum consectetur ex harum vitae
            veniam officiis tenetur
          </p>
          <p>
            quis vitae, vel ipsum facilis possimus laborum. Odit assumenda
            dolores, doloribus quia temporibus nobis blanditiis velit neque
          </p>
          <p>cumque distinctio consectetur totam provident quod!</p>
          <p>
            connect on{" "}
            <a style={{ textDecoration: "none" }} href="#">
              Homepage
            </a>{" "}
            /{" "}
            <a style={{ textDecoration: "none" }} href="#">
              TradingQnA
            </a>{" "}
            /{" "}
            <a style={{ textDecoration: "none" }} href="#">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
