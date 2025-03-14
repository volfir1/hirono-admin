import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import Button from '../components/Button';

const SettingsSection = ({ title, children }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionContent}>
        {children}
      </View>
    </View>
  );
};

const SettingItem = ({ title, description, children }) => {
  return (
    <View style={styles.settingItem}>
      <View style={styles.settingInfo}>
        <Text style={styles.settingTitle}>{title}</Text>
        {description && <Text style={styles.settingDescription}>{description}</Text>}
      </View>
      <View style={styles.settingControl}>
        {children}
      </View>
    </View>
  );
};

const SettingsScreen = ({ navigation }) => {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    emailAlerts: true,
    autoUpdate: false,
    dataSync: true,
  });

  const updateSetting = (key, value) => {
    setSettings({
      ...settings,
      [key]: value,
    });
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Settings" 
        onMenuPress={() => navigation.openDrawer()}
      />
      
      <ScrollView style={styles.content}>
        <SettingsSection title="General">
          <SettingItem
            title="Dark Mode"
            description="Enable dark mode for the app"
          >
            <Switch
              value={settings.darkMode}
              onValueChange={(value) => updateSetting('darkMode', value)}
              trackColor={{ false: '#bdc3c7', true: '#3498db' }}
              thumbColor={settings.darkMode ? '#fff' : '#fff'}
            />
          </SettingItem>
          
          <SettingItem
            title="Data Synchronization"
            description="Automatically sync data with cloud"
          >
            <Switch
              value={settings.dataSync}
              onValueChange={(value) => updateSetting('dataSync', value)}
              trackColor={{ false: '#bdc3c7', true: '#3498db' }}
              thumbColor={settings.dataSync ? '#fff' : '#fff'}
            />
          </SettingItem>
        </SettingsSection>
        
        <SettingsSection title="Notifications">
          <SettingItem
            title="Push Notifications"
            description="Receive notifications for new orders and updates"
          >
            <Switch
              value={settings.notifications}
              onValueChange={(value) => updateSetting('notifications', value)}
              trackColor={{ false: '#bdc3c7', true: '#3498db' }}
              thumbColor={settings.notifications ? '#fff' : '#fff'}
            />
          </SettingItem>
          
          <SettingItem
            title="Email Alerts"
            description="Receive daily summary emails"
          >
            <Switch
              value={settings.emailAlerts}
              onValueChange={(value) => updateSetting('emailAlerts', value)}
              trackColor={{ false: '#bdc3c7', true: '#3498db' }}
              thumbColor={settings.emailAlerts ? '#fff' : '#fff'}
            />
          </SettingItem>
        </SettingsSection>
        
        <SettingsSection title="Application">
          <SettingItem
            title="Automatic Updates"
            description="Update the app automatically when new versions are available"
          >
            <Switch
              value={settings.autoUpdate}
              onValueChange={(value) => updateSetting('autoUpdate', value)}
              trackColor={{ false: '#bdc3c7', true: '#3498db' }}
              thumbColor={settings.autoUpdate ? '#fff' : '#fff'}
            />
          </SettingItem>
          
          <SettingItem
            title="Clear Cache"
            description="Delete temporary files to free up space"
          >
            <Button
              title="Clear"
              type="outline"
              size="small"
              onPress={() => alert('Cache cleared')}
            />
          </SettingItem>
        </SettingsSection>
        
        <SettingsSection title="Account">
          <SettingItem
            title="Update Profile"
            description="Modify your account information"
          >
            <Button
              title="Edit"
              size="small"
              onPress={() => console.log('Edit profile')}
            />
          </SettingItem>
          
          <SettingItem
            title="Change Password"
            description="Update your password regularly for security"
          >
            <Button
              title="Change"
              size="small"
              onPress={() => console.log('Change password')}
            />
          </SettingItem>
        </SettingsSection>
        
        <View style={styles.footer}>
          <Text style={styles.versionText}>App Version: 1.0.0</Text>
        </View>
      </ScrollView>
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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 10,
  },
  sectionContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  settingInfo: {
    flex: 1,
    paddingRight: 10,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2c3e50',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 12,
    color: '#7f8c8d',
  },
  settingControl: {
    minWidth: 50,
    alignItems: 'flex-end',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  versionText: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});

export default SettingsScreen;