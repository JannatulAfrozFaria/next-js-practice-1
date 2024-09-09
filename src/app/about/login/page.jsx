import React from 'react';

const page = () => {
    return (
        <div>
            <h1>Login form</h1>
            <input type="email" name="Your Email" id="" />
            <input type="password" name="Your Password" id="" />
            <button className='text- white bg-sky-500 p-2 rounded-lg'>Login</button>
        </div>
    );
};

export default page;