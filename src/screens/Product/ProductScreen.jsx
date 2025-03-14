// src/screens/ProductsScreen.jsx
import React from 'react';
import { 
  View, 
  StyleSheet, 
  Modal, 
  TouchableWithoutFeedback, 
  Keyboard, 
  StatusBar, 
  SafeAreaView,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { 
  Header, 
  DataTable, 
  SearchBar, 
  Button, 
  ProductForm, 
} from '../../components/index';
import useProducts from './useProducts';
import { getProductColumns, getProductActions, productFormFields } from './productUtils';
import ConfirmDeleteModal from '../../components/ConfirmDeleteModal';

const ProductsScreen = ({ navigation }) => {
  // Use the custom hook for product management
  const {
    filteredProducts,
    searchQuery,
    setSearchQuery,
    modalVisible,
    setModalVisible,
    deleteModalVisible,
    setDeleteModalVisible,
    currentProduct,
    formData,
    handleInputChange,
    handleAddProduct,
    handleEditProduct,
    handleDeletePrompt,
    saveProduct,
    deleteProduct
  } = useProducts();

  // Get column configuration
  const columns = getProductColumns();
  
  // Get actions configuration
  const actions = getProductActions(handleEditProduct, handleDeletePrompt);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor="#ffffff" 
        barStyle="dark-content"
      />
      <Header 
        title="Products" 
        onMenuPress={() => navigation.openDrawer()}
        elevated={true}
      />
      
      <View style={styles.content}>
        <View style={styles.searchAndButtonContainer}>
          <View style={styles.searchContainer}>
            <SearchBar
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search products..."
              onClear={() => setSearchQuery('')}
              style={styles.searchBar}
            />
          </View>
          
          <Button
            title="Add Product"
            icon="add-outline"
            size="small"
            onPress={handleAddProduct}
            style={styles.addButton}
          />
        </View>
        
        <View style={styles.tableContainer}>
          <DataTable
            columns={columns}
            data={filteredProducts}
            actions={actions}
            onRowPress={handleEditProduct}
            emptyMessage="No products found"
            style={styles.dataTable}
          />
        </View>
      </View>

      {/* Product Form Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <ProductForm 
                formData={formData}
                handleInputChange={handleInputChange}
                onSave={saveProduct}
                onCancel={() => setModalVisible(false)}
                fields={productFormFields}
                title={currentProduct ? 'Edit Product' : 'Add New Product'}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Delete Confirmation Modal */}
      <ConfirmDeleteModal 
        visible={deleteModalVisible}
        item={currentProduct}
        onCancel={() => setDeleteModalVisible(false)}
        onConfirm={deleteProduct}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  searchAndButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  searchContainer: {
    flex: 1,
  },
  searchBar: {
    elevation: 2,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  addButton: {
    backgroundColor: '#6200ee',
    borderRadius: 8,
    elevation: 3,
  },
  tableContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    overflow: 'hidden',
    ...Platform.select({
      android: {
        elevation: 4,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
    }),
  },
  dataTable: {
    borderRadius: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    width: '92%',
    maxHeight: '85%',
    padding: 24,
    ...Platform.select({
      android: {
        elevation: 24,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
    }),
  },
});

export default ProductsScreen;