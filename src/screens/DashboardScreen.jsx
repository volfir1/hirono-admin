import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import Card from '../components/Card';

const DashboardScreen = ({ navigation }) => {
  // Sample data for the dashboard
  const dashboardData = {
    revenue: {
      title: 'Total Revenue',
      value: '$15,250',
      icon: 'cash-outline',
      color: '#3498db',
      percentChange: 12.5,
    },
    orders: {
      title: 'New Orders',
      value: '156',
      icon: 'cart-outline',
      color: '#2ecc71',
      percentChange: 8.2,
    },
    customers: {
      title: 'New Customers',
      value: '64',
      icon: 'people-outline',
      color: '#9b59b6',
      percentChange: -3.8,
    },
    products: {
      title: 'Products',
      value: '358',
      icon: 'cube-outline',
      color: '#f39c12',
      percentChange: 4.1,
    },
  };

  // Recent order data
  const recentOrders = [
    { id: '1001', customer: 'John Doe', total: '$120.50', status: 'Completed', date: '2023-03-01' },
    { id: '1002', customer: 'Sarah Smith', total: '$85.99', status: 'Processing', date: '2023-03-01' },
    { id: '1003', customer: 'Mike Johnson', total: '$220.75', status: 'Pending', date: '2023-02-28' },
    { id: '1004', customer: 'Emily Wilson', total: '$64.30', status: 'Completed', date: '2023-02-28' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return '#2ecc71';
      case 'Processing':
        return '#3498db';
      case 'Pending':
        return '#f39c12';
      default:
        return '#7f8c8d';
    }
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Dashboard" 
        onMenuPress={() => navigation.openDrawer()}
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.statsContainer}>
          {Object.keys(dashboardData).map((key) => (
            <Card 
              key={key}
              title={dashboardData[key].title}
              value={dashboardData[key].value}
              icon={dashboardData[key].icon}
              color={dashboardData[key].color}
              percentChange={dashboardData[key].percentChange}
            />
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Orders</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ordersContainer}>
          {recentOrders.map((order) => (
            <View key={order.id} style={styles.orderItem}>
              <View style={styles.orderInfo}>
                <Text style={styles.orderId}>#{order.id}</Text>
                <Text style={styles.orderCustomer}>{order.customer}</Text>
                <Text style={styles.orderDate}>{order.date}</Text>
              </View>
              <View style={styles.orderDetails}>
                <Text style={styles.orderTotal}>{order.total}</Text>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) + '20' }]}>
                  <Text style={[styles.statusText, { color: getStatusColor(order.status) }]}>{order.status}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
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
  statsContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  viewAllText: {
    color: '#3498db',
    fontSize: 14,
  },
  ordersContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  orderInfo: {
    flex: 1,
  },
  orderId: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 4,
  },
  orderCustomer: {
    fontSize: 14,
    color: '#2c3e50',
    marginBottom: 4,
  },
  orderDate: {
    fontSize: 12,
    color: '#7f8c8d',
  },
  orderDetails: {
    alignItems: 'flex-end',
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
});

export default DashboardScreen;