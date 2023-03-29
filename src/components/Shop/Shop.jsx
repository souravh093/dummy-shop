import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])
    return (
        <div className='grid grid-cols-5'>
            <div className='col-span-4 lg:p-10 sm:grid-cols-2 sm:p-3 sm:gap-2 grid lg:grid-cols-3 lg:gap-10'>
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </div>
            <div className='flex flex-col gap-4 col-span-1 bg-secondary sm:p-3 lg:p-10 text-gray-700 sticky top-0'>
                <h2 className='text-xl font-bold'>Order Summary</h2>
                <p>Selected Item: 0</p>
                <p>Total Price: $0</p>
                <p>Total Shipping: $0</p>
                <p>Tax: $0</p>
                <h3 className='font-bold text-lg'>Grand Total: $0</h3>
            </div>
        </div>
    );
};

export default Shop;

                