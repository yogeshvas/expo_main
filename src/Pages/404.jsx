import React from 'react';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-transparent">
            <h1 className='text-7xl text-white text-center m-8'>404</h1>
            <h1 className='text-5xl text-white text-center m-4'>Not Found</h1>
            <h1 className="text-4xl text-white text-center max-w-[50%] m-8">
                The requested URL was either invalid or does not exist on this server.
            </h1>
        </div>
    );
};

export default NotFound;
