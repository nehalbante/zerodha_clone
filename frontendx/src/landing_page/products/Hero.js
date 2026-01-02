import React from 'react';
function Hero() {
    return ( 
        <div className='cointainer'>
            <div className='row text-center mt-5 border-bottom p-5'>
                <h1>Technology</h1>
                <h3 className='text-muted mt-3'>Sleek, morden and intutive trading platform</h3>
                <p>checkout our <a style={{textDecoration:"none"}} href='#'>investment offering <i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;