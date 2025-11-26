import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function EventDetails() {
  const { id } = useLocalSearchParams();
  
  // Mock Data (In real app, fetch based on ID)
  const event = {
    title: 'Rooftop Jazz Night',
    date: 'Fri, Nov 24 • 8:00 PM',
    location: 'Skyline Lounge, New York',
    description: 'Experience an evening of smooth jazz under the stars. Featuring the renowned quartet "Midnight Blue", this exclusive event offers breathtaking views and soulful melodies. Cocktails and hors d\'oeuvres included.',
    image: 'https://images.unsplash.com/photo-1514525253440-b393452e3383?auto=format&fit=crop&w=800&q=80',
    price: '$45.00',
    funding: 75,
  };

  const handlePledge = () => {
    // Mock Payment Flow
    alert('Redirecting to Easebuzz Payment Gateway...');
    // In real app, open WebBrowser or use Easebuzz SDK
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: event.title, headerTransparent: true, headerBlurEffect: 'dark' }} />
      <StatusBar style="light" />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={{ uri: event.image }} style={styles.heroImage} />
        
        <View style={styles.content}>
          <Text style={styles.date}>{event.date}</Text>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.location}>📍 {event.location}</Text>
          
          <View style={styles.fundingContainer}>
            <View style={styles.fundingBarBg}>
              <View style={[styles.fundingBarFill, { width: `${event.funding}%` }]} />
            </View>
            <Text style={styles.fundingText}>{event.funding}% Funded</Text>
          </View>

          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.description}>{event.description}</Text>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.actionBar}>
        <View>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceValue}>{event.price}</Text>
        </View>
        <TouchableOpacity style={styles.buyButton} onPress={handlePledge}>
          <Text style={styles.buyButtonText}>Pledge Ticket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  heroImage: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 20,
    marginTop: -20,
    backgroundColor: '#0f172a',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  date: {
    color: '#ec4899',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  title: {
    color: '#f8fafc',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  location: {
    color: '#94a3b8',
    fontSize: 16,
    marginBottom: 24,
  },
  fundingContainer: {
    marginBottom: 32,
  },
  fundingBarBg: {
    height: 8,
    backgroundColor: '#334155',
    borderRadius: 4,
    marginBottom: 8,
  },
  fundingBarFill: {
    height: '100%',
    backgroundColor: '#8b5cf6',
    borderRadius: 4,
  },
  fundingText: {
    color: '#94a3b8',
    fontSize: 14,
    textAlign: 'right',
  },
  sectionTitle: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    color: '#cbd5e1',
    fontSize: 16,
    lineHeight: 24,
  },
  actionBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1e293b',
    padding: 20,
    paddingBottom: 34,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#334155',
  },
  priceLabel: {
    color: '#94a3b8',
    fontSize: 12,
  },
  priceValue: {
    color: '#f8fafc',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#ec4899',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
