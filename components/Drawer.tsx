import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import {
  User,
  Star,
  Download,
  MessageSquare,
  MessageCircle,
  Share2,
  LogOut
} from 'lucide-react-native';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
  isLogout?: boolean;
}

const NavItem = ({ icon, label, onPress, isLogout = false }: NavItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.navItem}
  >
    <View style={styles.navContent}>
      {React.cloneElement(icon as React.ReactElement, {
        size: 20,
        color: isLogout ? '#ef4444' : '#d1d5db',
        strokeWidth: 2
      })}
      <Text style={[
        styles.navLabel,
        isLogout ? styles.logoutText : styles.normalText
      ]}>
        {label}
      </Text>
    </View>
  </TouchableOpacity>
);

const Sidebar = ({ onPress }: { onPress: () => void }) => {
  const handleLogout = () => {
    console.log('Logging out...');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* <Text style={styles.logoText}>LATENT</Text> */}
        <Image source={require('assets/latent_sidebar.png')} />
      </View>

      <ScrollView style={styles.nav}>
        <NavItem
          icon={<User />}
          label="Profile"
        />
        <NavItem
          icon={<Star />}
          label="Stars of Latent"
        />
        <NavItem
          icon={<Download />}
          label="Downloads"
        />
        <NavItem
          icon={<MessageSquare />}
          label="Support Chat"
        />
        <NavItem
          icon={<MessageCircle />}
          label="Feedback"
        />
        <NavItem
          icon={<Star />}
          label="Rate Us"
        />
        <NavItem
          icon={<Share2 />}
          label="Share"
        />
      </ScrollView>

      <View style={styles.logoutContainer}>
        <NavItem
          icon={<LogOut />}
          label="Log Out"
          onPress={onPress}
          isLogout
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    maxWidth: 280,
    height: '100%',
    backgroundColor: '#121212',
    borderRightWidth: 1,
    borderRightColor: '#1f2937',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
  },
  logoContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1f2937',
  },
  logoText: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  nav: {
    flex: 1,
  },
  navItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  navContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  navLabel: {
    fontSize: 16,
  },
  normalText: {
    color: '#d1d5db',
  },
  logoutText: {
    color: '#ef4444',
  },
  logoutContainer: {
    borderTopWidth: 1,
    borderTopColor: '#1f2937',
    paddingVertical: 8,
  },
});

export default Sidebar;