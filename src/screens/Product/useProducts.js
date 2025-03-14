// src/hooks/useProducts.js
import { useState } from 'react';

const useProducts = () => {
  // Sample initial products data
  const initialProducts = [
    { id: 'P001', name: 'Wireless Headphones', category: 'Electronics', price: 129.99, stock: 45 },
    { id: 'P002', name: 'Smart Watch', category: 'Electronics', price: 199.99, stock: 28 },
    { id: 'P003', name: 'Running Shoes', category: 'Footwear', price: 89.99, stock: 56 },
    { id: 'P004', name: 'Coffee Maker', category: 'Home Appliances', price: 79.99, stock: 12 },
    { id: 'P005', name: 'Laptop Backpack', category: 'Accessories', price: 59.99, stock: 38 },
    { id: 'P006', name: 'Smartphone Case', category: 'Accessories', price: 19.99, stock: 94 },
  ];

  // State management
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    stock: ''
  });

  // Search functionality
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  // Create/Edit/Delete functions
  const handleAddProduct = () => {
    setCurrentProduct(null);
    setFormData({
      id: `P00${products.length + 1}`,
      name: '',
      category: '',
      price: '',
      stock: ''
    });
    setModalVisible(true);
  };

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setFormData({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      stock: product.stock.toString()
    });
    setModalVisible(true);
  };

  const handleDeletePrompt = (product) => {
    setCurrentProduct(product);
    setDeleteModalVisible(true);
  };

  const saveProduct = () => {
    // Basic validation
    if (!formData.name || !formData.category || !formData.price || !formData.stock) {
      alert('Please fill all fields');
      return;
    }

    const updatedProduct = {
      id: formData.id,
      name: formData.name,
      category: formData.category,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock)
    };

    if (currentProduct) {
      // Update existing product
      const updatedProducts = products.map(p => 
        p.id === currentProduct.id ? updatedProduct : p
      );
      setProducts(updatedProducts);
    } else {
      // Create new product
      setProducts([...products, updatedProduct]);
    }

    setModalVisible(false);
  };

  const deleteProduct = () => {
    if (currentProduct) {
      const updatedProducts = products.filter(p => p.id !== currentProduct.id);
      setProducts(updatedProducts);
      setDeleteModalVisible(false);
    }
  };

  return {
    products,
    filteredProducts,
    searchQuery,
    setSearchQuery,
    modalVisible,
    setModalVisible,
    deleteModalVisible,
    setDeleteModalVisible,
    currentProduct,
    formData,
    handleInputChange,
    handleAddProduct,
    handleEditProduct,
    handleDeletePrompt,
    saveProduct,
    deleteProduct
  };
};

export default useProducts;