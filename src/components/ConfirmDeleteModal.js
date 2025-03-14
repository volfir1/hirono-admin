// src/components/ConfirmDeleteModal.jsx
import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import Button from './Button';

const ConfirmDeleteModal = ({ visible, item, onCancel, onConfirm }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.confirmModalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Confirm Delete</Text>
          </View>
          
          <Text style={styles.confirmText}>
            Are you sure you want to delete "{item?.name}"?
          </Text>
          
          <View style={styles.buttonRow}>
            <Button
              title="Cancel"
              type="outline"
              onPress={onCancel}
              style={styles.modalButton}
            />
            <Button
              title="Delete"
              type="danger"
              onPress={onConfirm}
              style={styles.modalButton}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmModalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '80%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHeader: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
    paddingBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  confirmText: {
    fontSize: 16,
    color: '#2c3e50',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default ConfirmDeleteModal;