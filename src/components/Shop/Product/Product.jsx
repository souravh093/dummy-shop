import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'

const Product = ({product}) => {
    return (
        <div className="card w-full border border-gray-300">
        <figure><img className='w-full h-96 object-cover' src={product.thumbnail} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-gray-800">{product.title}</h2>
                <p className='text-gray-700'>Description: {product.description}</p>
                <p className='text-gray-700'>Price: ${product.price}</p>
                <p className='text-gray-700'>Manufacturer: {product.brand}</p>
                <p className='text-gray-700'>Rating: {product.rating}<FontAwesomeIcon icon={faStar}></FontAwesomeIcon></p>
                <div className="card-actions">
                </div>
                <button className="btn btn-primary">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    );
};

export default Product;