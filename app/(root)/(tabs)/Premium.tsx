import { DownloadPicture } from '@/components/PurchaseModal';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const subscriptionOptions = [
  {
    id: 'monthly',
    title: 'Latent+ Monthly',
    subtitle: 'One month subscription',
    price: '₹49',
    color: '#0088CC',
    icon: 'star-circle',
  },
  {
    id: 'yearly',
    title: 'Latent+ Yearly',
    subtitle: 'One year subscription',
    price: '₹399',
    color: '#FFB800',
    icon: 'star-circle',
  },
  {
    id: 'youtube',
    title: 'Already a YouTube Member?',
    subtitle:
      'Connect your YouTube account and get Latent+ membership on the app',
    color: '#FF0000',
    icon: 'youtube',
  },
];

export default function SubscriptionScreen() {
  const [selectedSelection, setSelectedSelection] = useState(null);

  const renderSubscriptionCard = ({ item }) => (
    <TouchableOpacity
      onPress={() => setSelectedSelection(item)}
      style={[styles.subscriptionCard, { backgroundColor: item.color }]}
    >
      <View style={styles.cardContent}>
        <View style={styles.cardLeft}>
          <Icon name={item.icon} size={32} color="#fff" />
          <View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
          </View>
        </View>
        {item.price && (
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.price}</Text>
            <Icon name="chevron-right" size={24} color="#fff" />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Get Latent+ Membership</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>
          This membership only works on the app, not YouTube
        </Text>
        <Text style={styles.infoText}>
          You will be able to watch all members-only content on the app, but
          buying the app membership doesn't make you a YouTube channel member.
        </Text>
      </View>

      <View style={styles.featuresList}>
        <View style={styles.featureItem}>
          <Icon name="play-circle-outline" size={24} color="#FFD700" />
          <Text style={styles.featureText}>Access to Bonus Episodes</Text>
        </View>
        <View style={styles.featureItem}>
          <Icon name="message-outline" size={24} color="#FFD700" />
          <Text style={styles.featureText}>Community conversations</Text>
        </View>
        <View style={styles.featureItem}>
          <Icon name="gift-outline" size={24} color="#FFD700" />
          <Text style={styles.featureText}>Exclusive Give-Aways</Text>
        </View>
      </View>

      <FlatList
        data={subscriptionOptions}
        renderItem={renderSubscriptionCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.subscriptionOptions}
      />

      {selectedSelection && <DownloadPicture onClose={() => setSelectedSelection(null)} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
  infoTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
  },
  featuresList: {
    padding: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  featureText: {
    color: '#fff',
    marginLeft: 12,
    fontSize: 16,
  },
  subscriptionOptions: {
    paddingHorizontal: 16,
  },
  subscriptionCard: {
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  cardSubtitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    marginLeft: 12,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 8,
  },
});
