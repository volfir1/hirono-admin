import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DataTable = ({ 
  columns, 
  data, 
  onRowPress,
  actions,
  emptyMessage = 'No data available',
}) => {
  if (!data || data.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>{emptyMessage}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        {columns.map((column) => (
          <View 
            key={column.key} 
            style={[
              styles.headerCell, 
              column.width && { width: column.width },
            ]}
          >
            <Text style={styles.headerText}>{column.title}</Text>
          </View>
        ))}
        {actions && <View style={styles.actionsHeader} />}
      </View>
      <ScrollView style={styles.tableBody}>
        {data.map((item, index) => (
          <TouchableOpacity 
            key={item.id || index}
            style={[styles.row, index % 2 === 0 && styles.evenRow]}
            onPress={() => onRowPress && onRowPress(item)}
            disabled={!onRowPress}
          >
            {columns.map((column) => (
              <View 
                key={`${item.id || index}-${column.key}`}
                style={[
                  styles.cell, 
                  column.width && { width: column.width },
                ]}
              >
                {column.render ? (
                  column.render(item)
                ) : (
                  <Text 
                    style={styles.cellText}
                    numberOfLines={1}
                  >
                    {item[column.key]}
                  </Text>
                )}
              </View>
            ))}
            {actions && (
              <View style={styles.actionsCell}>
                {actions.map((action, actionIndex) => (
                  <TouchableOpacity 
                    key={actionIndex}
                    style={styles.actionButton}
                    onPress={() => action.onPress(item)}
                  >
                    <Ionicons name={action.icon} size={18} color={action.color || '#3498db'} />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ecf0f1',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f5f6fa',
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  headerCell: {
    padding: 12,
    flex: 1,
  },
  headerText: {
    fontWeight: '600',
    color: '#2c3e50',
    fontSize: 14,
  },
  tableBody: {
    maxHeight: 400,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  evenRow: {
    backgroundColor: '#f9f9f9',
  },
  cell: {
    padding: 12,
    flex: 1,
    justifyContent: 'center',
  },
  cellText: {
    color: '#2c3e50',
    fontSize: 14,
  },
  actionsHeader: {
    width: 100,
  },
  actionsCell: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  actionButton: {
    padding: 8,
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ecf0f1',
  },
  emptyText: {
    color: '#7f8c8d',
    fontSize: 14,
  },
});

export default DataTable;