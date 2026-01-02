import React from "react";
function Hero() {
  return (
    <div className="cointainer">
      <div className="row p-5 border-bottom mt-5">
        <h1 className="fs-3 text-center">
          We pioneered the discount broking model in India.
          <br /> Now we are breaking ground with our technology
        </h1>
      </div>
      <div className="row border-bottom text-muted p-5 mt-5" style={{lineHeight:"1.8", fontSize:"1.2em"}}>
        <div className="col-6 p-5">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            minima in atque. Quasi doloremque nostrum consectetur ex harum vitae
            veniam officiis tenetur velit reiciendis sit, quia eos,
            exercitationem ad quo fuga neque laudantium illo dolore. Tempora,
            amet. 
          </p>
          <p>
            quis vitae, vel ipsum facilis possimus laborum. Odit assumenda
            dolores, doloribus quia temporibus nobis blanditiis velit neque
            illum quod est ab, a vero aut asperiores architecto quaerat harum
            aliquam labore quas esse eos? 
          </p>
          <p>
            cumque distinctio consectetur totam provident quod! Assumenda qui at
            ab, accusantium, dignissimos similique ipsam laudantium sequi ea
            perspiciatis dicta libero
          </p>
          
        </div>
        <div className="col-6 p-5">
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            minima in atque. Quasi doloremque nostrum consectetur ex harum vitae
            veniam officiis tenetur 
          </p>
          <p>
            <a style={{textDecoration:"none"}} href="#">Rainmatter</a> ,quis vitae, vel ipsum facilis possimus laborum. Odit assumenda
            dolores, doloribus quia temporibus nobis blanditiis velit neque
            illum quod est ab, a vero aut 
          </p>
          <p>
            cumque distinctio consectetur totam provident quod! Assumenda qui at
            ab, accusantium, dignissimos similique ipsam laudantium sequi ea
            perspiciatis dicta libero
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
