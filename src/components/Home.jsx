import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContextProvider';
import Loader from './Loader';

const Home = () => {
    const { filteredCategoryProducts } = useContext(ProductContext);

    if(!filteredCategoryProducts) return <Loader />

    return (
        <div className="min-h-screen w-full p-2">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {filteredCategoryProducts.map((product, index) => (
                    <Link
                        key={index}
                        to={`/details/${product.id}`}
                        className="p-4 w-full max-w-xs mx-auto border-2 border-gray-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        <img
                            src={product.image}
                            alt={product.title || 'Product image'}
                            className="h-52 w-52 mx-auto object-cover rounded-md "
                        />
                        <p className="text-black text-center font-semibold text-md mt-2">
                            {product.title}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
