import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import DataTable from '../components/DataTable';
import SearchBar from '../components/Searchbar';

const OrdersScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample orders data
  const ordersData = [
    { id: '1001', customer: 'John Doe', date: '2023-03-01', total: 120.50, status: 'Completed' },
    { id: '1002', customer: 'Sarah Smith', date: '2023-03-01', total: 85.99, status: 'Processing' },
    { id: '1003', customer: 'Mike Johnson', date: '2023-02-28', total: 220.75, status: 'Pending' },
    { id: '1004', customer: 'Emily Wilson', date: '2023-02-28', total: 64.30, status: 'Completed' },
    { id: '1005', customer: 'David Brown', date: '2023-02-27', total: 175.20, status: 'Cancelled' },
    { id: '1006', customer: 'Lisa Miller', date: '2023-02-27', total: 95.40, status: 'Processing' },
  ];

  // Filtered orders based on search query
  const filteredOrders = ordersData.filter(order => 
    order.id.includes(searchQuery) ||
    order.customer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return '#2ecc71';
      case 'Processing':
        return '#3498db';
      case 'Pending':
        return '#f39c12';
      case 'Cancelled':
        return '#e74c3c';
      default:
        return '#7f8c8d';
    }
  };

  // Table columns configuration
  const columns = [
    { key: 'id', title: 'Order ID', width: 80 },
    { key: 'customer', title: 'Customer' },
    { key: 'date', title: 'Date' },
    { 
      key: 'total', 
      title: 'Total',
      render: (item) => (
        <Text style={styles.totalText}>${item.total.toFixed(2)}</Text>
      )
    },
    { 
      key: 'status', 
      title: 'Status',
      render: (item) => (
        <View style={[
          styles.statusBadge, 
          { backgroundColor: getStatusColor(item.status) + '20' }
        ]}>
          <Text 
            style={[
              styles.statusText, 
              { color: getStatusColor(item.status) }
            ]}
          >
            {item.status}
          </Text>
        </View>
      )
    },
  ];

  // Actions for each row
  const actions = [
    {
      icon: 'eye-outline',
      color: '#3498db',
      onPress: (item) => console.log('View order:', item.id),
    },
    {
      icon: 'print-outline',
      color: '#7f8c8d',
      onPress: (item) => console.log('Print order:', item.id),
    },
  ];

  return (
    <View style={styles.container}>
      <Header 
        title="Orders" 
        onMenuPress={() => navigation.openDrawer()}
      />
      
      <View style={styles.content}>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search by order ID or customer..."
          onClear={() => setSearchQuery('')}
        />
        
        <DataTable
          columns={columns}
          data={filteredOrders}
          actions={actions}
          onRowPress={(item) => console.log('Row pressed:', item.id)}
          emptyMessage="No orders found"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  totalText: {
    fontWeight: '500',
    color: '#2c3e50',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
});

export default OrdersScreen;