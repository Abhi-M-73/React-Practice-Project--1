import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const productsData = JSON.parse(localStorage.getItem('products')) || [
    {
      id: 1,
      title: "Vintage Leather Backpack",
      image: "https://i.pinimg.com/736x/f9/fc/cd/f9fccdbf8720fc2d81ea664111feb7e0.jpg",
      price: 79.99,
      description: "A stylish vintage leather backpack perfect for school, travel, or everyday use.",
      category: "Accessories"
    },
    {
      id: 2,
      title: "Modern Minimalist Chair",
      image: "https://i.pinimg.com/736x/21/18/e7/2118e713b05edda601f671347db35d9e.jpg",
      price: 129.99,
      description: "A sleek and minimalist chair that adds elegance to any room.",
      category: "Furniture"
    },
    {
      id: 3,
      title: "Elegant Wristwatch",
      image: "https://i.pinimg.com/736x/46/01/92/46019278d428077f44ba992451937cbe.jpg",
      price: 199.99,
      description: "An elegant wristwatch with a premium leather strap and stainless steel case.",
      category: "Accessories"
    },
    {
      id: 4,
      title: "Cozy Knit Sweater",
      image: "https://i.pinimg.com/736x/e8/0c/9a/e80c9a401b25c3bcb880587ead4a30e0.jpg",
      price: 49.99,
      description: "Stay warm and fashionable with this cozy knit sweater, available in multiple colors.",
      category: "Clothing"
    },
    {
      id: 5,
      title: "Portable Bluetooth Speaker",
      image: "https://i.pinimg.com/736x/f2/7c/d7/f27cd7e2e5307c9be112904b7c658217.jpg",
      price: 89.99,
      description: "Enjoy your favorite music anywhere with this compact and powerful Bluetooth speaker.",
      category: "Electronics"
    },
    {
      id: 6,
      title: "Ceramic Coffee Mug Set",
      image: "https://i.pinimg.com/736x/f3/82/d4/f382d48327cbfc1b419a94fc4fc8b204.jpg",
      price: 29.99,
      description: "A set of beautifully crafted ceramic coffee mugs, perfect for your morning brew.",
      category: "Accessories"
    },
    {
      id: 7,
      title: "Wireless Earbuds",
      image: "https://i.pinimg.com/736x/b9/ad/2c/b9ad2cf2bc65d08588a6b6177adeabbf.jpg",
      price: 59.99,
      description: "Experience high-quality sound with these lightweight and comfortable wireless earbuds.",
      category: "Electronics"
    },
    {
      id: 8,
      title: "Fitness Smartwatch",
      image: "https://i.pinimg.com/736x/ff/4b/43/ff4b438e75e5597b76e34f64854b6e6c.jpg",
      price: 99.99,
      description: "Track your health and fitness goals with this modern fitness smartwatch.",
      category: "Electronics"
    },
    {
      id: 9,
      title: "Stylish Sunglasses",
      image: "https://i.pinimg.com/736x/6c/f4/cc/6cf4cc6b3b0dffa1ad3fcb303a5cff86.jpg",
      price: 39.99,
      description: "Protect your eyes in style with these fashionable and durable sunglasses.",
      category: "Accessories"
    },
    {
      id: 10,
      title: "Wooden Desk Organizer",
      image: "https://i.pinimg.com/736x/07/26/f6/0726f6b517341ad957f99854f70c2240.jpg",
      price: 24.99,
      description: "Keep your workspace neat and tidy with this handmade wooden desk organizer.",
      category: "Furniture"
    }
  ];

  const [products, setProducts] = useState(productsData);
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ image: "", title: "", category: "", price: "", description: "" });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.price || !formData.description) {
      toast.error('Please fill all fields.');
      return;
    }

    if (editingId) {
      const updatedProduct = products.map((product) =>
        product.id === editingId ? { ...product, ...formData } : product
      );
      setProducts(updatedProduct);
      setEditingId(null);
      toast.success('Product updated successfully!');
    } else {
      const newProduct = { ...formData, id: Date.now() };
      setProducts([...products, newProduct]);
      toast.success('Product added successfully!');
    }
    setFormData({ image: "", title: "", category: "", price: "", description: "" });
    navigate("/");
  }

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleDelete = (id) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
    toast.success('Product deleted successfully!');
  };

  const handleEdit = (id) => {
    const editableProduct = products.find((product) => product.id === id);
    setFormData(editableProduct);
    setEditingId(id)
    toast.info('You can now edit the product.');
  }

  const category = ["All", ...new Set(products.map((product) => product.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredCategoryProducts = selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory);

  return (
    <ProductContext.Provider value={{ products, formData, handleOnChange, handleSubmit, handleDelete, handleEdit, category, setSelectedCategory, filteredCategoryProducts }}>
      {children}
      <ToastContainer />
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
