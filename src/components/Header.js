// src/components/Header.jsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = ({ title, onMenuPress }) => {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={[styles.header, { paddingTop: insets.top }]}>
      <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
        <Ionicons name="menu-outline" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.headerTitle} numberOfLines={1}>{title}</Text>
      <TouchableOpacity style={styles.profileButton}>
        <Ionicons name="person-circle-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2c3e50',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    paddingBottom: 10,
    width: '100%',  // Ensure the header spans the full width
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,  // Allow the title to shrink if needed
    textAlign: 'center',
  },
  menuButton: {
    padding: 5,
    width: 35,  // Fixed width for the menu button
  },
  profileButton: {
    padding: 5,
    width: 35,  // Fixed width for the profile button
  },
});

export default Header;