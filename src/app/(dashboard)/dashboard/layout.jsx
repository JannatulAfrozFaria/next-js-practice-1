import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <div className='bg-blue-300 p-6'>
                Dashboard Layout
            </div>
            {children}
            <footer>
                Dashboard Footer
            </footer>
        </div>
    );
};

export default DashboardLayout;