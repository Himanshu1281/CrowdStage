import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0f172a',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          contentStyle: {
            backgroundColor: '#0f172a',
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Discover', headerShown: false }} />
        <Stack.Screen name="event/[id]" options={{ title: 'Event Details', presentation: 'modal' }} />
        <Stack.Screen name="profile" options={{ title: 'My Profile' }} />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
