// src/components/ProductForm.jsx
import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from './Button';

const ProductForm = ({ 
  formData, 
  handleInputChange, 
  onSave, 
  onCancel, 
  fields, 
  title = 'Form', 
  saveButtonText = 'Save',
  cancelButtonText = 'Cancel',
  isLoading = false,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onCancel} style={styles.closeButton}>
          <Ionicons name="close" size={24} color="#2c3e50" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.formContainer}>
        {fields.map((field) => (
          <View key={field.id} style={styles.formGroup}>
            <Text style={styles.label}>{field.label}</Text>
            {field.type === 'select' ? (
              <View style={styles.selectContainer}>
                {/* Select options could be implemented here */}
                <TextInput
                  style={styles.input}
                  value={formData[field.id]}
                  onChangeText={(text) => handleInputChange(field.id, text)}
                  placeholder={field.placeholder}
                  placeholderTextColor="#bdc3c7"
                  editable={field.editable}
                />
                <Ionicons name="chevron-down" size={20} color="#7f8c8d" />
              </View>
            ) : (
              <TextInput
                style={[
                  styles.input,
                  !field.editable && styles.disabledInput
                ]}
                value={formData[field.id]?.toString()}
                onChangeText={(text) => handleInputChange(field.id, text)}
                placeholder={field.placeholder}
                placeholderTextColor="#bdc3c7"
                editable={field.editable}
                keyboardType={field.keyboardType || 'default'}
                secureTextEntry={field.secureTextEntry}
                multiline={field.multiline}
                numberOfLines={field.multiline ? 3 : 1}
                maxLength={field.maxLength}
                autoCapitalize={field.autoCapitalize || 'none'}
              />
            )}
            {field.helpText && (
              <Text style={styles.helpText}>{field.helpText}</Text>
            )}
          </View>
        ))}

        <View style={styles.buttonRow}>
          <Button
            title={cancelButtonText}
            type="outline"
            onPress={onCancel}
            style={styles.modalButton}
          />
          <Button
            title={saveButtonText}
            onPress={onSave}
            style={styles.modalButton}
            isLoading={isLoading}
            disabled={isLoading}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
    paddingBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  closeButton: {
    padding: 5,
  },
  formContainer: {
    flex: 1,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ecf0f1',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#2c3e50',
    backgroundColor: '#fff',
  },
  disabledInput: {
    backgroundColor: '#f5f6fa',
    color: '#7f8c8d',
  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ecf0f1',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  helpText: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 4,
    fontStyle: 'italic',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default ProductForm;