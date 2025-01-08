import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContextProvider';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const {formData, handleOnChange, handleSubmit} = useContext(ProductContext);

    const navigate = useNavigate();

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg md:mt-20 mt-10 border-2">
             <button onClick={() => navigate(-1)} className='px-8 py-2 h-fit w-fit mb-5 border-2 border-red-500 text-red-500 font-semibold rounded hover:bg-red-600 hover:text-white'>Back</button>
            <h1 className="text-2xl font-bold mb-10 text-center">Add Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Image URL */}
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleOnChange}
                    placeholder="Image URL"
                    className="w-full p-2 border border-gray-500  placeholder:text-gray-500 rounded"
                />

                {/* Title */}
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleOnChange}
                    placeholder="Product Title"
                    className="w-full p-2 border border-gray-500  placeholder:text-gray-500 rounded"
                />

                {/* Category and Price */}
                <div className="flex space-x-4">
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                    onChange={handleOnChange}
                        placeholder="Category"
                        className="w-1/2 p-2 border border-gray-500  placeholder:text-gray-500 rounded"
                    />
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                    onChange={handleOnChange}
                        placeholder="Price"
                        className="w-1/2 p-2 border border-gray-500  placeholder:text-gray-500 rounded"
                    />
                </div>

                {/* Description */}
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleOnChange}
                    placeholder="Description"
                    className="w-full p-2 border border-gray-500  placeholder:text-gray-500 rounded h-32"
                />

                {/* Submit Button */}
                <button type="submit"
                    className="w-full p-2 border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-600 hover:text-white">
                    Add New Product
                </button>
            </form>
        </div>
    );
};

export default Create;
