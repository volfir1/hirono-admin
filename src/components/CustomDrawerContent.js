import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const CustomDrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <View style={styles.userInfoSection}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={36} color="#fff" />
            </View>
            <View>
              <Text style={styles.name}>Admin User</Text>
              <Text style={styles.email}>admin@example.com</Text>
            </View>
          </View>
        </View>
        
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      
      <View style={styles.bottomDrawerSection}>
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => props.navigation.navigate('Login')}
        >
          <Ionicons name="log-out-outline" size={22} color="#e74c3c" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#2c3e50',
    marginBottom: 10,
  },
  userInfoSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#3498db',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    color: '#ecf0f1',
    fontSize: 12,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '500',
    color: '#e74c3c',
  },
});

export default CustomDrawerContent;