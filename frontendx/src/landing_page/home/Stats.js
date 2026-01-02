import React from 'react';
function Stats() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Truse with confidence</h1>
                    <h2 className='fs-4'>Customer first always</h2>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, similique nulla.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, similique nulla.</p>
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, similique nulla.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, similique nulla.</p>
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, similique nulla.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, similique nulla.</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, similique nulla.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, similique nulla.</p>

                </div>
                <div className="col-6 p-5">
                    <img style={{ width: "90%" }} src='Media\ecosystem.png' />
                    <div className='text-center'>
                        <a style={{textDecoration:"none"}} href='' className='mx-3'>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        <a style={{textDecoration:"none"}} href='' className='mx-3'>Try kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;