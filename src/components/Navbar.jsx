import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContextProvider';

const Navbar = () => {
    const { products,category, setSelectedCategory } = useContext(ProductContext);

    const generateRandomColor = () => {  
        const letters = '0123456789ABCDEF'; 
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    return (
        <div className="w-full md:w-[20%] md:min-h-screen h-1/2 bg-gray-800 text-white p-5 flex flex-col items-center">
            <Link
                to="/create"
                className="px-4 py-2 border-2 border-white text-white rounded hover:bg-white hover:text-black transition duration-300"
            >
                Add New Product
            </Link>

            <div className="mt-8">
                <h1 className="text-2xl font-bold">Categories</h1>
                {
                    category.map((categoryName, index) => (
                        <div key={index} className="flex items-center gap-2 mt-4">
                            <span style={{ backgroundColor: generateRandomColor() }} className="inline-block h-4 w-4 rounded-full"></span>
                            <button
                                onClick={() => setSelectedCategory(categoryName)}
                                className="text-lg font-medium text-gray-300 hover:text-gray-600 transition duration-300"
                            >
                                {categoryName}
                            </button>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Navbar;
