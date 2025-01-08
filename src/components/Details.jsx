import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContextProvider';

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, handleDelete, handleEdit } = useContext(ProductContext);

  const product = products.find((product) => product.id === Number(id));


  if (!product) {
    return <div>
      <h1 className='text-center text-xl text-black font-semibold mt-20'>Product Not Found !</h1>
      <div className='text-center mt-5'>
        <button onClick={() => navigate(-1)} className='px-8 py-2 border-2 border-red-500 text-red-500 font-semibold rounded hover:bg-red-600 hover:text-white'>Back</button>
      </div>
    </div>;
  }

  return (
    <div className="flex flex-col md:flex-col max-w-4xl mx-auto p-5 bg-white shadow-md rounded-lg md:mt-32 mt-10 border-2">
      <button onClick={() => navigate(-1)} className='px-8 py-2 h-fit w-fit mb-10 border-2 border-red-500 text-red-500 font-semibold rounded hover:bg-red-600 hover:text-white'>Back</button>
      <div className='flex flex-col md:flex-row'>
        {/* Product Image */}
        <div className="md:w-1/2 w-full mb-5">
          <img
            src={product.image}
            alt="Product"
            className="md:h-80 md:w-80 h-72 w-72 rounded mx-auto"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 w-full">
          <h1 className="text-2xl font-bold">
            {product.title}
          </h1>
          <p className="text-gray-600">{product.category}</p>
          <p className="text-red-500 text-xl font-semibold mt-2">${product.price}</p>
          <p className="mt-4 text-gray-700">
            {product.description}
          </p>

          {/* Buttons */}
          <div className="mt-4 flex space-x-4">
            <button onClick={() => { handleEdit(product.id), navigate(`/edit/${product.id}`) }} className="px-8 py-2 border-2 border-blue-500 text-blue-600 rounded hover:bg-blue-600 hover:text-white">
              Edit
            </button>
            <button onClick={() => {handleDelete(product.id), navigate("/")}} className="px-6 py-2 border-2 border-red-500 text-red-500 rounded hover:bg-red-600 hover:text-white">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
