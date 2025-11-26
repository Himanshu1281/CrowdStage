import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  image: string;
  funding: number;
}

export default function EventCard({ id, title, date, image, funding }: EventCardProps) {
  return (
    <Link href={`/event/${id}`} asChild>
      <TouchableOpacity style={styles.card}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.title}>{title}</Text>
          
          {/* Funding Bar */}
          <View style={styles.fundingContainer}>
            <View style={styles.fundingBarBg}>
              <View style={[styles.fundingBarFill, { width: `${funding}%` }]} />
            </View>
            <Text style={styles.fundingText}>{funding}% Funded</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#334155',
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: 16,
  },
  date: {
    color: '#ec4899',
    fontWeight: '600',
    fontSize: 12,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  title: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  fundingContainer: {
    marginTop: 8,
  },
  fundingBarBg: {
    height: 6,
    backgroundColor: '#334155',
    borderRadius: 3,
    marginBottom: 6,
  },
  fundingBarFill: {
    height: '100%',
    backgroundColor: '#8b5cf6',
    borderRadius: 3,
  },
  fundingText: {
    color: '#94a3b8',
    fontSize: 12,
    textAlign: 'right',
  },
});
