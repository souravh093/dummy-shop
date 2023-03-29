import React from 'react';

const Header = () => {
    return (
        <div className='bg-primary text-gray-200'>
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Dummy Shop</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Order</a></li>
                    <li><a>Order Review</a></li>
                    <li><a>Manage Invertors</a></li>
                    <li><a>Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;