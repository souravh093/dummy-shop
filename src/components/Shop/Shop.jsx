import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/localStoreage';
import Cart from './Cart/Cart';
import Product from './Product/Product';


const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, []);


    const [cart, setCart] = useState([])

    const clickHandler = (product) => {
        setCart([...cart, product])
        addToDb(product.id)
    }
    return (
        <div className='grid grid-cols-5'>
            <div className='col-span-4 lg:p-10 sm:grid-cols-2 sm:p-3 sm:gap-2 grid lg:grid-cols-3 lg:gap-10'>
                {
                    products.map(product => <Product product={product} clickHandler={clickHandler} key={product.id}></Product>)
                }
            </div>
            <div className='col-span-1'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;

                