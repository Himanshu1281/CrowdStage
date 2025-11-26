import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import QRCode from 'react-native-qrcode-svg';

const MOCK_TICKETS = [
  {
    id: '1',
    eventTitle: 'Rooftop Jazz Night',
    date: 'Fri, Nov 24 • 8:00 PM',
    status: 'CONFIRMED',
    qrData: 'ticket-123-jazz',
  },
  {
    id: '2',
    eventTitle: 'Tech Workshop',
    date: 'Sat, Nov 25 • 10:00 AM',
    status: 'PENDING',
    qrData: 'ticket-456-tech',
  },
];

export default function Profile() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JD</Text>
        </View>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Tickets</Text>
        <ScrollView contentContainerStyle={styles.ticketsList}>
          {MOCK_TICKETS.map((ticket) => (
            <View key={ticket.id} style={styles.ticketCard}>
              <View style={styles.ticketInfo}>
                <Text style={styles.ticketEvent}>{ticket.eventTitle}</Text>
                <Text style={styles.ticketDate}>{ticket.date}</Text>
                <View style={[styles.statusBadge, ticket.status === 'CONFIRMED' ? styles.statusConfirmed : styles.statusPending]}>
                  <Text style={styles.statusText}>{ticket.status}</Text>
                </View>
              </View>
              <View style={styles.qrContainer}>
                <QRCode value={ticket.qrData} size={80} />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#1e293b',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ec4899',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  name: {
    color: '#f8fafc',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    color: '#94a3b8',
    fontSize: 16,
  },
  section: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ticketsList: {
    paddingBottom: 20,
  },
  ticketCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ticketInfo: {
    flex: 1,
    marginRight: 16,
  },
  ticketEvent: {
    color: '#0f172a',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  ticketDate: {
    color: '#64748b',
    fontSize: 14,
    marginBottom: 12,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusConfirmed: {
    backgroundColor: '#dcfce7',
  },
  statusPending: {
    backgroundColor: '#fef9c3',
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  qrContainer: {
    padding: 8,
    backgroundColor: 'white',
  },
});
