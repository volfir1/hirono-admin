// src/utils/productUtils.js
import React from 'react';  // Make sure to import React
import { Text } from 'react-native';  // Import Text component

// Get color based on stock level
export const getStockColor = (stock) => {
  if (stock < 20) return '#e74c3c'; // Red for low stock
  if (stock < 50) return '#f39c12'; // Orange for medium stock
  return '#2ecc71'; // Green for high stock
};

// Table columns configuration for product data
export const getProductColumns = () => [
  { key: 'id', title: 'ID', width: 60 },
  { key: 'name', title: 'Product' },
  { key: 'category', title: 'Category' },
  { 
    key: 'price', 
    title: 'Price',
    width: 70,
    render: (item) => (
      <Text style={{ fontWeight: '500', color: '#2c3e50' }}>
        ${item.price.toFixed(2)}
      </Text>
    )
  },
  { 
    key: 'stock', 
    title: 'Stock',
    width: 50,
    render: (item) => (
      <Text style={{ fontWeight: '500', color: getStockColor(item.stock) }}>
        {item.stock}
      </Text>
    )
  },
];

// The rest of your code remains unchanged
export const getProductActions = (onEdit, onDelete) => [
  {
    icon: 'create-outline',
    color: '#3498db',
    onPress: onEdit,
  },
  {
    icon: 'trash-outline',
    color: '#e74c3c',
    onPress: onDelete,
  },
];

export const productFormFields = [
  { id: 'id', label: 'Product ID', editable: false, keyboardType: 'default' },
  { id: 'name', label: 'Product Name', editable: true, keyboardType: 'default', placeholder: 'Enter product name' },
  { id: 'category', label: 'Category', editable: true, keyboardType: 'default', placeholder: 'Enter category' },
  { id: 'price', label: 'Price', editable: true, keyboardType: 'decimal-pad', placeholder: 'Enter price' },
  { id: 'stock', label: 'Stock', editable: true, keyboardType: 'number-pad', placeholder: 'Enter stock quantity' },
];