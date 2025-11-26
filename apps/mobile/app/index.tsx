import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import EventCard from '../components/EventCard';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

const MOCK_EVENTS = [
  {
    id: '1',
    title: 'Rooftop Jazz Night',
    date: 'Fri, Nov 24 • 8:00 PM',
    image: 'https://images.unsplash.com/photo-1514525253440-b393452e3383?auto=format&fit=crop&w=800&q=80',
    funding: 75,
  },
  {
    id: '2',
    title: 'Indie Game Workshop',
    date: 'Sat, Nov 25 • 10:00 AM',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    funding: 40,
  },
  {
    id: '3',
    title: 'Underground Comedy',
    date: 'Sat, Nov 25 • 9:00 PM',
    image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=800&q=80',
    funding: 90,
  },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={styles.headerTitle}>Discover</Text>
              <Text style={styles.headerSubtitle}>Events happening near you</Text>
            </View>
            <Link href="/profile" asChild>
              <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#ec4899', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>JD</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>

        {MOCK_EVENTS.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: '800',
    color: '#f8fafc',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#94a3b8',
    marginTop: 5,
  },
});
