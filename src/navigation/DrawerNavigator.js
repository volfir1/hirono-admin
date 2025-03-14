import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

// Screens
import DashboardScreen from '../screens/DashboardScreen';
import UsersScreen from '../screens/UserScreen';
import ProductsScreen from '../screens/Product/ProductScreen';
import OrdersScreen from '../screens/OrderScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Custom Drawer
import CustomDrawerContent from '../components/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#ecf0f1',
        drawerActiveTintColor: '#2c3e50',
        drawerInactiveTintColor: '#7f8c8d',
      }}
    >
      <Drawer.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="grid-outline" size={22} color={color} />
          )
        }}
      />
      <Drawer.Screen 
        name="Users" 
        component={UsersScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="people-outline" size={22} color={color} />
          )
        }}
      />
      <Drawer.Screen 
        name="Products" 
        component={ProductsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="cube-outline" size={22} color={color} />
          )
        }}
      />
      <Drawer.Screen 
        name="Orders" 
        component={OrdersScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="cart-outline" size={22} color={color} />
          )
        }}
      />
      <Drawer.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          )
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;