import React from "react";
function Hero() {
  return (
    <section id="supporthero">
      <div id="supportwrapper" className="  ">
        <h4 className="mt-5">Support portal</h4>
        <a className="mt-5" href="">Track tickets</a>
      </div>
      <div className="row p-5 mx-5 ">
        <div className="col p-5 ">
          <h3 className="mb-3">Search for an option or browse help topics to create a ticket</h3>
          <input className="mb-3" placeholder="Eg. how do i activate F&O"></input>
          <br />
          <a href="">cumque distinctio</a>
          <a href="">consectetur totam</a>
          <a href="">provident quod!</a>
          <br />
          <a href="">Assumenda qui at</a>
          <a href="">ab, accusantium</a>
        </div>
        <div className="col p-5 ">
          <h2>Featured</h2>
          <ol>
            <li>
              <a href="">Assumenda qui at</a>
            </li>
            <br />
            <li>
              <a href="">ab, accusantium, dignissimos</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
