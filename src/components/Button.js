import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Button = ({ 
  title, 
  onPress, 
  type = 'primary', 
  size = 'medium', 
  icon,
  isLoading = false,
  disabled = false,
  fullWidth = false,
}) => {
  const getButtonStyle = () => {
    switch (type) {
      case 'secondary':
        return styles.secondaryButton;
      case 'outline':
        return styles.outlineButton;
      case 'danger':
        return styles.dangerButton;
      default:
        return styles.primaryButton;
    }
  };

  const getTextStyle = () => {
    switch (type) {
      case 'outline':
        return styles.outlineButtonText;
      default:
        return styles.buttonText;
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return styles.smallButton;
      case 'large':
        return styles.largeButton;
      default:
        return {};
    }
  };

  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        getButtonStyle(), 
        getSizeStyle(),
        fullWidth && styles.fullWidth,
        disabled && styles.disabledButton,
      ]} 
      onPress={onPress}
      disabled={isLoading || disabled}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <>
          {icon && <Ionicons name={icon} size={size === 'small' ? 16 : 20} color={type === 'outline' ? '#3498db' : '#fff'} style={styles.icon} />}
          <Text style={[getTextStyle(), disabled && styles.disabledText]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#3498db',
  },
  secondaryButton: {
    backgroundColor: '#95a5a6',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#3498db',
  },
  dangerButton: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
  outlineButtonText: {
    color: '#3498db',
    fontWeight: '500',
    fontSize: 16,
  },
  smallButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  largeButton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 8,
  },
  fullWidth: {
    width: '100%',
  },
  disabledButton: {
    backgroundColor: '#bdc3c7',
    borderColor: '#bdc3c7',
  },
  disabledText: {
    color: '#7f8c8d',
  },
});

export default Button;