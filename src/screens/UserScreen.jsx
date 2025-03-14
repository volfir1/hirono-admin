import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import DataTable from '../components/DataTable';
import SearchBar from '../components/Searchbar';
import Button from '../components/Button';

const UsersScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample users data
  const usersData = [
    { id: '1', name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active' },
    { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor', status: 'Active' },
    { id: '3', name: 'Robert Johnson', email: 'robert.j@example.com', role: 'Viewer', status: 'Inactive' },
    { id: '4', name: 'Emily Davis', email: 'emily.d@example.com', role: 'Editor', status: 'Active' },
    { id: '5', name: 'Michael Brown', email: 'michael.b@example.com', role: 'Viewer', status: 'Active' },
    { id: '6', name: 'Sarah Wilson', email: 'sarah.w@example.com', role: 'Admin', status: 'Inactive' },
  ];

  // Filtered users based on search query
  const filteredUsers = usersData.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Table columns configuration
  const columns = [
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
    { key: 'role', title: 'Role' },
    { 
      key: 'status', 
      title: 'Status',
      render: (item) => (
        <View style={[
          styles.statusBadge, 
          { backgroundColor: item.status === 'Active' ? '#2ecc7120' : '#e74c3c20' }
        ]}>
          <Text 
            style={[
              styles.statusText, 
              { color: item.status === 'Active' ? '#2ecc71' : '#e74c3c' }
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
      icon: 'create-outline',
      color: '#3498db',
      onPress: (item) => console.log('Edit user:', item.id),
    },
    {
      icon: 'trash-outline',
      color: '#e74c3c',
      onPress: (item) => console.log('Delete user:', item.id),
    },
  ];

  return (
    <View style={styles.container}>
      <Header 
        title="Users" 
        onMenuPress={() => navigation.openDrawer()}
      />
      
      <View style={styles.content}>
        <View style={styles.topBar}>
          <SearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search users..."
            onClear={() => setSearchQuery('')}
          />
          <Button
            title="Add User"
            icon="person-add-outline"
            size="small"
          />
        </View>
        
        <DataTable
          columns={columns}
          data={filteredUsers}
          actions={actions}
          onRowPress={(item) => console.log('Row pressed:', item.id)}
          emptyMessage="No users found"
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
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
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

export default UsersScreen;