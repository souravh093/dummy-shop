import React from 'react';

const Cart = ({cart}) => {
    let totalPrice = 0;
    cart.forEach(product => {
        totalPrice = totalPrice + product.price;
    });

    const tax = totalPrice*5/100;

    const grandTotalPrice = totalPrice + tax;
    return (
        <div className='flex flex-col gap-4 bg-secondary sm:p-3 lg:p-10 text-gray-700 sticky top-0 h-screen'>
            <h2 className='text-xl font-bold'>Order Summary</h2>
                <p>Selected Item: {cart.length}</p>
                <p>Total Price: ${totalPrice.toFixed(2)}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h3 className='font-bold text-lg'>Grand Total: ${grandTotalPrice.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;