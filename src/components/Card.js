import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Card = ({ title, value, icon, color, percentChange }) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <View style={[styles.iconBackground, { backgroundColor: `${color}20` }]}>
          <Ionicons name={icon} size={24} color={color} />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
        {percentChange !== undefined && (
          <View style={styles.changeContainer}>
            <Ionicons 
              name={percentChange >= 0 ? "arrow-up-outline" : "arrow-down-outline"} 
              size={14} 
              color={percentChange >= 0 ? "#2ecc71" : "#e74c3c"} 
            />
            <Text 
              style={[
                styles.percentText, 
                { color: percentChange >= 0 ? "#2ecc71" : "#e74c3c" }
              ]}
            >
              {Math.abs(percentChange)}% {percentChange >= 0 ? "increase" : "decrease"}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  iconContainer: {
    marginRight: 15,
  },
  iconBackground: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percentText: {
    fontSize: 12,
    marginLeft: 3,
  },
});

export default Card;