import React from 'react';
import notFound from '../../../src/assets/images/Notfound.png'
const NotFound = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={notFound} class="max-w-sm  rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold my-12"><span className='text-red-600'>OOPos!!</span> the page not found</h1>


                </div>
            </div>
        </div>
    );
};

export default NotFound;